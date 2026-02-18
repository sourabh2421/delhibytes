import { useState } from 'react';

const BLOG_CATEGORIES = [
  'All',
  'CTET',
  'DSSSB',
  'B.Ed.',
  'UGC NET',
  'Exam Tips',
  'Study Guide',
];

// Topic-related dummy images (Unsplash, free to use)
const BLOG_POSTS = [
  {
    id: 1,
    title: 'How to Crack CTET Paper 1 in 3 Months: Complete Strategy Guide',
    excerpt: 'Learn the proven strategies and study plan to crack CTET Paper 1 within 3 months. Includes subject-wise preparation tips, important topics, and mock test schedule.',
    category: 'CTET',
    tags: ['CTET', 'Exam Tips', 'Study Guide'],
    author: 'Expert Educator',
    date: 'Feb 15, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
    featured: true,
  },
  {
    id: 2,
    title: 'DSSSB TGT vs PGT: Which One Should You Choose?',
    excerpt: 'A comprehensive comparison between DSSSB TGT and PGT positions, including eligibility, salary, job responsibilities, and career growth opportunities.',
    category: 'DSSSB',
    tags: ['DSSSB', 'Career Guide'],
    author: 'Career Counselor',
    date: 'Feb 14, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
    featured: true,
  },
  {
    id: 3,
    title: 'B.Ed. Entrance Exam: Top 10 Books You Must Read',
    excerpt: 'Discover the best books recommended by toppers for B.Ed. entrance exams. Includes subject-wise book recommendations and study strategies.',
    category: 'B.Ed.',
    tags: ['B.Ed.', 'Study Guide'],
    author: 'Study Expert',
    date: 'Feb 13, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80',
    featured: false,
  },
  {
    id: 4,
    title: 'UGC NET JRF: Paper 1 Preparation Tips and Tricks',
    excerpt: 'Master UGC NET Paper 1 with these expert tips. Learn about the syllabus, important topics, time management, and how to score high in Teaching & Research Aptitude.',
    category: 'UGC NET',
    tags: ['UGC NET', 'Exam Tips'],
    author: 'NET Expert',
    date: 'Feb 12, 2026',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=800&q=80',
    featured: false,
  },
  {
    id: 5,
    title: 'Time Management for Competitive Exams: 5 Effective Techniques',
    excerpt: 'Learn proven time management techniques that will help you balance study time, practice tests, and revision effectively for any competitive exam.',
    category: 'Exam Tips',
    tags: ['Exam Tips', 'Study Guide'],
    author: 'Success Coach',
    date: 'Feb 11, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&q=80',
    featured: false,
  },
  {
    id: 6,
    title: 'CTET Previous Year Papers Analysis: What Changed in 2024?',
    excerpt: 'Detailed analysis of CTET 2024 question papers, pattern changes, difficulty level, and what to expect in upcoming exams based on recent trends.',
    category: 'CTET',
    tags: ['CTET', 'Exam Tips'],
    author: 'CTET Analyst',
    date: 'Feb 10, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    featured: false,
  },
  {
    id: 7,
    title: 'DSSSB Recruitment Process: Step-by-Step Guide',
    excerpt: 'Complete guide to DSSSB recruitment process including application procedure, exam pattern, syllabus, and interview preparation tips.',
    category: 'DSSSB',
    tags: ['DSSSB', 'Career Guide'],
    author: 'Recruitment Expert',
    date: 'Feb 9, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80',
    featured: false,
  },
  {
    id: 8,
    title: 'How to Prepare for B.Ed. Entrance Without Coaching',
    excerpt: 'Self-study strategies and resources to crack B.Ed. entrance exams without expensive coaching. Includes free study materials and online resources.',
    category: 'B.Ed.',
    tags: ['B.Ed.', 'Study Guide'],
    author: 'Self-Study Expert',
    date: 'Feb 8, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80',
    featured: false,
  },
  {
    id: 9,
    title: 'UGC NET Commerce: Complete Syllabus Breakdown',
    excerpt: 'Detailed breakdown of UGC NET Commerce syllabus, important topics, weightage, and preparation strategy for Paper 2.',
    category: 'UGC NET',
    tags: ['UGC NET', 'Study Guide'],
    author: 'Commerce Expert',
    date: 'Feb 7, 2026',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    featured: false,
  },
  {
    id: 10,
    title: 'Mock Tests: Why They Are Crucial for Exam Success',
    excerpt: 'Understand the importance of mock tests in exam preparation. Learn how to analyze mock test results and improve your performance.',
    category: 'Exam Tips',
    tags: ['Exam Tips', 'Study Guide'],
    author: 'Test Expert',
    date: 'Feb 6, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80',
    featured: false,
  },
];

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      !searchQuery.trim() ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Educational <span className="text-orange-600 dark:text-orange-500">Blogs</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Expert insights, study tips, and guides to help you excel in your teaching career
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search blogs..."
              className="w-full pl-4 pr-12 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-gray-900 dark:text-white placeholder-gray-500 shadow-sm"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Categories */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6 sticky top-24">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">Categories</h3>
              <ul className="space-y-2">
                {BLOG_CATEGORIES.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        selectedCategory === cat
                          ? 'bg-orange-500 dark:bg-orange-600 text-white'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Featured Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredPosts.map((post) => (
                    <article
                      key={post.id}
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                    >
                      <div className="relative h-48 bg-gradient-to-br from-orange-100 to-amber-100 dark:from-gray-700 dark:to-gray-600 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                            e.target.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                        <div className="hidden absolute inset-0 bg-gradient-to-br from-orange-200 to-amber-200 dark:from-gray-600 dark:to-gray-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                          Featured
                        </div>
                        <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded">
                          {post.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                          <span>{post.author}</span>
                          <span>•</span>
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <button className="text-orange-600 dark:text-orange-500 font-semibold hover:underline">
                          Read More →
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* Regular Posts */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {selectedCategory === 'All' ? 'All Articles' : selectedCategory}
              </h2>
              {regularPosts.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400 py-12 text-center">
                  {searchQuery.trim()
                    ? `No articles found for "${searchQuery}" in ${selectedCategory}.`
                    : `No articles in ${selectedCategory}.`}
                </p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {regularPosts.map((post) => (
                    <article
                      key={post.id}
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                    >
                      <div className="relative h-40 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-700 dark:to-gray-600 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                            e.target.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                        <div className="hidden absolute inset-0 bg-gradient-to-br from-orange-200 to-amber-200 dark:from-gray-600 dark:to-gray-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        <div className="absolute top-2 right-2 bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded">
                          {post.category}
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-2">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-1">
                            {post.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <button className="text-orange-600 dark:text-orange-500 font-semibold text-sm hover:underline">
                            Read →
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
