'use client'

import ApplicationCategories from '@/components/CustomSoftwareServicePage/ApplicationsSection/ApplicationCategories'
import IndustrySolutions from '@/components/CustomSoftwareServicePage/ApplicationsSection/IndustrySolutions'

const ApplicationsSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <ApplicationCategories />
      <IndustrySolutions />
    </section>
  )
}

export default ApplicationsSection