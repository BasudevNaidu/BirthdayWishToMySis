import React, { useEffect, useState } from 'react';
import { Heart, Stars, Cake, PhoneCall, Gift, Music, Camera, Calendar, Quote, Phone, Sparkles, Mail, Clock } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const age = 14; // 2025 - 2011 = 14

  const galleryItems = [
    {
      id: 1,
      src: "/images/photo1.jpg",
      message: "Though we're apart, every memory with you is a treasure I hold close to my heart"
    },
    {
      id: 2,
      src: "/images/photo2.jpg",
      message: "Your smile brightens my world, even from miles away"
    },
    {
      id: 3,
      src: "/images/photo3.jpg",
      message: "In every call, your voice brings warmth to my soul"
    },
    {
      id: 4,
      src: "/images/photo4.jpg",
      message: "Distance may separate us, but our hearts beat as one"
    },
    {
      id: 5,
      src: "/images/photo5.jpg",
      message: "Every moment shared with you becomes a precious memory"
    },
    {
      id: 6,
      src: "/images/photo6.jpg",
      message: "Your laughter is the sweetest melody in my heart"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100">
      {/* Hero Section with Parallax */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden parallax-container">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1490750967868-88aa4486c946')] bg-cover bg-center opacity-10 parallax-bg" />
        <div className={`text-center p-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="floating-hearts">
            {[...Array(5)].map((_, i) => (
              <Heart key={i} className="floating-heart" style={{animationDelay: `${i * 0.5}s`}} />
            ))}
          </div>
          <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-4 animate-gradient">
            Happy Birthday Prisha! 🎉
          </h1>
          <p className="text-2xl text-gray-700 glowing-text">On your special {age}th birthday</p>
          <Heart className="w-16 h-16 text-pink-500 mx-auto mt-6 animate-heartbeat" />
        </div>
      </section>

      {/* Heartfelt Message Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center perspective-container">
            <div className="rotating-border p-8 rounded-lg">
              <h2 className="text-4xl font-bold text-purple-600 mb-8 shimmer-text">A Letter From Your Brother</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6 fade-in-up">
                Dear Prisha, though miles separate us and our meetings are rare, my heart holds a special place just for you. 
                Every time I hear your voice on the phone, it brings warmth to my soul.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed fade-in-up delay-200">
                Even though I haven't been able to celebrate your birthdays in person, know that on each March 20th, 
                my thoughts are filled with wishes for your happiness and dreams of the wonderful person you're becoming.
              </p>
              <div className="mt-8 sparkle-container">
                <Sparkles className="w-8 h-8 text-purple-500 animate-sparkle" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 bg-gradient-to-r from-purple-100 to-pink-100 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-purple-600 mb-4 glowing-text">Our Beautiful Journey</h2>
          <p className="text-xl text-center text-gray-700 mb-12">{age} Years of Love Despite the Distance</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {galleryItems.map((item) => (
              <div key={item.id} className="gallery-card group">
                <div className="aspect-w-4 aspect-h-3 relative overflow-hidden rounded-lg">
                  <div className="w-full h-full bg-gradient-to-br from-purple-50 to-pink-50">
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      src={item.src}
                      alt={`Memory ${item.id}`}
                    />
                  </div>
                  <div className="gallery-card-overlay flex items-center justify-center text-center p-6">
                    <p className="text-lg font-medium text-white gallery-message">
                      {item.message}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connection Through Time */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-purple-600 mb-12 shimmer-text">Our Special Connection</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="feature-card">
              <Phone className="w-12 h-12 text-purple-500 mb-4 mx-auto animate-float" />
              <h3 className="text-xl font-semibold text-purple-600 mb-3">Every Call Matters</h3>
              <p className="text-gray-700">Though our calls may be few, each one is a treasure that brings us closer.</p>
            </div>
            <div className="feature-card">
              <Clock className="w-12 h-12 text-pink-500 mb-4 mx-auto animate-float delay-100" />
              <h3 className="text-xl font-semibold text-purple-600 mb-3">Time and Distance</h3>
              <p className="text-gray-700">No matter how far apart we are, our bond grows stronger with each passing year.</p>
            </div>
            <div className="feature-card">
              <Mail className="w-12 h-12 text-purple-500 mb-4 mx-auto animate-float delay-200" />
              <h3 className="text-xl font-semibold text-purple-600 mb-3">Thoughts and Wishes</h3>
              <p className="text-gray-700">Every day, my heart sends silent wishes for your happiness and success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline of Love */}
      <section className="py-20 bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-purple-600 mb-12 shimmer-text">Our Story Through Time</h2>
          <div className="max-w-4xl mx-auto">
            <div className="timeline">
              <div className="timeline-item">
                <Calendar className="timeline-icon" />
                <div className="timeline-content">
                  <h3 className="text-2xl font-semibold text-purple-600">March 20, 2011</h3>
                  <p className="text-gray-700">The blessed day you came into our family</p>
                </div>
              </div>
              <div className="timeline-item">
                <Phone className="timeline-icon" />
                <div className="timeline-content">
                  <h3 className="text-2xl font-semibold text-purple-600">Our First Call</h3>
                  <p className="text-gray-700">When your sweet voice first reached across the miles</p>
                </div>
              </div>
              <div className="timeline-item">
                <Heart className="timeline-icon" />
                <div className="timeline-content">
                  <h3 className="text-2xl font-semibold text-purple-600">Growing Bond</h3>
                  <p className="text-gray-700">Every year our connection grows stronger</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Musical Wishes Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <Music className="w-16 h-16 text-purple-500 mx-auto mb-8 animate-float" />
          <h2 className="text-4xl font-bold text-purple-600 mb-8 shimmer-text">A Symphony of Love</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <Quote className="w-8 h-8 text-pink-500 mx-auto mb-4 animate-spin-slow" />
              <p className="text-xl text-gray-700 animate-fade-in italic poem-text">
                "Though miles keep us apart each day,<br/>
                In my heart, you'll always stay.<br/>
                Like stars that shine from far above,<br/>
                Our bond is filled with endless love."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Birthday Wishes */}
      <section className="py-20 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-purple-600 mb-8 shimmer-text">Birthday Wishes</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 wish-container">
              <p className="text-xl text-gray-700 wish-item">
                May your dreams take flight on golden wings
              </p>
              <p className="text-xl text-gray-700 wish-item">
                May your heart always be filled with joy and wonder
              </p>
              <p className="text-xl text-gray-700 wish-item">
                May your path be blessed with endless possibilities
              </p>
              <div className="mt-12 finale-section">
                <p className="text-2xl font-semibold text-purple-600 animate-pulse">
                  Happy {age}th Birthday, my dear prishu! 🎂
                </p>
                <p className="text-xl text-gray-700 mt-4 floating">
                  With infinite love, your SubhAnna❤️
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
