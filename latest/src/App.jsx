import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DarkModeProvider } from './contexts/DarkModeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Menu from './components/Menu'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SocialMedia from './components/SocialMedia'
import Courses from './innerComponents/Courses'
import MockTest from './innerComponents/MockTest'
import Blogs from './innerComponents/Blogs'
import Aboutus from './innerComponents/Aboutus'
import Login from './innerComponents/Login'
import Signup from './innerComponents/Signup'

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Menu />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/mock-test" element={<MockTest />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about-us" element={<Aboutus />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <SocialMedia />
        </div>
      </Router>
    </DarkModeProvider>
  )
}

export default App
