import React from 'react';
import renderer from 'react-test-renderer';
import MainCounter from './components/Counter/MainCounter';

describe('<MainCounter/>', () => {
  it(' should render Snapshot', () => {
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
