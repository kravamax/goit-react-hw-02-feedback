import React from 'react';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttonsNamesArray = Object.keys(options);
  return (
    <ul>
      {buttonsNamesArray.map(buttonName => (
        <button
          key={buttonName}
          onClick={() => onLeaveFeedback(buttonName)}
          className={s[buttonName]}
        >
          {buttonName}
        </button>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
