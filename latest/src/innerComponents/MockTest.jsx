import { useState } from 'react';

const EXAM_CATEGORIES = [
  'All Exam',
  'B.Ed. Entrance',
  'CTET',
  'UGC NET JRF',
  'Journalism',
  'MAH IGNOU',
  'DSSSB',
];

// Topic-related images per exam category (Unsplash, free to use)
const CATEGORY_IMAGES = {
  'B.Ed. Entrance': 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80',
  CTET: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
  'UGC NET JRF': 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=600&q=80',
  Journalism: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80',
  'MAH IGNOU': 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80',
  DSSSB: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80',
};

// Dummy mock exams per category (each exam has category for filtering)
const MOCK_EXAMS_BY_CATEGORY = {
  'B.Ed. Entrance': [
    { id: 'bed-1', title: 'B.Ed. Teaching Aptitude', label: 'TEACHING APTITUDE', quizzes: 21, questions: 1051, price: 'Rs. 999', isPremium: true },
    { id: 'bed-2', title: 'COQP06 B.Ed. Science', label: 'B.Ed. (Science)', quizzes: 18, questions: 540, price: 'Rs. 999', isPremium: true },
    { id: 'bed-3', title: 'B.Ed. General Knowledge Mock', label: 'B.Ed. GK', quizzes: 15, questions: 450, price: 'Rs. 799', isPremium: true },
    { id: 'bed-4', title: 'B.Ed. Reasoning & Aptitude', label: 'B.Ed. REASONING', quizzes: 12, questions: 360, price: 'Rs. 899', isPremium: true },
    { id: 'bed-5', title: 'DU B.Ed. Entrance Full Mock', label: 'DU B.Ed.', quizzes: 10, questions: 300, price: 'Rs. 1299', isPremium: true },
  ],
  CTET: [
    { id: 'ctet-1', title: 'CTET Topic Wise Mock', label: 'CTET TOPIC WISE', quizzes: 50, questions: 920, price: 'Rs. 1999', isPremium: true },
    { id: 'ctet-2', title: 'CTET Paper 1 - Child Development', label: 'CTET PAPER 1', quizzes: 35, questions: 700, price: 'Rs. 1499', isPremium: true },
    { id: 'ctet-3', title: 'CTET Paper 2 - Maths & Science', label: 'CTET PAPER 2', quizzes: 40, questions: 800, price: 'Rs. 1499', isPremium: true },
    { id: 'ctet-4', title: 'CTET Previous Year Papers', label: 'CTET PYP', quizzes: 20, questions: 600, price: 'Rs. 999', isPremium: true },
    { id: 'ctet-5', title: 'CTET Environmental Studies', label: 'CTET EVS', quizzes: 15, questions: 450, price: 'Rs. 799', isPremium: true },
  ],
  'UGC NET JRF': [
    { id: 'ugc-1', title: 'UGC NET Paper 1', label: 'UGC NET JRF PAPER 1', quizzes: 35, questions: 1709, price: 'Rs. 1999', isPremium: true },
    { id: 'ugc-2', title: 'UGC NET Computer Science', label: 'UGC NET CS', quizzes: 30, questions: 1200, price: 'Rs. 2499', isPremium: true },
    { id: 'ugc-3', title: 'UGC NET Commerce', label: 'UGC NET COMMERCE', quizzes: 28, questions: 1120, price: 'Rs. 2299', isPremium: true },
    { id: 'ugc-4', title: 'UGC NET Teaching Aptitude', label: 'UGC NET TA', quizzes: 25, questions: 750, price: 'Rs. 999', isPremium: true },
    { id: 'ugc-5', title: 'UGC NET Research Aptitude', label: 'UGC NET RA', quizzes: 20, questions: 600, price: 'Rs. 999', isPremium: true },
  ],
  Journalism: [
    { id: 'jour-1', title: 'Journalism Entrance Mock', label: 'JOURNALISM', quizzes: 12, questions: 360, price: 'Rs. 799', isPremium: true },
    { id: 'jour-2', title: 'Mass Communication Mock', label: 'MASS COMM', quizzes: 15, questions: 450, price: 'Rs. 899', isPremium: true },
    { id: 'jour-3', title: 'BJMC Entrance Test Series', label: 'BJMC', quizzes: 10, questions: 300, price: 'Rs. 699', isPremium: true },
    { id: 'jour-4', title: 'Media Studies Mock', label: 'MEDIA STUDIES', quizzes: 8, questions: 240, price: 'Rs. 599', isPremium: true },
  ],
  'MAH IGNOU': [
    { id: 'ignou-1', title: 'IGNOU B.Ed. Mock Test', label: 'IGNOU B.Ed.', quizzes: 14, questions: 420, price: 'Rs. 899', isPremium: true },
    { id: 'ignou-2', title: 'IGNOU BCA Entrance Mock', label: 'IGNOU BCA', quizzes: 12, questions: 360, price: 'Rs. 799', isPremium: true },
    { id: 'ignou-3', title: 'MAH B.Ed. CET Mock', label: 'MAH B.Ed. CET', quizzes: 18, questions: 540, price: 'Rs. 999', isPremium: true },
    { id: 'ignou-4', title: 'IGNOU MCA Mock Series', label: 'IGNOU MCA', quizzes: 10, questions: 300, price: 'Rs. 749', isPremium: true },
    { id: 'ignou-5', title: 'MAH M.Ed. Entrance Mock', label: 'MAH M.Ed.', quizzes: 8, questions: 240, price: 'Rs. 699', isPremium: true },
  ],
  DSSSB: [
    { id: 'dsssb-1', title: 'DSSSB TGT Mock Series', label: 'DSSSB TGT', quizzes: 25, questions: 750, price: 'Rs. 1499', isPremium: true },
    { id: 'dsssb-2', title: 'DSSSB PGT Mock Test', label: 'DSSSB PGT', quizzes: 22, questions: 660, price: 'Rs. 1399', isPremium: true },
    { id: 'dsssb-3', title: 'DSSSB PRT Preparation Mock', label: 'DSSSB PRT', quizzes: 20, questions: 600, price: 'Rs. 1199', isPremium: true },
    { id: 'dsssb-4', title: 'DSSSB Reasoning & QA', label: 'DSSSB REASONING', quizzes: 15, questions: 450, price: 'Rs. 999', isPremium: true },
    { id: 'dsssb-5', title: 'DSSSB General Awareness', label: 'DSSSB GK', quizzes: 18, questions: 540, price: 'Rs. 899', isPremium: true },
  ],
};

// Flatten for "All Exam" view
const ALL_MOCK_EXAMS = Object.entries(MOCK_EXAMS_BY_CATEGORY).flatMap(([category, exams]) =>
  exams.map((exam) => ({ ...exam, category }))
);

const MockTest = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Exam');

  const examsForCategory =
    selectedCategory === 'All Exam'
      ? ALL_MOCK_EXAMS
      : (MOCK_EXAMS_BY_CATEGORY[selectedCategory] || []);

  const filteredExams = searchQuery.trim()
    ? examsForCategory.filter(
        (exam) =>
          exam.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          exam.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : examsForCategory;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left sidebar - exam categories */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <button
              onClick={() => setSelectedCategory('All Exam')}
              className={`w-full text-left px-4 py-3 rounded-t-lg font-semibold transition-colors ${
                selectedCategory === 'All Exam'
                  ? 'bg-orange-500 dark:bg-orange-600 text-white'
                  : 'bg-orange-500 dark:bg-orange-600 text-white hover:bg-orange-600 dark:hover:bg-orange-700'
              }`}
            >
              All Exam
            </button>
            <ul className="bg-white dark:bg-gray-800 border border-t-0 border-gray-200 dark:border-gray-700 rounded-b-lg shadow-sm overflow-hidden">
              {EXAM_CATEGORIES.slice(1).map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-4 py-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0 font-medium transition-all duration-200 ${
                      selectedCategory === cat
                        ? 'bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0">
            {/* Search */}
            <div className="mb-6">
              <div className="relative max-w-xl">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Exams.."
                  className="w-full pl-4 pr-12 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-gray-900 dark:text-white placeholder-gray-500"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {selectedCategory === 'All Exam' ? 'All Exams' : selectedCategory}
            </h2>

            {/* Mock test cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredExams.length === 0 ? (
                <p className="col-span-full text-gray-500 dark:text-gray-400 py-8 text-center">
                  {searchQuery.trim()
                    ? `No exams found for "${searchQuery}" in ${selectedCategory}.`
                    : `No exams in ${selectedCategory}.`}
                </p>
              ) : (
                filteredExams.map((exam) => (
                  <div
                    key={exam.id}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-orange-50 to-amber-100 dark:from-gray-700 dark:to-gray-600 overflow-hidden">
                      <img
                        src={CATEGORY_IMAGES[exam.category] || CATEGORY_IMAGES['CTET']}
                        alt={exam.label}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.style.display = 'none';
                          e.target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden absolute inset-0 bg-gradient-to-br from-orange-100 to-amber-200 dark:from-gray-600 dark:to-gray-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <span className="absolute bottom-3 left-3 right-3 text-center text-white font-semibold text-sm uppercase tracking-wide drop-shadow-md">
                        {exam.label}
                      </span>
                      {exam.isPremium && (
                        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded transform -rotate-[-20deg] shadow">
                          PREMIUM EXAM
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">
                        {exam.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        Quizzes: {exam.quizzes}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Questions: {exam.questions}
                      </p>
                      <button className="w-full bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white py-2.5 rounded-lg font-semibold transition-colors mb-3">
                        Start Exam
                      </button>
                      <p className="text-center text-sm">
                        <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                          Price: {exam.price}
                        </span>
                      </p>
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

export default MockTest;
