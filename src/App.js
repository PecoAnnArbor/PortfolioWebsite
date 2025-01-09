import React, { useEffect, useState } from 'react';
import Home from './components/Home';
// import About from './components/About';
import Projects from './components/Projects';
// import Contact from './components/Contact';
import SocialSlider from './components/SocialSlider';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './App.css';
import AOS from 'aos';

function App() {
  const [isSnapEnabled, setIsSnapEnabled] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Optional: Toggling snap effect based on scroll or other conditions
    const toggleSnap = () => {
      setIsSnapEnabled(!isSnapEnabled);
    };

    return () => {
      window.removeEventListener("dblclick", toggleSnap);
    };
  }, [isSnapEnabled]);

  return (
    <div className={`App ${isSnapEnabled ? "" : "snap-disabled"}`}>
      <title>Ian Zhang</title>
      <SocialSlider />
      <div className="content">
        <Home />
        <Projects />
        {/* <About />
        <Contact /> */}
      </div>
    </div>
  );
}

export default App;
