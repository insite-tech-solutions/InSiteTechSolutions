// src/page-templates/service-page/process-section/index.tsx

'use client'

import React from 'react'
import { ProcessContent } from '../types'
import ProcessTimeline from './process-timeline'
import ProcessNote from './process-note'

interface ProcessSectionProps {
  content: ProcessContent
}

/**
 * ProcessSection component displays the development process steps
 * with an animated timeline and optional note.
 * 
 * @param content - Configuration for process steps and note
 */
const ProcessSection: React.FC<ProcessSectionProps> = ({ content }) => {
  return (
    <section className="bg-gray-50">
      {/* Section header */}
      <div className="text-center max-w-4xl mx-auto py-16">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-8">
          {content.title}
        </h2>
        <p className="text-xl text-gray-700 leading-relaxed">
          {content.description}
        </p>
      </div>
      
      {/* Timeline with steps */}
      <ProcessTimeline steps={content.steps} />
      
      {/* Optional note */}
      {content.note && <ProcessNote note={content.note} link={content.link} />}
    </section>
  )
}

export default ProcessSection