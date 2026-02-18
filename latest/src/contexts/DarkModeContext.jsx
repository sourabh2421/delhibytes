import { createContext, useContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};

export const DarkModeProvider = ({ children }) => {
  // Always start with light mode (false)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize on mount - check localStorage and apply accordingly
  useEffect(() => {
    // First, ensure we start in light mode (remove dark class)
    document.documentElement.classList.remove('dark');
    
    // Then check localStorage for saved preference
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      if (saved === 'true') {
        // Only apply dark mode if explicitly saved as true
        document.documentElement.classList.add('dark');
        setIsDarkMode(true);
      } else {
        // Ensure light mode (remove dark class and clear any invalid localStorage)
        document.documentElement.classList.remove('dark');
        setIsDarkMode(false);
        if (saved !== null && saved !== 'false') {
          // Clean up invalid localStorage entries
          localStorage.setItem('darkMode', 'false');
        }
      }
    }
  }, []); // Run only once on mount

  // Update dark mode class and localStorage when isDarkMode changes
  useEffect(() => {
    // Update the class on the document element
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save preference to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
