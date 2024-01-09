import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <span>Good: {good}</span>
      <br />
      <span>Neutral: {neutral}</span>
      <br />
      <span>Bad: {bad}</span> <br />
      <span>
        Total: <span>{total}</span>
      </span>
      <br />
      <span>
        Positive percentage:
        <span>
          {isNaN(positivePercentage) ? `0%` : `${positivePercentage}%`}
        </span>
      </span>
    </>
  );
};

export { Statistics };
