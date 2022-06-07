import React from 'react';
import s from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={s.section}>
      <h3 className={s.title}>{title}</h3>
      <>{children}</>
    </div>
  );
};

export default Section;
