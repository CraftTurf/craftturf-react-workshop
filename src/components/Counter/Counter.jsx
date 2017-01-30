import * as React from 'react';
import { css } from 'aphrodite';
import styles from './Counter.styles'

const Counter = ({ onClick, children }) => {
  return(
    <button
      onClick={onClick}
      className={css(styles.button)}
      >
      {children}
    </button>
  );
}

Counter.defaultProps = {
  onClick: () => void(0),
  children: 'Click to count'
}

Counter.PropTypes = {
  onClick: React.PropTypes.func,
  children: React.PropTypes.node,
}

export default Counter;
