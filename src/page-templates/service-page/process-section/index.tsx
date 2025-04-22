'use client'
import React from 'react'
import { ProcessContent } from '../types'
import ProcessSectionWrapper from './process-section'

interface ProcessSectionProps {
  content: ProcessContent
}

/**
 * ProcessSection component displays the service process steps with
 * interactive animations and visual elements.
 * 
 * @param content - Configuration for process steps and timeline
 */
const ProcessSection: React.FC<ProcessSectionProps> = ({ content }) => {
  return (
    <section className="w-full">
      <ProcessSectionWrapper content={content} />
    </section>
  )
}

export default React.memo(ProcessSection); 