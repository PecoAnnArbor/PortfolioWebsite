import React, { useEffect } from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NavigationBar from './components/NavBar';
import Footer from './components/Footer';
import SocialSlider from './components/SocialSlider';
import Projects from './components/Projects';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './App.css';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS

    let lastX = 0;
    let lastY = 0;
    let isDrawing = false;

    // Function to handle mouse movement and create paintbrush effect
    const handleMouseMove = (e) => {
      const distance = Math.hypot(e.pageX - lastX, e.pageY - lastY);

      // Only create a new streak if the cursor has moved enough
      if (distance > 5) {
        const paintbrush = document.createElement('div');
        paintbrush.className = 'paintbrush';
        paintbrush.style.left = `${e.pageX}px`;
        paintbrush.style.top = `${e.pageY}px`;
        document.body.appendChild(paintbrush);

        // Remove the paintbrush after the animation is done
        setTimeout(() => {
          paintbrush.remove();
        }, 1000); // 1 second, same as the animation duration

        lastX = e.pageX;
        lastY = e.pageY;
      }
    };

    // Add the event listener for mouse movement
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="App">
      <title>Ian Zhang</title>
      {/* <NavigationBar /> */}
      <div className="content">
        <SocialSlider />
        <Home />
        {/* <About /> */}
        <Projects />
        {/* <Contact /> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
