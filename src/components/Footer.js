import React from 'react';

function Footer() {
  return (
    <footer className="footer bg-dark text-white text-center py-4">
      <div className="container">
        <p>&copy; 2024 My Portfolio. All Rights Reserved.</p>
        <p>Follow me on 
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white ml-2">Twitter</a>,
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white ml-2">LinkedIn</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
