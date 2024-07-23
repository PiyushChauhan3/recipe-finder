import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Recipe Finder. All rights reserved.</p>
        <p>
          <a href="/about">About Us</a> | 
          <a href="mailto:contact@recipefinder.com">Contact</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
