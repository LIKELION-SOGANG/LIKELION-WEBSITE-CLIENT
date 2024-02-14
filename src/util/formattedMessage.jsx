import React from 'react';
export const formattedMessage = (message) => {
  return message
    ? message.split('\n').map((item, key) => (
        <span key={key}>
          {item}
          <br />
        </span>
      ))
    : null;
};
