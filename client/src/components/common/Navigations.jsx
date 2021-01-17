import React from 'react';
import { Link } from 'react-router-dom';
import {
  bookmark,
  bookmarkWhite,
  facebook,
  twitter,
} from '../../utils/imgImport';
import { LoginButton } from './Buttons';
import NavLinks from './NavLinks';

export const NavHeader = () => {
  return (
    <nav id="header-nav" className="header-nav nav row">
      <Link to="/" className="brand-logo-link" aria-label="Bookmark Logo">
        <div id="header-navbar-brand" className="navbar-brand">
          <img src={bookmark} alt="Bookmark" />
        </div>
      </Link>
      <div id="header-navbar-links" className="header-navbar-links row">
        <NavLinks />
        <LoginButton />
      </div>
    </nav>
  );
};

export const NavFooter = () => {
  return (
    <nav id="footer-nav" className="footer-nav nav row">
      <div id="footer-navbar-links" className="footer-navbar-links row">
        <Link to="/" className="brand-logo-link" aria-label="Bookmark Logo">
          <div id="footer-navbar-brand" className="navbar-brand">
            <img src={bookmarkWhite} alt="Bookmark" />
          </div>
        </Link>
        <NavLinks />
      </div>
      <div id="footer-navbar-social" className="navbar-social">
        <div id="social-links" className="social-links row">
          <a
            id="facebook-link"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Facebook"
          >
            <img src={facebook} alt="Facebook" />
          </a>
          <a
            id="twitter-link"
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Twitter"
          >
            <img src={twitter} alt="Twitter" />
          </a>
        </div>
      </div>
    </nav>
  );
};
