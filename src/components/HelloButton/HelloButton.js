import React from 'react';

const buttonWhite = {
  fontFamily: 'Helvetica, sans-serif',
  backgroundColor: '#fff',
  fontWeight: 'bold',
  fontSize: '1.5rem',
  border: '1px solid #000',
  display: 'table',
  margin: '50% auto',
  whiteSpace: 'nowrap',
};

export const HelloButtonPure = () =>
  React.createElement(
    'button',
    {
      style: buttonWhite,
      onClick: () => alert('\u2728 \u270a'),
    },
    'Hello world!',
  );

export const HelloButtonJSX = ({ children }) => (
  <button style={buttonWhite} onClick={() => alert('\u2728 \u270a')}>
    {children}
  </button>
);

HelloButtonJSX.propTypes = {
  children: React.PropTypes.node,
};
