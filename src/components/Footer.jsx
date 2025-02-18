import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 My React Site. All Rights Reserved.</p>
      <p>
        Follow us on: 
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>, 
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>, 
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
      </p>
    </footer>
  );
}

export default Footer;
