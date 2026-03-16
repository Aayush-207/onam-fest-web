import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Rituals = () => {
  const [rituals] = useState([
    {
      id: 1,
      title: 'Athamasakaili',
      description: 'The first preparation ritual performed 48 days before Onam with bathing and sanctification of the house.',
      icon: '🛁'
    },
    {
      id: 2,
      title: 'Pookalam',
      description: 'The beautiful flower arrangement made to welcome Mahabali. A daily ritual during Onam with fresh flowers.',
      icon: '🌸'
    },
    {
      id: 3,
      title: 'Onam Sadhya',
      description: 'The traditional feast served on banana leaves with 26 different dishes. The heart of Onam celebration.',
      icon: '🍽️'
    },
    {
      id: 4,
      title: 'Kaikottikali',
      description: 'Rhythmic clapping dance performed in circles, traditionally by women and children during Onam.',
      icon: '👐'
    },
    {
      id: 5,
      title: 'Vallamkali',
      description: 'The famous boat race with the iconic snake boats, a spectacle of teamwork and cultural pride.',
      icon: '🚤'
    },
    {
      id: 6,
      title: 'Thumbi Tullal',
      description: 'The swinging ritual where swings are set up in courtyards and gardens for playful swinging.',
      icon: '🎪'
    }
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 pt-20">
      {/* Navigation Back Button */}
      <div className="fixed top-20 left-4 z-40">
        <Link 
          to="/"
          className="flex items-center space-x-2 text-gray-700 hover:text-onam-gold-dark transition-colors duration-200 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back Home</span>
        </Link>
      </div>

      {/* Header Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-heading">
            Onam Rituals & Traditions
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            Discover the sacred rituals and traditions that make Onam a celebration of Kerala's rich cultural heritage
          </p>
        </div>
      </section>

      {/* Rituals Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {rituals.map((ritual) => (
              <div 
                key={ritual.id}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl sm:text-5xl mb-4 text-center">
                  {ritual.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 font-heading text-center">
                  {ritual.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {ritual.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learn More Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-onam-green/10 to-onam-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 font-heading">
            Celebrate with Purpose
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Each ritual in Onam carries deep meaning and connects us to our shared heritage. Whether it's the fragrant flowers of Pookalam or the rhythmic beats of Kaikottikali, every tradition tells a story of Kerala's eternal culture.
          </p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-onam-green hover:bg-onam-green/90 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            <span>Explore More</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Rituals
