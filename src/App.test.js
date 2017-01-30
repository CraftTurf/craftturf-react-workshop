import React from 'react';
import renderer from 'react-test-renderer';
import MainCounter from './components/Counter/MainCounter';
import Search from './components/Search/Search';
import SearchFixtures from './components/Search/Search.fixtures';

describe('<MainCounter/>', () => {
  it(' should render Snapshot of MainCounter', () => {
    const component = renderer.create(
      <MainCounter />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.onClick;
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.children;
    tree = components.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<Search/>', () => {
  it(' should render Snapshot', () => {
    const component = renderer.create(
      <Saerch list={SearchFixtures}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.handleChange;
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.handleItemClick;
    tree = components.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
