import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Vijay Saravana Jaishanker</h2>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hey there! This is Vijay.
        I am a grad student in Computer Science at <a href="https://gatech.edu/">Georgia Tech</a>. I completed my undergraduate degree from Anna University - MIT Campus in Computer Science. I am a systems enthusiast who enjoys building efficient, robust and scalable systems!

      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
