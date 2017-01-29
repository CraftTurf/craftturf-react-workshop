import * as React from 'react';

export default class Counter extends React.Component
{
  constructor() {
    super();

    this.handleOnChange = this.handleOnChange.bind(this);

    this.state = {
      value: ''
    }
  }

  render() {
    return(
      <div>
        <input
          type='text'
          onChange={this.handleOnChange}
          value={this.state.value}
        />
        <h3>{this.state.value}</h3>
      </div>
    );
  }

  handleOnChange(e) {
    this.setState({
      value: e.target.value
    });

  }
}
