import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Vijay Saravana via Linkedin"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can reach out to me on: <a href="https://www.linkedin.com/in/vijay-saravana-j">Linkedin</a></p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
