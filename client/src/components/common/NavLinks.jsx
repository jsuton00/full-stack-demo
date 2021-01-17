import React from 'react';
import { Link } from 'react-router-dom';

export default function NavLinks() {
  const navLinks = ['Features', 'Pricing', 'Contact'];
  return (
    <>
      {navLinks.map((link, index) => {
        return (
          <div key={index} className="navlink-item">
            <Link
              to={`/${link.toLowerCase()}`}
              className="navlink"
              aria-label={link}
            >
              {link}
            </Link>
          </div>
        );
      })}
    </>
  );
}
