'use client'

import { motion, Variants } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight, Plus, ShoppingCart, Settings, Briefcase, Truck, Code2 } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import { Autoplay, Navigation, Pagination, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

// Initialize Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination, EffectCoverflow])

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

interface IndustryCardProps {
  title: string
  items: string[]
  icon: React.ElementType
  isActive?: boolean
}

const IndustryCard: React.FC<IndustryCardProps> = ({ title, items, icon: Icon, isActive = false }) => (
  <motion.div
    variants={fadeInUp}
    className={`
      relative
      bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg 
      rounded-xl shadow-lg p-6 
      transition-all duration-800 ease-in-out
      w-80 h-72 
      ${isActive 
        ? 'border-2 border-blue-600 z-10' 
        : 'border-2 filter blur-[1.65px] opacity-97'
      }
    `}
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 rounded-full bg-blue-100">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
    </div>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2">
          <ArrowRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
)

const IndustrySolutions: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const industries = [
    {
      title: "Manufacturing & Engineering",
      icon: Settings,
      items: [
        "Process control systems",
        "Quality assurance software",
        "Equipment monitoring",
        "Production planning tools"
      ]
    },
    {
      title: "Retail & E-commerce",
      icon: ShoppingCart,
      items: [
        "Custom POS systems",
        "Product customization tools",
        "Inventory management solutions",
        "Interactive product catalogs"
      ]
    },
    {
      title: "Professional Services",
      icon: Briefcase,
      items: [
        "Client management portals",
        "Service tracking platforms",
        "Resource scheduling systems",
        "Reporting and analytics tools"
      ]
    },
    {
      title: "Logistics & Supply Chain",
      icon: Truck,
      items: [
        "Transportation management systems",
        "Warehouse management software",
        "Supply chain optimization tools"
      ]
    }
  ]

  return (
    <div className="container mx-auto relative rounded-xl">
      {/* Industry-Specific Solutions */}
      <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
        <h3 className="text-3xl font-bold mt-6 mb-6 text-gray-900">
          Industry-Specific Solutions
        </h3>
        <p className="text-lg text-gray-700">
          Drawing on our technical expertise across numerous sectors, we create customized solutions that meet the unique demands of your industry.
        </p>
      </motion.div>

      <div className="relative overflow-hidden rounded-xl">
      {/* Add the background */}
      <div 
  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
  <Code2 className="text-blue-600" width={600} height={600} />
</div>

      
      {/* Carousel */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
        speed={800}
        centeredSlides={true}
        //centerInsufficientSlides={true}
        //centeredSlidesBounds={true}
        //initialSlide={2}
        effect={'coverflow'}
        grabCursor={true}
        coverflowEffect={{
          rotate: 10,
          scale: 0.85,
          depth: 50,
          modifier: 1,
          slideShadows: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          320: {
            slidesPerView: 1.4,
            spaceBetween: 3,
            centeredSlides: true,
            coverflowEffect: {
              rotate: 5,
              scale: 0.85,
              depth: 5,
              modifier: 1
            }
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true,
            coverflowEffect: {
              rotate: 10,
              scale: 0.85,
              depth: 50,
              modifier: 1
            }
          }
        }}
        className="mySwiper relative mt-10 mb-10 rounded-xl flex justify-center items-center"
      >
        {industries.map((industry, index) => (
          <SwiperSlide key={index}>
            <IndustryCard 
              {...industry} 
              isActive={index === activeIndex} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
      className="swiper-pagination"
      style={{ bottom: '10px' }} /* Adjust position here */
      ></div>
      </div>

      {/* And Many More! Card */}
      <motion.div
        variants={fadeInUp}
        className="bg-blue-600 text-white rounded-xl p-8 text-center mt-12 shadow-lg"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <Plus className="h-6 w-6" />
          <h4 className="text-2xl font-semibold">And Many More!</h4>
        </div>
        <p className="mb-6 text-blue-100">
          Don&apos;t see your industry listed? Contact us to discuss your specific needs.
        </p>
        <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
          Get in Touch
          <ArrowRight className="h-5 w-5" />
        </button>
      </motion.div>
    </div>
  )
}

export default IndustrySolutions