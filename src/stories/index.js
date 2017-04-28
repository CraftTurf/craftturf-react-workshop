import * as React from 'react';
import { storiesOf } from '@kadira/storybook';

import { HelloButtonPure, HelloButtonJSX } from '../components/HelloButton/HelloButton';
import firstClass, { A, B } from '../components/Functional/firstClass';
import add from '../components/Functional/higherOrder';
import Profiles, {
  profileItemsWithFilter,
  profilesDataWithReducer
} from '../components/Profiles/Profiles';

storiesOf('Profiles', module)
  .add('.map()', () => (
      <div>{Profiles}</div>
  ))
  .add('.filter().map()', () => (
      <div>{profileItemsWithFilter}</div>
  ))
  .add('.filter().map().reduce()', () => (
      <code>{JSON.stringify(profilesDataWithReducer, null)}</code>
  ));

storiesOf('Hello Button', module)
  .add('JSX', () => (
    <HelloButtonJSX>
      Click me
    </HelloButtonJSX>
  ))

  .add('Pure', () => (
    <HelloButtonPure>
      Click me
    </HelloButtonPure>
  ));


storiesOf('JS supports...', module)
  .add('first class function', () => (
      <div>{firstClass}</div>
  ))
  .add('higher order function', () => {
    const myFunc = () => 3;
    const sum = add(A)(B);
    return <div>{sum}</div>;
  });
