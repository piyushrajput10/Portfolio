import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { useActiveSection } from './hooks/useScrollAnimation';

export default function App() {
  useActiveSection(['home', 'about', 'experience', 'projects', 'contact']);

  // Custom cursor dot effect
  useEffect(() => {
    const dot = document.createElement('div');
    dot.style.cssText = `
      position: fixed; pointer-events: none; z-index: 10000;
      width: 6px; height: 6px; border-radius: 50%;
      background: #00e5a0; transform: translate(-50%, -50%);
      transition: transform 0.1s, opacity 0.3s;
      opacity: 0;
    `;
    const ring = document.createElement('div');
    ring.style.cssText = `
      position: fixed; pointer-events: none; z-index: 9999;
      width: 28px; height: 28px; border-radius: 50%;
      border: 1px solid rgba(0,229,160,0.4); transform: translate(-50%, -50%);
      transition: left 0.12s ease, top 0.12s ease, transform 0.2s, opacity 0.3s;
      opacity: 0;
    `;
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mouseX = 0, mouseY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX; mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
      dot.style.opacity = '1';
      ring.style.left = `${mouseX}px`;
      ring.style.top = `${mouseY}px`;
      ring.style.opacity = '1';
    };

    const enter = () => { dot.style.opacity = '1'; ring.style.opacity = '1'; };
    const leave = () => { dot.style.opacity = '0'; ring.style.opacity = '0'; };

    const hoverEl = () => {
      ring.style.transform = 'translate(-50%, -50%) scale(1.8)';
      ring.style.borderColor = 'rgba(0,229,160,0.7)';
    };
    const unhoverEl = () => {
      ring.style.transform = 'translate(-50%, -50%) scale(1)';
      ring.style.borderColor = 'rgba(0,229,160,0.4)';
    };

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseenter', enter);
    document.addEventListener('mouseleave', leave);

    const links = document.querySelectorAll('a, button');
    links.forEach(l => { l.addEventListener('mouseenter', hoverEl); l.addEventListener('mouseleave', unhoverEl); });

    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseenter', enter);
      document.removeEventListener('mouseleave', leave);
      document.body.removeChild(dot);
      document.body.removeChild(ring);
    };
  }, []);

  return (
   <div className="grain bg-gray-50 dark:bg-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  

 
  );
}
