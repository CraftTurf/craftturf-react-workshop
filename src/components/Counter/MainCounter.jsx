import * as React from 'react';
import Counter from './Counter';

export default class MainCounter extends React.Component
{
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    this.handleClickDecrement = this.handleClickDecrement.bind(this);
    this.handleClickIncrement = this.handleClickIncrement.bind(this);
  }


  render() {
    return(
      <div>
        <p>{this.state.count}</p>
      <Counter onClick={this.handleClickIncrement}>
        {'Increment'}
      </Counter>

      <Counter onClick={this.handleClickDecrement}>
        {'Decrement'}
      </Counter>
    </div>
    );
  }

  handleClickIncrement() {
    const { count } = this.state;
    this.setState({
      count: count + 1
    })
  }

  handleClickDecrement() {
    const { count } = this.state;
    this.setState({
      count: count - 1
    })
  }
}

MainCounter.defaultProps = {
  children: 'Click The Button'
}
