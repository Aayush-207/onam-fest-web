import { memo } from 'react'
import { Link } from 'react-router-dom'

// Ritual Content Component
const RitualContent = memo(({ title, description, details, imagePosition, imageSrc, index }) => {
  const isImageLeft = imagePosition === 'left'
  
  return (
    <div 
      className="relative h-screen md:h-96 w-screen -ml-[calc(50vw-50%)] -mr-[calc(50vw-50%)] overflow-hidden"
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
        
        {/* Fade Gradient Overlay - fades toward text side */}
        <div 
          className="absolute inset-0"
          style={{
            background: isImageLeft 
              ? 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.7) 100%)'
              : 'linear-gradient(to left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.7) 100%)',
            pointerEvents: 'none'
          }}
        ></div>
      </div>

      {/* Content Overlay - Positioned on one side */}
      <div className={`absolute inset-0 flex items-center ${isImageLeft ? 'justify-end' : 'justify-start'}`}>
        <div className={`w-full md:w-1/2 px-6 md:px-12 py-8 md:py-0 ${isImageLeft ? 'md:pr-12' : 'md:pl-12'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-heading" style={{
            animation: `slideUp 0.6s ease-out ${index * 0.2 + 0.1}s both`
          }}>
            {title}
          </h2>
          
          <p className="text-gray-700 text-lg md:text-xl font-semibold mb-6 leading-relaxed" style={{
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
                <span className="text-onam-green text-2xl font-bold flex-shrink-0">✓</span>
                <span className="text-gray-600 text-base md:text-lg leading-relaxed">{detail}</span>
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
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
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

      {/* Closing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-onam-green/10 via-onam-gold/20 to-onam-red/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl" style={{animation: 'slideUp 1s ease-out 0.6s both'}}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-heading">
              Experience the Spirit of Onam
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              These rituals and traditions form the very essence of Onam, celebrating family, community, and the cultural heritage of Kerala. Each ritual connects us to our shared history and strengthens the bonds that hold our communities together.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Rituals
