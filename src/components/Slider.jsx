import React from 'react';

const Slide = ({ title, text, file }) => (
  <div className="slide">
    <h2>{title}</h2>
    <p>{text}</p>
    <img src={file} />
  </div>
);

export default Slide;