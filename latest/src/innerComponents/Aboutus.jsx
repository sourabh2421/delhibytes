import { Link } from 'react-router-dom';

const Aboutus = () => {
  const stats = [
    { value: '10,000+', label: 'Students Enrolled' },
    { value: '50+', label: 'Courses & Series' },
    { value: '1000+', label: 'Mock Tests' },
    { value: '4.8', label: 'Average Rating' },
  ];

  const values = [
    {
      title: 'Quality Education',
      description: 'We deliver high-quality content designed by experienced educators and aligned with latest exam patterns.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: 'Tryst with Trust',
      description: 'Building trust through transparency, reliable content, and consistent support for every aspirant.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Exam-Focused',
      description: 'Content tailored for CTET, DSSSB, UGC NET, B.Ed., and other teaching and recruitment exams.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero section */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-700 dark:from-orange-700 dark:to-orange-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-orange-100 dark:text-orange-200 max-w-2xl mx-auto">
            Empowering teaching aspirants with quality courses, mock tests, and expert guidance
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Who we are */}
        <section className="max-w-4xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Who We Are
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 space-y-4">
            <p>
              <strong className="text-gray-900 dark:text-white">Delhi Bytes</strong> is an education platform committed to helping teaching aspirants crack competitive exams and build successful careers in education. We offer structured courses, comprehensive mock test series, video lectures, and study resources for exams like CTET, DSSSB, UGC NET JRF, B.Ed. Entrance, and more.
            </p>
            <p>
              Our tagline <strong className="text-orange-600 dark:text-orange-500">“Tryst with Trust”</strong> reflects our promise to deliver reliable, up-to-date content and support so that every student can prepare with confidence. We believe in making quality exam preparation accessible and effective.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 md:mb-24">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-2xl md:text-3xl font-bold text-orange-600 dark:text-orange-500 mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Our values */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-8 hover:shadow-lg hover:border-orange-200 dark:hover:border-orange-800 transition-all"
              >
                <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/40 rounded-lg flex items-center justify-center text-orange-600 dark:text-orange-500 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What we offer */}
        <section className="max-w-4xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            What We Offer
          </h2>
          <ul className="space-y-4 text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 dark:bg-orange-600 text-white flex items-center justify-center text-sm font-bold">✓</span>
              <span><strong className="text-gray-900 dark:text-white">Courses</strong> — Topic-wise and full-length series for DSSSB, CTET, B.Ed. Entrance, UGC NET JRF, IGNOU, and more.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 dark:bg-orange-600 text-white flex items-center justify-center text-sm font-bold">✓</span>
              <span><strong className="text-gray-900 dark:text-white">Mock Tests</strong> — Timed mock exams with detailed analysis to help you practice and improve.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 dark:bg-orange-600 text-white flex items-center justify-center text-sm font-bold">✓</span>
              <span><strong className="text-gray-900 dark:text-white">Video Lectures</strong> — Expert-led video content for conceptual clarity and revision.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 dark:bg-orange-600 text-white flex items-center justify-center text-sm font-bold">✓</span>
              <span><strong className="text-gray-900 dark:text-white">Blogs & Tips</strong> — Preparation strategies, syllabus breakdowns, and exam updates.</span>
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto">
            Explore our courses and mock tests to prepare for your dream teaching job.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/courses"
              className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors"
            >
              View Courses
            </Link>
            <Link
              to="/mock-test"
              className="inline-flex items-center px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg transition-colors"
            >
              Mock Tests
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Aboutus;
