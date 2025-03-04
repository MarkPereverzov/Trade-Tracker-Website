import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Initialize reveal animations on scroll
const initRevealAnimations = () => {
  const reveals = document.querySelectorAll('.reveal');
  
  const revealOnScroll = () => {
    reveals.forEach((reveal) => {
      const revealTop = reveal.getBoundingClientRect().top;
      const revealPoint = 150;
      
      if (revealTop < window.innerHeight - revealPoint) {
        reveal.classList.add('active');
      }
    });
  };
  
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);
  
  // Initial check
  setTimeout(revealOnScroll, 100);
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Initialize animations after render
window.addEventListener('load', initRevealAnimations);