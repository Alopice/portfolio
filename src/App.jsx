import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        
        <Contact />
        <ToastContainer
        autoClose={3000}
        position='bottom-right'
        />
      </main>
      <footer className="py-8 text-center text-tertiary">
        <p>© {new Date().getFullYear()} Sabeeh Ashraf T V. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App; 