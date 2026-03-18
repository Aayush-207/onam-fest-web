import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

const UnderDevelopment = () => {
  const navigate = useNavigate()
  const sectionRef = useRef(null)
  const [cardsVisible, setCardsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCardsVisible(true)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="explore" className="section-padding bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-onam-gold/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-onam-green/10 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Header with animations */}
        <div className="mb-12 sm:mb-16" style={{
          animation: 'fadeInUp 0.6s ease-out'
        }}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 font-heading leading-tight" style={{
            background: 'linear-gradient(135deg, #1F7857 0%, #F7A700 50%, #D32F2F 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'slideInDown 0.8s ease-out'
          }}>
            Explore Onam
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto font-sans px-4 leading-relaxed" style={{
            animation: 'fadeInUp 0.8s ease-out 0.2s both'
          }}>
            Discover more ways to celebrate and experience the traditions of Onam with our curated selection.
          </p>
        </div>

        {/* Development Status Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4">
          {/* Rituals Card */}
          <div 
            onClick={() => navigate('/rituals')} 
            className="relative group"
            style={{
              animation: cardsVisible ? 'slideInLeft 0.8s ease-out 0.2s both' : 'none'
            }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-onam-green via-onam-gold to-onam-red rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500 -z-10"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500 cursor-pointer group">
              {/* Card background animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-all duration-300"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-125 transition-transform duration-500 shadow-lg">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 font-heading">Rituals</h3>
                <p className="text-gray-600 mb-4 font-sans leading-relaxed h-12 flex items-center justify-center">
                  Discover the sacred traditions and spiritual practices of Onam
                </p>
                <div className="inline-flex items-center">
                  <span className="bg-gradient-to-r from-orange-100 to-orange-50 text-orange-800 px-4 py-2 rounded-full font-medium text-sm group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-orange-400 group-hover:text-white transition-all duration-300 shadow-md">
                    Explore Now →
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Shopping Card */}
          <div 
            onClick={() => window.location.href = '/shopping'}
            className="relative group"
            style={{
              animation: cardsVisible ? 'slideInRight 0.8s ease-out 0.4s both' : 'none'
            }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500 -z-10"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500 cursor-pointer group">
              {/* Card background animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-all duration-300"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-125 transition-transform duration-500 shadow-lg">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7C16 5.895 15.657 5 14 5H2C.343 5 0 5.895 0 7v10c0 1.105.343 2 2 2h12c1.657 0 2-.895 2-2v-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 font-heading">Shopping</h3>
                <p className="text-gray-600 mb-4 font-sans leading-relaxed h-12 flex items-center justify-center">
                  Browse and purchase traditional Onam items and merchandise
                </p>
                <div className="inline-flex items-center">
                  <span className="bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 px-4 py-2 rounded-full font-medium text-sm group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:text-white transition-all duration-300 shadow-md">
                    Available ✓
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  )
}

export default UnderDevelopment
