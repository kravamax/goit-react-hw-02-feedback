import React from 'react';
import PropTypes from 'prop-types';
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

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
