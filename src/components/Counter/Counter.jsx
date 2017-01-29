import * as React from 'react';
import { css } from 'aphrodite';
import CounterStyles from './Counter.styles'

const Counter = ({ onClick, children }) => {
  return(
    <div>
    <button
      onClick={onClick}
      className={css(CounterStyles.button)}
      >
      {children}
    </button>
  </div>
  );
}

Counter.defaultProps = {
  onClick: () => void(0),
  children: 'Click to count'
}

Counter.PropTypes = {
  onClick: React.PropTypes.Func
}

export default Counter;
