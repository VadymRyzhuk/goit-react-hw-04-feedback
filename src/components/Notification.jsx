import React from 'react';

const Notification = ({ message }) => {
  const myStyle = {
    margin: '0 auto',
    maxWidth: '500px',
  };
  return (
    <div style={myStyle}>
      <p>{message}</p>
    </div>
  );
};

export { Notification };
