import { useNavigate } from 'react-router-dom'

const UnderDevelopment = () => {
  const navigate = useNavigate()
  return (
    <section id="under-development" className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 font-heading">
            Explore Onam
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto font-sans px-4">
            Discover more ways to celebrate and experience the traditions of Onam with our curated selection.
          </p>
        </div>

        {/* Development Status Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Rituals Card */}
          <div onClick={() => navigate('/rituals')} className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group card-auto-hover" style={{animation: 'cardHoverAnim 6s ease-in-out infinite'}}>
            <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 sm:w-8 h-6 sm:h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 font-heading">Rituals</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 font-sans">
              Discover the sacred traditions and spiritual practices of Onam
            </p>
            <div className="inline-flex items-center text-xs sm:text-sm font-medium">
              <span className="bg-orange-100 text-orange-800 px-2 sm:px-3 py-1 rounded-full group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">Explore Now</span>
            </div>
          </div>

          {/* Shopping Card */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group card-auto-hover" style={{animation: 'cardHoverAnim 6s ease-in-out infinite 3s'}} onClick={() => window.location.href = '/shopping'}>
            <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7C16 5.895 15.657 5 14 5H2C.343 5 0 5.895 0 7v10c0 1.105.343 2 2 2h12c1.657 0 2-.895 2-2v-4" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 font-heading">Shopping</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 font-sans">
              Browse and purchase traditional Onam items and merchandise
            </p>
            <div className="inline-flex items-center text-xs sm:text-sm text-blue-600 font-medium">
              <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">Available</span>
            </div>
          </div>
        </div>

        {/* Styles for animations */}
        <style>{`
          @keyframes cardHoverAnim {
            0%, 100% {
              transform: scale(1);
              box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
              border-color: rgb(229, 231, 235);
            }
            50% {
              transform: scale(1.05);
              box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 0 20px rgba(249, 115, 22, 0.3);
              border-color: rgb(249, 115, 22);
            }
          }

          @keyframes cardHoverAnimBlue {
            0%, 100% {
              transform: scale(1);
              box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
              border-color: rgb(229, 231, 235);
            }
            50% {
              transform: scale(1.05);
              box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 0 20px rgba(37, 99, 235, 0.3);
              border-color: rgb(37, 99, 235);
            }
          }
          
          .card-auto-hover:nth-child(1) {
            animation: cardHoverAnim 6s ease-in-out infinite;
          }
          
          .card-auto-hover:nth-child(2) {
            animation: cardHoverAnimBlue 6s ease-in-out infinite 3s;
          }
        `}</style>
      </div>
    </section>
  )
}

export default UnderDevelopment
