
import React from 'react';
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  preTitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  preTitle,
  title,
  description,
  align = 'center',
  className
}) => {
  return (
    <div 
      className={cn(
        'w-full max-w-3xl mx-auto mb-12',
        align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center',
        className
      )}
    >
      {preTitle && (
        <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-heat-700 uppercase bg-heat-200 rounded-full animate-fade-in">
          {preTitle}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-balance animate-fade-in">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground animate-fade-in-up">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
