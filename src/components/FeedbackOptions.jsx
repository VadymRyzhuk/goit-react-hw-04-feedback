import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsStyle = {
    marginRight: '20px',
    width: '68px',
    height: '35px',
  };
  return (
    <div>
      {options.map(option => (
        <button
          key={option}
          onClick={() => onLeaveFeedback(option)}
          style={optionsStyle}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export { FeedbackOptions };
