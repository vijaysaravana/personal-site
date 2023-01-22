import React from 'react';
import PropTypes from 'prop-types';

const Degree = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4 className="degree"><a href={data.link}>{data.school}</a></h4>
      <p className="school">{data.degree} | CGPA : {data.gpa} | {data.year}  </p>
    </header>
  </article>
);

Degree.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    gpa: PropTypes.string.isRequired,
  }).isRequired,
};

export default Degree;
