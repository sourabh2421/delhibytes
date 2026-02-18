import { useState, useRef, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Testimonials = () => {
  const reveal = useScrollReveal({ threshold: 0.2 });
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);
  const animationFrameRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: 'Rahul Sharma',
      role: 'Engineering Student',
      rating: 5,
      text: 'Delhi Bytes helped me ace my mock tests! The video lectures are crystal clear and the practice tests are exactly like the real exam. Highly recommended!',
      image: '👨‍🎓'
    },
    {
      id: 2,
      name: 'Priya Patel',
      role: 'Medical Aspirant',
      rating: 5,
      text: 'The one-on-one interaction batches are amazing! The teachers are so patient and explain everything in detail. My confidence has increased tremendously.',
      image: '👩‍⚕️'
    },
    {
      id: 3,
      name: 'Amit Kumar',
      role: 'UPSC Aspirant',
      rating: 5,
      text: 'Best platform for competitive exam preparation. The exam-focused mocks are incredibly helpful. I\'ve improved my scores significantly!',
      image: '👨‍💼'
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      role: 'Law Student',
      rating: 5,
      text: 'The course material is comprehensive and well-structured. The mock tests are challenging and prepare you for the actual exam perfectly.',
      image: '👩‍⚖️'
    },
    {
      id: 5,
      name: 'Vikram Singh',
      role: 'Banking Aspirant',
      rating: 5,
      text: 'Excellent teaching quality! The video lectures are easy to understand and the practice questions cover all important topics. Great value for money!',
      image: '👨‍💻'
    },
    {
      id: 6,
      name: 'Anjali Mehta',
      role: 'SSC Aspirant',
      rating: 5,
      text: 'Delhi Bytes has been a game-changer for my preparation. The teachers are experts and the study material is top-notch. Thank you!',
      image: '👩‍🎓'
    },
    {
      id: 7,
      name: 'Rohan Desai',
      role: 'JEE Aspirant',
      rating: 5,
      text: 'The mock tests are very similar to the actual exam pattern. I feel much more confident now. The platform is user-friendly and the support is great!',
      image: '👨‍🔬'
    },
    {
      id: 8,
      name: 'Kavya Nair',
      role: 'NEET Aspirant',
      rating: 5,
      text: 'Amazing experience! The video lectures are engaging and the mock tests help identify weak areas. Highly recommend Delhi Bytes to all students!',
      image: '👩‍🔬'
    },
  ];

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let isRunning = true;
    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      if (!isRunning || !container) return;

      // Check if content is scrollable
      if (container.scrollWidth > container.clientWidth) {
        if (!isPaused) {
          const currentScroll = container.scrollLeft;
          const newScroll = currentScroll + scrollSpeed;
          
          container.scrollLeft = newScroll;

          // Reset when reaching halfway point for seamless loop
          const maxScroll = container.scrollWidth / 2;
          if (newScroll >= maxScroll) {
            container.scrollLeft = 0;
          }
        }
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Start animation after a short delay to ensure DOM is ready
    const startTimeout = setTimeout(() => {
      animationFrameRef.current = requestAnimationFrame(animate);
    }, 100);

    return () => {
      isRunning = false;
      clearTimeout(startTimeout);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPaused]);

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-orange-500' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section
      ref={reveal.ref}
      className="py-20 bg-gradient-to-b from-white to-orange-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div
        className="container mx-auto px-4 transition-all duration-700 ease-out"
        style={{
          opacity: reveal.isVisible ? 1 : 0,
          transform: reveal.isVisible ? 'translateY(0)' : 'translateY(30px)',
        }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1b2336] dark:text-white mb-4">
            What Our <span className="text-orange-600 dark:text-orange-500">Students Say</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our successful students
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="testimonials-scroll-wrapper overflow-x-auto overflow-y-hidden cursor-grab active:cursor-grabbing w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              maxWidth: '100%',
            }}
          >
            <style>
              {`
                .testimonials-scroll-wrapper::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>
            <div 
              className="flex gap-6" 
              style={{ 
                width: 'max-content',
                paddingRight: '2rem'
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-[350px] md:w-[400px] bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-orange-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-5xl flex-shrink-0">{testimonial.image}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{testimonial.role}</p>
                      <StarRating rating={testimonial.rating} />
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
            <span>Hover to pause</span>
            <span className="text-orange-500">•</span>
            <span>Scroll to explore</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
