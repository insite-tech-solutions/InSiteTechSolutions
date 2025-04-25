'use client'
import React from 'react'
import { FAQContent } from '../types'
import FAQSectionWrapper from './faq-section'

interface FAQSectionProps {
  content: FAQContent
}

/**
 * FAQ section component displays frequently asked questions in an accordion format
 * 
 * @param content - Configuration for the FAQ section including title, description,
 * a list of FAQ items, and an optional link to more resources
 */
const FAQSection: React.FC<FAQSectionProps> = ({ content }) => {
  return <FAQSectionWrapper content={content} />
}

export default React.memo(FAQSection);