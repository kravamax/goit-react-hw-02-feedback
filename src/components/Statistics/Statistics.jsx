import React from 'react';
import s from './Statistics.module.css';
import Notification from './Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={s.statistics}>
      {total ? (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>
            Positive feedback: {positivePercentage ? positivePercentage : '0'}%
          </p>
        </>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};

export default Statistics;
