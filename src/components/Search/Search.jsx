import * as React from 'react';
import SearchBox from './SearchBox'

export default class Search extends React.Component
{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);

    this.state = {
      value: ''
    };
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleItemClick(e, i) {
    this.setState({
      value: i
    });
    e.preventDefault();
  }

  render() {
    let search = this.state.value.toLowerCase();
    let filteredItems;

    if(this.state.value.length > 0) {
      filteredItems = this.props.list.filter((l) => {
        let allSearch = l.name.toLowerCase().match(search);
        return allSearch;
      })
    }
    return(
      <SearchBox
        onChange={this.handleChange}
        list={filteredItems}
        value={this.state.value}
        onItemClick={this.handleItemClick}
      />
    );
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });

  }
}

Search.defaultProps = {
  list: {},
}

Search.PropTypes = {
  onItemClick: React.PropTypes.func
}
