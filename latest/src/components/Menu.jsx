import { useScrollReveal } from '../hooks/useScrollReveal';

const Menu = () => {
  const headerReveal = useScrollReveal({ threshold: 0.2 });
  const cardsReveal = useScrollReveal({ threshold: 0.1, delay: 100 });
  const courses = [
    {
      id: 1,
      name: "Complete Course 1",
      description: "Comprehensive course with video lectures and mock tests",
      image: "📚",
      category: "Full Course"
    },
    {
      id: 2,
      name: "Complete Course 2",
      description: "Expert-led course with exam-focused content",
      image: "📖",
      category: "Full Course"
    },
    {
      id: 3,
      name: "Complete Course 3",
      description: "Learn with to-the-point lectures and mock tests",
      image: "🎓",
      category: "Full Course"
    },
    {
      id: 4,
      name: "Complete Course 4",
      description: "Crisp lectures made to save your time",
      image: "📘",
      category: "Full Course"
    },
    {
      id: 5,
      name: "Complete Course 5",
      description: "Exam-centric mock tests by expert educators",
      image: "📗",
      category: "Full Course"
    },
    {
      id: 6,
      name: "Complete Course 6",
      description: "Complete these courses with expert guidance",
      image: "📙",
      category: "Full Course"
    },
  ];

  return (
    <section id="courses" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          ref={headerReveal.ref}
          className="text-center mb-16 transition-all duration-700 ease-out"
          style={{
            opacity: headerReveal.isVisible ? 1 : 0,
            transform: headerReveal.isVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1b2336] dark:text-white mb-4">
            Complete these <span className="text-orange-600 dark:text-orange-500">Courses</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            With to the point lectures & Exam Centric Mock Tests by Expert Educators
          </p>
          <p className="text-base text-gray-500 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
            These Crisp Lectures are made to the point to save your time
          </p>
        </div>

        {/* Courses Grid */}
        <div
          ref={cardsReveal.ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ease-out"
          style={{
            opacity: cardsReveal.isVisible ? 1 : 0,
            transform: cardsReveal.isVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              {/* Image Placeholder */}
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800 h-48 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                {course.image}
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full font-medium">{course.category}</span>
                </div>
                <h3 className="text-xl font-bold text-[#1b2336] dark:text-white mb-3">{course.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{course.description}</p>
                <button className="w-full bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white py-2 rounded-lg font-semibold transition-colors">
                  View Course
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-lg opacity-90">Courses Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-lg opacity-90">Students Enrolled</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
