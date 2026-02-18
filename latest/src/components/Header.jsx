import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/dblogo.jpeg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);
  const isCoursesPage = location.pathname === '/courses';
  const isMockTestPage = location.pathname === '/mock-test';
  const isBlogsPage = location.pathname === '/blogs';
  const isAboutUsPage = location.pathname === '/about-us';
  const isLoginPage = location.pathname === '/login';
  const isSignupPage = location.pathname === '/signup';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300 overflow-x-hidden">
      <nav className="container mx-auto px-4 py-4 overflow-x-hidden">
        <div className="flex items-center justify-between">
          {/* Logo + tagline */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="Delhi Bytes Logo" 
              className="h-10 w-10 object-cover rounded-full flex-shrink-0"
            />
            <div>
              <span className="block text-xl font-bold text-gray-900 dark:text-white tracking-tight">DELHI BYTES</span>
              <span className="block text-xs text-gray-500 dark:text-gray-400 font-medium">TRYST WITH TRUST</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors font-semibold uppercase text-sm tracking-wide">
              Home
            </Link>
            <Link to="/courses" className={`font-semibold uppercase text-sm tracking-wide transition-colors ${isCoursesPage ? 'text-orange-600 dark:text-orange-500' : 'text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500'}`}>
              Courses
            </Link>
            <Link to="/mock-test" className={`font-semibold uppercase text-sm tracking-wide transition-colors ${isMockTestPage ? 'text-orange-600 dark:text-orange-500' : 'text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500'}`}>
              Mock Test
            </Link>
            <Link to="/blogs" className={`font-semibold uppercase text-sm tracking-wide transition-colors ${isBlogsPage ? 'text-orange-600 dark:text-orange-500' : 'text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500'}`}>
              Blogs
            </Link>
            <a href="#" className="flex items-center gap-1.5 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors font-semibold uppercase text-sm tracking-wide">
              <svg className="w-5 h-5 text-red-600 dark:text-red-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Youtube
            </a>
            <Link to="/about-us" className={`font-semibold uppercase text-sm tracking-wide transition-colors ${isAboutUsPage ? 'text-orange-600 dark:text-orange-500' : 'text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500'}`}>
              About Us
            </Link>
            
            {/* Search: icon that transforms into search bar */}
            <div className="flex items-center min-w-[40px]">
              {!isSearchOpen ? (
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(true)}
                  className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors p-1"
                  aria-label="Search"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              ) : (
                <form
                  className="flex items-center gap-1 w-full max-w-[220px] transition-opacity duration-200"
                  onSubmit={(e) => {
                    e.preventDefault();
                    // handle search
                  }}
                >
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search courses..."
                    className="flex-1 min-w-0 px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                    onBlur={() => setIsSearchOpen(false)}
                  />
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    className="p-1.5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 rounded transition-colors"
                    aria-label="Close search"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </form>
              )}
            </div>

            {/* Login / Join Now */}
            <div className="flex items-center space-x-4 pl-2">
              <Link to="/login" className={`font-semibold transition-colors ${isLoginPage ? 'text-orange-600 dark:text-orange-500' : 'text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500'}`}>
                Login
              </Link>
              <Link to="/signup" className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white px-5 py-2 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg">
                Join Now
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-3 pt-4">
              <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/courses" className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Courses
              </Link>
              <Link to="/mock-test" className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Mock Test
              </Link>
              <Link to="/blogs" className={`font-medium transition-colors ${isBlogsPage ? 'text-orange-600 dark:text-orange-500' : 'text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500'}`} onClick={() => setIsMenuOpen(false)}>
                Blogs
              </Link>
              <a href="#" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Youtube
              </a>
              <Link to="/about-us" className={`font-medium transition-colors ${isAboutUsPage ? 'text-orange-600 dark:text-orange-500' : 'text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500'}`} onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>
              <div className="flex items-center gap-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                <Link to="/login" className={`font-medium transition-colors ${isLoginPage ? 'text-orange-600 dark:text-orange-500' : 'text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500'}`} onClick={() => setIsMenuOpen(false)}>
                  Login
                </Link>
                <Link to="/signup" className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white px-5 py-2 rounded-lg font-semibold transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
