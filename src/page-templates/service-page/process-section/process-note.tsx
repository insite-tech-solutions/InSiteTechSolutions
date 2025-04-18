// src/page-templates/service-page/process-section/process-note.tsx

import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProcessNoteProps {
  note: string;
  link?: {
    text: string;
    url: string;
  };
}

/**
 * ProcessNote displays additional information at the bottom of the process section
 */
const ProcessNote: React.FC<ProcessNoteProps> = ({ note, link }) => {
  return (
    <div className="container mx-auto px-6 pb-16 mb-[-2.5rem] lg:pb-24">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 max-w-4xl mx-auto shadow-md border border-blue-600">
        <p className="text-gray-200 mb-4">
          {note}
        </p>
        
        {link && (
          <a
            href={link.url}
            className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-400 font-medium"
          >
            {link.text}
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProcessNote;