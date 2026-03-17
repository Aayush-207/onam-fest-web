import { memo, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

// Ritual Content Component
const RitualContent = memo(({ title, description, details, imagePosition, imageSrc, index }) => {
  const isImageLeft = imagePosition === 'left'
  const contentRef = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animationClass = isImageLeft ? 'animate-scroll-in-right' : 'animate-scroll-in-left'
          entry.target.classList.add(animationClass)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })
    
    if (contentRef.current) {
      observer.observe(contentRef.current)
    }
    
    return () => observer.disconnect()
  }, [isImageLeft])
  
  return (
    <div 
      className="relative h-screen md:h-96 w-full overflow-hidden bg-white"
      style={{
        animation: `slideUp 0.6s ease-out ${index * 0.2}s both`
      }}
    >
      {/* Background Image - Full Width */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover"
        />
        
        {/* Fade Gradient Overlay - Black fade toward text side, gradually increasing */}
        <div 
          className="absolute inset-0"
          style={{
            background: isImageLeft 
              ? 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 15%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.85) 100%)'
              : 'linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 15%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.85) 100%)',
            pointerEvents: 'none'
          }}
        ></div>
      </div>

      {/* Content Overlay - Positioned on one side */}
      <div ref={contentRef} className={`absolute inset-0 flex items-center ${isImageLeft ? 'justify-end' : 'justify-start'} opacity-0`}>
        <div className={`w-1/2 px-8 md:px-12 py-8 md:py-0 ${isImageLeft ? '' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading" style={{
            animation: `slideUp 0.6s ease-out ${index * 0.2 + 0.1}s both`
          }}>
            {title}
          </h2>
          
          <p className="text-white text-lg md:text-xl font-semibold mb-6 leading-relaxed" style={{
            animation: `slideUp 0.6s ease-out ${index * 0.2 + 0.2}s both`
          }}>
            {description}
          </p>
          
          {/* Details List */}
          <ul className="space-y-3">
            {details.map((detail, idx) => (
              <li 
                key={idx} 
                className="flex items-start space-x-3"
                style={{
                  animation: `fadeInLeft 0.5s ease-out ${index * 0.2 + 0.2 + idx * 0.1}s both`
                }}
              >
                <span className="text-white text-xl flex-shrink-0">🌸</span>
                <span className="text-white text-base md:text-lg leading-relaxed">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
})

RitualContent.displayName = 'RitualContent'

const Rituals = () => {
  const closingTextRef = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-scroll')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.2 })
    
    if (closingTextRef.current) {
      observer.observe(closingTextRef.current)
    }
    
    return () => observer.disconnect()
  }, [])
  
  const rituals = [
    {
      title: 'Pookalam (Flower Rangoli)',
      description: 'Families create beautiful floral designs in front of their homes using fresh flowers.',
      details: [
        'The designs start small on day 1 and grow larger each day until the final day Thiruvonam',
        'It is done to welcome King Mahabali'
      ],
      imagePosition: 'left',
      imageSrc: '/pooklm.jpeg'
    },
    {
      title: 'Onam Puja',
      description: 'Special prayers are performed at home and temples.',
      details: [
        'Offerings are made to Lord Vishnu, especially his avatar Vamana',
        'According to legend, Vamana sent Mahabali to the underworld',
        'Lamps are lit and flowers are offered'
      ],
      imagePosition: 'right',
      imageSrc: '/puja.jpg'
    },
    {
      title: 'Onam Sadya (Grand Feast)',
      description: 'A huge vegetarian feast served on banana leaves.',
      details: [
        'Usually includes 20+ dishes including Avial, Sambar, Olan, Thoran, and Payasam (dessert)',
        'Families and communities eat together in celebration'
      ],
      imagePosition: 'left',
      imageSrc: '/sadya.jpg'
    }
  ]

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Background with Image Placeholder */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(34, 197, 94, 0.6);
          }
        }

        .background-placeholder {
          animation: glow 3s ease-in-out infinite;
        }

        .animate-scroll-in-left {
          animation: slideInFromLeft 0.7s ease-out forwards;
        }

        .animate-scroll-in-right {
          animation: slideInFromRight 0.7s ease-out forwards;
        }

        @keyframes fadeInSlow {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .fade-in-scroll {
          animation: fadeInSlow 1.5s ease-out forwards;
        }
      `}</style>

      {/* Back Button */}
      <div className="fixed top-6 left-4 z-40">
        <Link 
          to="/"
          className="flex items-center space-x-2 text-gray-700 hover:text-onam-green transition-all duration-300 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl hover:scale-110"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back</span>
        </Link>
      </div>

      {/* Hero Section - Full Screen */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center px-4">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-yellow-50 to-pink-100 -z-10"></div>
        <div className="absolute inset-0 background-placeholder -z-10" style={{
          backgroundImage: 'url(/RitualsBackground.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}></div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-onam-green/10 rounded-full blur-3xl" style={{animation: 'float 6s ease-in-out infinite'}}></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-onam-gold/10 rounded-full blur-3xl" style={{animation: 'float 8s ease-in-out infinite'}}></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-800 mb-8 font-heading leading-tight" style={{animation: 'slideUp 0.8s ease-out'}}>
            <span className="bg-gradient-to-r from-onam-green via-onam-gold to-onam-red bg-clip-text text-transparent">
              Onam Rituals
            </span>
            <br />
            <span className="text-gray-800">&amp; Traditions</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto" style={{animation: 'slideUp 0.8s ease-out 0.2s both'}}>
            Onam is the biggest harvest festival of the Indian state of Kerala. It celebrates the legendary return of the benevolent king Mahabali to visit his people once every year. The festival usually lasts 10 days and includes many cultural rituals.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Rituals Section - Alternating Layout */}
      <section className="relative w-screen -ml-[calc(50vw-50%)] -mr-[calc(50vw-50%)] overflow-x-hidden">
        <div>
          {rituals.map((ritual, index) => (
            <RitualContent
              key={index}
              index={index}
              title={ritual.title}
              description={ritual.description}
              details={ritual.details}
              imagePosition={ritual.imagePosition}
              imageSrc={ritual.imageSrc}
            />
          ))}
        </div>
      </section>

      {/* Closing Section with Parallax */}
      <section 
        className="relative overflow-hidden"
        style={{
          backgroundImage: 'url(/exp.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div ref={closingTextRef} className="section-padding relative z-10 flex items-center justify-center py-24 opacity-0">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
              Experience the Spirit of Onam
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              These rituals and traditions form the very essence of Onam, celebrating family, community, and the cultural heritage of Kerala. Each ritual connects us to our shared history and strengthens the bonds that hold our communities together.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Rituals
