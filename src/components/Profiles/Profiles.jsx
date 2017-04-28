import React from 'react';

// Data
const profiles = {
  1: { id: '1', firstName: 'Abiodun', lastName: 'Abdul' },
  2: { id: '2', firstName: 'Olufemi', lastName: 'Oluoje' },
  3: { id: '3', firstName: 'Idi', lastName: 'Amin' },
};

const profileIds = ['1', '2', null];

// view
const Profile = ({ firstName, lastName }) => (
  <div>
    {firstName} {lastName}
  </div>
);

Profile.propTypes = {
  firstName: React.PropTypes.string,
  lastName: React.PropTypes.string,
};

Profile.defaultProps = {
  firstName: '',
  lastName: '',
};

const EmptyProfile = () => (<div>Anonymous</div>);

// .map() > View + Data
export const profileItems = profileIds.map((id) => {
  return id
    ? <Profile {...profiles[id]} />
    : <EmptyProfile />;
});

// .filter().map() > View + Data
export const profileItemsWithFilter = profileIds
  .filter(id => id)
  .map(id => <Profile {...profiles[id]} />);

// .filter().map().reduce() > Reconstructed Data
export const profilesDataWithReducer = profileIds
  .filter(Boolean)
  .map(id => profiles[id])
  .reduce((acc, next) => {
    acc[next.id] = next;
    return acc;
  }, {});


// Usage of profilesDataWithReducer:
//
// <code>
//   {JSON.stringify(profilesDataWithReducer, null)}
// </code>

export default profileItems;
