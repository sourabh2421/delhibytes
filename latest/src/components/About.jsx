// Import your images here - add your image files to src/assets/ and import them
// Example: 
// import aboutImage1 from '../assets/about-image1.jpg';
// import aboutImage2 from '../assets/about-image2.jpg';
// import aboutImage3 from '../assets/about-image3.jpg';
// import aboutImage4 from '../assets/about-image4.jpg';

import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
  const contentReveal = useScrollReveal({ threshold: 0.2 });
  const imagesReveal = useScrollReveal({ threshold: 0.1, delay: 150 });
  // Placeholder images - replace with your imported images
  const images = [
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=600&fit=crop&q=80",
      alt: "Students learning together",
      rotation: -8,
      delay: 0
    },
    {
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=600&fit=crop&q=80",
      alt: "Online education platform",
      rotation: 6,
      delay: 100
    },
    {
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=600&fit=crop&q=80",
      alt: "Study group discussion",
      rotation: -5,
      delay: 200
    },
    {
      src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=600&fit=crop&q=80",
      alt: "Success celebration",
      rotation: 7,
      delay: 300
    }
  ];
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            ref={contentReveal.ref}
            className="transition-all duration-700 ease-out"
            style={{
              opacity: contentReveal.isVisible ? 1 : 0,
              transform: contentReveal.isVisible ? 'translateY(0)' : 'translateY(30px)',
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1b2336] dark:text-white mb-6">
              About <span className="text-orange-600 dark:text-orange-500">Delhi Bytes</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Delhi Bytes is a premier coding education platform dedicated to empowering students 
              with practical programming skills. We believe that everyone can learn to code, 
              regardless of their background or experience level.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Our courses are designed by industry experts and taught through hands-on projects. 
              We focus on real-world applications, ensuring our students are job-ready upon completion. 
              Join thousands of successful graduates who have transformed their careers with us.
            </p>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500 dark:bg-orange-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Expert Instructors</h3>
                  <p className="text-gray-600 dark:text-gray-400">Learn from industry professionals with years of experience</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500 dark:bg-orange-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Hands-On Learning</h3>
                  <p className="text-gray-600 dark:text-gray-400">Build real projects and gain practical experience</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500 dark:bg-orange-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Career Support</h3>
                  <p className="text-gray-600 dark:text-gray-400">Get help with job placement and career guidance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Images - Grid on mobile, Zig Zag on md+ */}
          <div
            ref={imagesReveal.ref}
            className="relative overflow-hidden transition-all duration-700 ease-out"
            style={{
              opacity: imagesReveal.isVisible ? 1 : 0,
              transform: imagesReveal.isVisible ? 'translateY(0)' : 'translateY(30px)',
            }}
          >
            {/* Mobile: 2x2 grid */}
            <div className="grid grid-cols-2 gap-4 md:hidden">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-3 overflow-hidden"
                >
                  <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-700 dark:to-gray-600">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: Zig Zag absolute layout */}
            <div className="hidden md:block relative min-h-[600px] lg:min-h-[700px]">
              <div
                className="absolute top-0 left-0 w-[50%] bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 transform hover:scale-105 transition-all duration-300 z-20"
                style={{ transform: `rotate(${images[0].rotation}deg)` }}
              >
                <div className="aspect-square bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-700 dark:to-gray-600 rounded-xl overflow-hidden">
                  <img src={images[0].src} alt={images[0].alt} className="w-full h-full object-cover rounded-xl hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <div
                className="absolute top-12 right-0 w-[50%] bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 transform hover:scale-105 transition-all duration-300 z-30"
                style={{ transform: `rotate(${images[1].rotation}deg)` }}
              >
                <div className="aspect-square bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-700 dark:to-gray-600 rounded-xl overflow-hidden">
                  <img src={images[1].src} alt={images[1].alt} className="w-full h-full object-cover rounded-xl hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <div
                className="absolute bottom-12 left-8 w-[50%] bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 transform hover:scale-105 transition-all duration-300 z-20"
                style={{ transform: `rotate(${images[2].rotation}deg)` }}
              >
                <div className="aspect-square bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-700 dark:to-gray-600 rounded-xl overflow-hidden">
                  <img src={images[2].src} alt={images[2].alt} className="w-full h-full object-cover rounded-xl hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <div
                className="absolute bottom-0 right-8 w-[50%] bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 transform hover:scale-105 transition-all duration-300 z-10"
                style={{ transform: `rotate(${images[3].rotation}deg)` }}
              >
                <div className="aspect-square bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-700 dark:to-gray-600 rounded-xl overflow-hidden">
                  <img src={images[3].src} alt={images[3].alt} className="w-full h-full object-cover rounded-xl hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-300 dark:bg-orange-700 rounded-full opacity-50 -z-10" />
              <div className="absolute top-1/2 right-0 w-32 h-32 bg-orange-400 dark:bg-orange-600 rounded-full opacity-30 -z-10 transform translate-x-1/2" />
              <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-orange-200 dark:bg-orange-800 rounded-full opacity-40 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
