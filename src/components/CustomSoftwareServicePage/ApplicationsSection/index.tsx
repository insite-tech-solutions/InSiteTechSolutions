'use client'

import ApplicationCategories from '@/components/CustomSoftwareServicePage/ApplicationsSection/ApplicationCategories'
import IndustrySolutions from '@/components/CustomSoftwareServicePage/ApplicationsSection/IndustrySolutions'

const ApplicationsSection: React.FC = () => {
  return (
    <section className="py-2 bg-gray-50 relative overflow-hidden">
      <ApplicationCategories />
      <div className="p-6 mt-4">
        <IndustrySolutions />
      </div>
    </section>
  )
}

export default ApplicationsSection