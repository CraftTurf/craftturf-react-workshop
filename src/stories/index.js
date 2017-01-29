import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import MainCounter from '../components/Counter/MainCounter'
import Textbox from '../components/Textbox/Textbox';
import Search from '../components/Search/Search';
import SearchFixtures from '../components/Search/Search.fixtures';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));


  storiesOf('Counter', module)
    .add('default', () => (
      <MainCounter />
    ));
  storiesOf('Textbox', module)
    .add('default', () => (
      <Textbox />
    ));

    storiesOf('Search Box', module)
      .add('default', () => (
        <Search list={SearchFixtures}/>
      ));
