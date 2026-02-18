import { useState, useRef, useCallback } from 'react';

const COURSE_CATEGORIES = [
  'DSSSB',
  'CTET',
  'B.Ed. Entrance',
  'UGC NET JRF',
  'IGNOU',
];

// Paid courses per category
const COURSES_BY_CATEGORY = {
  DSSSB: [
    { id: 'dsssb-1', title: 'DSSSB TGT English Complete Batch', price: 'Rs. 3499', items: 12, isPaid: true },
    { id: 'dsssb-2', title: 'DSSSB PGT Computer Science', price: 'Rs. 2999', items: 8, isPaid: true },
    { id: 'dsssb-3', title: 'DSSSB PRT Preparation Series', price: 'Rs. 2499', items: 6, isPaid: true },
    { id: 'dsssb-4', title: 'DSSSB Reasoning & Quantitative Aptitude', price: 'Rs. 1999', items: 4, isPaid: true },
    { id: 'dsssb-5', title: 'DSSSB Mock Test Series (10 Tests)', price: 'Rs. 999', items: 10, isPaid: true },
  ],
  CTET: [
    { id: 'ctet-1', title: 'CTET Paper 1 - Child Development & Pedagogy', price: 'Rs. 2799', items: 15, isPaid: true },
    { id: 'ctet-2', title: 'CTET Paper 2 - Mathematics & Science', price: 'Rs. 3199', items: 18, isPaid: true },
    { id: 'ctet-3', title: 'CTET Complete Batch (Paper 1 + 2)', price: 'Rs. 4999', items: 30, isPaid: true },
    { id: 'ctet-4', title: 'CTET Previous Year Papers & Mock Tests', price: 'Rs. 1499', items: 20, isPaid: true },
    { id: 'ctet-5', title: 'CTET Environmental Studies & EVS', price: 'Rs. 1899', items: 8, isPaid: true },
  ],
  'B.Ed. Entrance': [
    { id: 'bed-1', title: 'B.Ed. Entrance Complete Preparation', price: 'Rs. 3999', items: 25, isPaid: true },
    { id: 'bed-2', title: 'B.Ed. Teaching Aptitude & Reasoning', price: 'Rs. 2299', items: 12, isPaid: true },
    { id: 'bed-3', title: 'B.Ed. General Knowledge & Current Affairs', price: 'Rs. 1799', items: 10, isPaid: true },
    { id: 'bed-4', title: 'B.Ed. Mock Test Series (15 Tests)', price: 'Rs. 1299', items: 15, isPaid: true },
    { id: 'bed-5', title: 'B.Ed. DU, IPU & State University Papers', price: 'Rs. 2599', items: 14, isPaid: true },
  ],
  'UGC NET JRF': [
    { id: 'ugc-1', title: 'UGC NET Paper 1 - Teaching & Research Aptitude', price: 'Rs. 3499', items: 20, isPaid: true },
    { id: 'ugc-2', title: 'UGC NET Computer Science & Applications', price: 'Rs. 4299', items: 28, isPaid: true },
    { id: 'ugc-3', title: 'UGC NET Commerce Complete Batch', price: 'Rs. 3999', items: 24, isPaid: true },
    { id: 'ugc-4', title: 'UGC NET JRF Mock Test Series', price: 'Rs. 1999', items: 15, isPaid: true },
    { id: 'ugc-5', title: 'UGC NET December Session Crash Course', price: 'Rs. 2799', items: 12, isPaid: true },
  ],
  IGNOU: [
    { id: 'ignou-1', title: 'IGNOU BCA Complete Course Guide', price: 'Rs. 1999', items: 6, isPaid: true },
    { id: 'ignou-2', title: 'IGNOU MCA Study Material & Solved Assignments', price: 'Rs. 2499', items: 8, isPaid: true },
    { id: 'ignou-3', title: 'IGNOU B.Ed. Entrance Preparation', price: 'Rs. 2299', items: 10, isPaid: true },
    { id: 'ignou-4', title: 'IGNOU Assignment Writing & Exam Tips', price: 'Rs. 999', items: 4, isPaid: true },
    { id: 'ignou-5', title: 'IGNOU CBCS Syllabus & Previous Papers', price: 'Rs. 1499', items: 5, isPaid: true },
  ],
};

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('DSSSB');
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setParallax({ x: x * 12, y: y * 8 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setParallax({ x: 0, y: 0 });
  }, []);

  const courses = COURSES_BY_CATEGORY[selectedCategory] || [];
  const filteredCourses = searchQuery.trim()
    ? courses.filter((c) =>
        c.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : courses;

  return (
    <div
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 overflow-hidden"
    >
      {/* Parallax background shapes */}
      <div
        className="pointer-events-none absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${parallax.x * 0.5}px, ${parallax.y * 0.5}px)`,
        }}
      >
        <div className="absolute top-20 -left-40 w-80 h-80 bg-orange-200/30 dark:bg-orange-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-40 w-96 h-96 bg-orange-100/40 dark:bg-orange-800/10 rounded-full blur-3xl" />
      </div>

      {/* Main: two columns */}
      <div className="container relative mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left sidebar - categories (parallax) */}
          <aside
            className="w-full lg:w-72 flex-shrink-0 transition-transform duration-300 ease-out"
            style={{ transform: `translate(${parallax.x * -1}px, ${parallax.y * -0.5}px)` }}
          >
            <div className="bg-orange-500 dark:bg-orange-600 text-white px-4 py-3 rounded-t-lg font-semibold shadow-lg transition-shadow duration-300 hover:shadow-xl">
              Computer Courses
            </div>
            <ul className="bg-white dark:bg-gray-800 border border-t-0 border-gray-200 dark:border-gray-700 rounded-b-lg shadow-sm overflow-hidden">
              {COURSE_CATEGORIES.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-4 py-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0 font-medium transition-all duration-300 ease-out hover:pl-5 hover:bg-orange-50/80 dark:hover:bg-orange-900/20 ${
                      selectedCategory === cat
                        ? 'bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 pl-5 border-l-4 border-l-orange-500 dark:border-l-orange-500'
                        : 'text-gray-700 dark:text-gray-300 hover:border-l-4 hover:border-l-orange-300 dark:hover:border-l-orange-700'
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Right content (parallax) */}
          <main
            className="flex-1 min-w-0 transition-transform duration-300 ease-out"
            style={{ transform: `translate(${parallax.x * 1}px, ${parallax.y * 0.5}px)` }}
          >
            {/* Search */}
            <div className="mb-6">
              <div className="relative max-w-xl group">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search LMS.."
                  className="w-full pl-4 pr-12 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 hover:border-orange-300 dark:hover:border-orange-600 hover:shadow-md"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-orange-500 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Section title */}
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-all duration-300 hover:tracking-wide">
              {selectedCategory} Series
            </h2>

            {/* Course cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCourses.length === 0 ? (
                <p className="col-span-full text-gray-500 dark:text-gray-400 py-8 text-center">
                  No courses found for &quot;{searchQuery}&quot; in {selectedCategory}.
                </p>
              ) : (
              filteredCourses.map((course, index) => (
                <div
                  key={course.id}
                  className="group bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] hover:border-orange-200 dark:hover:border-orange-800"
                  style={{
                    transitionDelay: `${index * 30}ms`,
                  }}
                >
                  <div className="relative aspect-video bg-gradient-to-br from-orange-100 to-orange-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center overflow-hidden">
                    <span className="text-gray-500 dark:text-gray-400 font-semibold text-sm transition-transform duration-500 group-hover:scale-110">DELHI BYTES</span>
                    {course.isPaid && (
                      <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded transform -rotate-[-20deg] shadow transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12">
                        PAID SERIES
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 transition-colors duration-300 group-hover:text-orange-600 dark:group-hover:text-orange-400">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      Total Price: <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{course.price}</span>
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Items : {course.items}
                    </p>
                    <button className="w-full bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]">
                      View
                    </button>
                  </div>
                </div>
              ))
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Courses;
