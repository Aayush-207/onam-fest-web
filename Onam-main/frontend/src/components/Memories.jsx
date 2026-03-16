import { useMemo, memo } from 'react'

// Memoized MemoryCard component
const MemoryCard = memo(() => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-gray-100 to-gray-200 flex-shrink-0">
      <div className="w-56 md:w-64 h-48 sm:h-56 md:h-64 flex items-center justify-center">
        <div className="text-center">
          <svg className="w-12 sm:w-16 h-12 sm:h-16 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-gray-500 font-medium text-sm">Upload Your Memory</p>
        </div>
      </div>
    </div>
  )
})

MemoryCard.displayName = 'MemoryCard'

const Memories = () => {
  // Create array of images for carousel (duplicated for seamless loop)
  const memoryImages = useMemo(() => Array(6).fill(null), [])

  return (
    <section id="memories" className="section-padding bg-gradient-to-br from-pink-50 to-purple-50" aria-label="Onam Memories">
      {/* Carousel Animation Styles */}
      <style>{`
        @keyframes scrollLeftToRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollRightToLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(50%);
          }
        }

        .carousel-row-ltr {
          animation: scrollLeftToRight 40s linear infinite;
        }

        .carousel-row-rtl {
          animation: scrollRightToLeft 40s linear infinite;
        }

        .carousel-container {
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        .carousel-track {
          display: flex;
          gap: 1.5rem;
          padding: 1rem;
          will-change: transform;
        }
      `}</style>

      <div className="max-w-full">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 font-heading">
            Memories
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto px-4">
            Relive precious Onam moments and experiences
          </p>
        </div>

        {/* Carousel - First Row (Left to Right) */}
        <div className="carousel-container mb-8">
          <div className="carousel-track carousel-row-ltr">
            {memoryImages.map((_, index) => (
              <MemoryCard key={`row1-${index}`} />
            ))}
            {/* Duplicate for seamless loop */}
            {memoryImages.map((_, index) => (
              <MemoryCard key={`row1-dup-${index}`} />
            ))}
          </div>
        </div>

        {/* Carousel - Second Row (Right to Left) */}
        <div className="carousel-container mb-12">
          <div className="carousel-track carousel-row-rtl">
            {memoryImages.map((_, index) => (
              <MemoryCard key={`row2-${index}`} />
            ))}
            {/* Duplicate for seamless loop */}
            {memoryImages.map((_, index) => (
              <MemoryCard key={`row2-dup-${index}`} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
            Share Your Memory
          </button>
          <p className="text-gray-600 text-sm mt-4 px-4">
            Join our community and share your favorite Onam moments with fellow celebrants
          </p>
        </div>
      </div>
    </section>
  )
}

export default Memories
