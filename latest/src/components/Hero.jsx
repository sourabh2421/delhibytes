import { useState, useRef, useCallback, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import HeroScene from './HeroScene';
import heroImage from '../assets/heroimagedb2.png';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const handleMouseMove = useCallback((e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    // Normalize mouse position to -1 to 1 range
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
    
    // Smooth interpolation for natural movement
    setMouse((prev) => ({
      x: prev.x * 0.85 + x * 0.15,
      y: prev.y * 0.85 + y * 0.15,
    }));
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col lg:flex-row items-center overflow-hidden bg-gradient-to-br from-[#fffbf7] via-[#fff7ed] to-[#fed7aa] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300"
      onMouseMove={handleMouseMove}
    >
      {/* Left: Content - order 2 on mobile so hero visual appears first or stays below */}
      <div className="flex-1 container mx-auto px-4 lg:px-6 xl:px-8 py-8 lg:py-0 relative z-10 overflow-hidden order-2 lg:order-1">
        <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-[#1b2336] dark:text-white mb-4 lg:mb-5 leading-tight tracking-tight break-words">
            OUTSHINE OTHERS WITH
            <span className="block text-orange-600 dark:text-orange-500 mt-2">MOCK TESTS & EASY LECTURES</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Video Lectures and Mock Tests by India's top trained teachers.
          </p>

          <form onSubmit={handleSearch} className="mb-8 w-full max-w-lg lg:max-w-xl">
            <div className="flex flex-col sm:flex-row gap-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-orange-100 dark:border-gray-700 p-1.5 w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tests, Courses, Lectures?"
                className="flex-1 min-w-0 px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base md:text-lg text-gray-800 dark:text-white dark:placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-500 focus:border-transparent bg-transparent"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white px-5 sm:px-6 py-3 sm:py-3.5 text-sm sm:text-base md:text-lg rounded-lg font-semibold transition-all duration-200 shadow-md whitespace-nowrap"
              >
                Search
              </button>
            </div>
          </form>

          <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-3 justify-center lg:justify-start text-base md:text-lg">
            {['One to One Interaction Batches', 'Exam Focused Mocks'].map((label) => (
              <li key={label} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="font-medium">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right: 3D Hero image (circle + blobs) - order 1 on mobile so it sits above text */}
      <div className="flex-1 w-full min-h-[40vh] lg:min-h-[85vh] relative flex items-center justify-center order-1 lg:order-2 overflow-hidden">
        <div className="relative w-full h-[40vh] min-h-[280px] max-h-[380px] lg:h-[85vh] lg:min-h-[500px] lg:max-h-none mx-auto">
          {/* 3D Canvas - behind the image */}
          <div className="absolute inset-0 z-[1] rounded-2xl overflow-hidden">
            <Suspense
              fallback={
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-700 flex items-center justify-center">
                  <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-orange-200/50 dark:bg-orange-900/30 animate-pulse" />
                </div>
              }
            >
              <Canvas
                camera={{ position: [0, 0, 5], fov: 40 }}
                dpr={[1, 1.5]}
                gl={{
                  antialias: true,
                  alpha: true,
                  powerPreference: 'high-performance',
                }}
                style={{ display: 'block', width: '100%', height: '100%' }}
              >
                <HeroScene mouse={mouse} />
              </Canvas>
            </Suspense>
          </div>
          {/* Hero Image - centered, in front */}
          <div className="absolute inset-0 z-[2] flex items-center justify-center pointer-events-none p-2">
            <img
              src={heroImage}
              alt="Hero"
              className="w-full h-full object-contain object-center max-w-[90%] max-h-[90%] lg:max-w-[85%] lg:max-h-[85%] opacity-100"
              style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.15))' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
