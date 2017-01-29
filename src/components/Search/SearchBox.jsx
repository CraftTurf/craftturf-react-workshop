import * as React from 'react';
import SearchFixtures from './Search.fixtures'

const SearchBox = ({
  onChange,
   value,
    list,
  onItemClick
 }) => {
  return(
    <div>
    <input
      type='text'
      onChange={onChange}
      value={value}
    />
    { value.length > 0 &&
      list.map(all => {
      const { name, id } = all;
      return (
        <div
          onClick={(e) => onItemClick(e, name)}
          key={id}
          >
          <p>{name}</p>
        </div>
      );
    })}
  </div>
  );
}

SearchBox.PropTypes = {
  list: React.PropTypes.object,
  value: ''
}

export default SearchBox;
