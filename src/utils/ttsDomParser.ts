/**
 * TTS DOM Parser & Auditory Semantic Optimizer
 * Extracts readable educational segments and translates visual tables, diagrams,
 * and charts into fluid, spoken Italian narratives.
 */

export interface TTSSegment {
  id: string;
  element: HTMLElement;
  text: string;        // Text optimized for speech synthesis
  rawText: string;     // Text as displayed on screen
  type: 'heading' | 'paragraph' | 'list-item' | 'table' | 'diagram' | 'quote' | 'interactive';
  label?: string;      // Human-readable category (e.g. "Titolo", "Spiegazione", "Tabella")
}

/**
 * Converts a table element into a fluid, spoken Italian narrative rather than reading raw cells.
 */
export function convertTableToSpokenNarrative(tableEl: HTMLTableElement): string {
  // Check if dedicated auditory description is provided via data attribute
  const customSpeech = tableEl.getAttribute('data-speech-text') || tableEl.getAttribute('data-tts-text');
  if (customSpeech) return customSpeech;

  // Check aria-label or caption
  const caption = tableEl.querySelector('caption')?.textContent?.trim();
  const ariaLabel = tableEl.getAttribute('aria-label');
  const title = caption || ariaLabel || 'Tabella comparativa';

  // Extract headers
  const thEls = Array.from(tableEl.querySelectorAll('thead th, tr:first-child th'));
  const headers = thEls.map(th => th.textContent?.trim() || '').filter(Boolean);

  // Extract data rows
  const rowEls = Array.from(tableEl.querySelectorAll('tbody tr, tr:not(:first-child)'));
  
  if (rowEls.length === 0) {
    return `${title}. La tabella contiene dati riassuntivi sintetici.`;
  }

  let narrative = `${title}. La tabella è composta da ${rowEls.length} righe. `;
  if (headers.length > 0) {
    narrative += `Le colonne principali sono: ${headers.slice(0, 5).join(', ')}. `;
  }

  // Summarize up to 8 key rows to avoid acoustic fatigue
  const maxRows = Math.min(rowEls.length, 8);
  for (let i = 0; i < maxRows; i++) {
    const row = rowEls[i];
    const cells = Array.from(row.querySelectorAll('td, th')).map(c => c.textContent?.trim() || '');
    if (cells.length === 0) continue;

    const firstCol = cells[0];
    const otherCols = cells.slice(1, 4).map((val, idx) => {
      const headerName = headers[idx + 1] ? `per ${headers[idx + 1]}: ` : '';
      return `${headerName}${val}`;
    }).filter(Boolean);

    narrative += `Elemento: ${firstCol}. ${otherCols.join('. ')}. `;
  }

  if (rowEls.length > maxRows) {
    narrative += `Seguono ulteriori ${rowEls.length - maxRows} voci dettagliate nella tabella.`;
  }

  return narrative.replace(/\s+/g, ' ').trim();
}

/**
 * Converts a complex visual element (diagram, process map, SVG) into an auditory explanation.
 */
export function convertVisualToSpokenNarrative(el: HTMLElement): string {
  const customSpeech = el.getAttribute('data-speech-text') || el.getAttribute('data-tts-text');
  if (customSpeech) return customSpeech;

  const ariaLabel = el.getAttribute('aria-label');
  if (ariaLabel) return ariaLabel;

  // Check for diagram title or description inside
  const titleEl = el.querySelector('h3, h4, .diagram-title, [data-title]');
  const title = titleEl?.textContent?.trim() || 'Schema concettuale illustrativo';
  
  const descEl = el.querySelector('p, .diagram-desc, [data-description]');
  const desc = descEl?.textContent?.trim() || '';

  return `${title}. ${desc}`.trim();
}

/**
 * Scans a container element (e.g. main lecture article) and collects all readable segments.
 */
export function extractLectureSegments(container: HTMLElement): TTSSegment[] {
  const segments: TTSSegment[] = [];
  const selector = 'h1, h2, h3, h4, p, li, blockquote, table, [data-speech-text], [data-tts-text]';
  const elements = Array.from(container.querySelectorAll<HTMLElement>(selector));

  let index = 0;
  const processedTables = new Set<HTMLTableElement>();

  for (const el of elements) {
    // Skip if inside buttons, navigation controls, modals, or flashcard/quiz buttons
    if (
      el.closest('button') ||
      el.closest('nav') ||
      el.closest('#sidebar-toc') ||
      el.closest('.no-tts') ||
      el.closest('[role="dialog"]')
    ) {
      continue;
    }

    // Skip paragraphs or list items inside tables (the table handles its own narrative)
    const parentTable = el.closest('table') as HTMLTableElement | null;
    if (parentTable && el !== parentTable) {
      continue;
    }

    // Handle Tables
    if (el.tagName.toLowerCase() === 'table') {
      const table = el as HTMLTableElement;
      if (processedTables.has(table)) continue;
      processedTables.add(table);

      const spoken = convertTableToSpokenNarrative(table);
      if (spoken.length > 5) {
        index++;
        const segmentId = table.id || `tts-seg-table-${index}`;
        table.setAttribute('data-tts-id', segmentId);

        segments.push({
          id: segmentId,
          element: table,
          text: spoken,
          rawText: table.textContent?.slice(0, 100) || '',
          type: 'table',
          label: 'Tabella Comparativa'
        });
      }
      continue;
    }

    // Handle Elements with explicit data-speech-text
    const explicitSpeech = el.getAttribute('data-speech-text') || el.getAttribute('data-tts-text');
    if (explicitSpeech) {
      index++;
      const segmentId = el.id || `tts-seg-${index}`;
      el.setAttribute('data-tts-id', segmentId);

      segments.push({
        id: segmentId,
        element: el,
        text: explicitSpeech,
        rawText: el.textContent?.trim() || '',
        type: 'diagram',
        label: 'Elemento Interattivo / Schema'
      });
      continue;
    }

    // Handle Headings, Paragraphs, Lists
    const rawText = el.textContent?.trim() || '';
    // Skip tiny icons, symbols, or empty elements
    if (rawText.length < 3) continue;

    // Clean text for speech: clean LaTeX remnants, bracket references, code artifacts
    let cleanSpokenText = rawText
      .replace(/\[\s*\d+\s*\]/g, '') // remove bracket references [1]
      .replace(/\$\s*([a-zA-Z0-9_\\]+)\s*\$/g, '$1') // clean stray $ formulas
      .replace(/\s+/g, ' ')
      .trim();

    const tag = el.tagName.toLowerCase();
    let type: TTSSegment['type'] = 'paragraph';
    let label = 'Paragrafo';

    if (tag.startsWith('h')) {
      type = 'heading';
      label = tag === 'h1' ? 'Titolo Lezione' : tag === 'h2' ? 'Capitolo' : 'Sottosezione';
    } else if (tag === 'li') {
      type = 'list-item';
      label = 'Punto Elenco';
    } else if (tag === 'blockquote') {
      type = 'quote';
      label = 'Citazione / Focus';
    }

    index++;
    const segmentId = el.id || `tts-seg-${index}`;
    el.setAttribute('data-tts-id', segmentId);

    segments.push({
      id: segmentId,
      element: el,
      text: cleanSpokenText,
      rawText,
      type,
      label
    });
  }

  return segments;
}
