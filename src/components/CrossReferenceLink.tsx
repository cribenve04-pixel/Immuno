import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CrossReferenceLinkProps {
  targetLesson: number;
  targetSectionId?: string;
  label: string;
  topicHint?: string;
  onNavigate?: (lessonNumber: number, sectionId?: string) => void;
  className?: string;
}

export const CrossReferenceLink: React.FC<CrossReferenceLinkProps> = ({
  targetLesson,
  targetSectionId,
  label,
  topicHint,
  onNavigate,
  className = ''
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(targetLesson, targetSectionId);
    } else {
      // Fallback custom event or hash navigation
      window.dispatchEvent(
        new CustomEvent('navigate-to-lesson', {
          detail: { lessonNumber: targetLesson, sectionId: targetSectionId }
        })
      );
    }
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      title={`Vai a Lezione ${targetLesson}${topicHint ? `: ${topicHint}` : ''}`}
      className={`inline-flex items-center gap-1 px-2 py-0.5 my-0.5 rounded-md text-xs font-semibold bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 transition-all cursor-pointer shadow-2xs group ${className}`}
    >
      <span>{label}</span>
      <ArrowUpRight className="w-3 h-3 text-blue-500 group-hover:text-blue-800 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </button>
  );
};
