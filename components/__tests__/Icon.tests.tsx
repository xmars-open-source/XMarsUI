import React from 'react';
import Icon from '../Icon';
import renderer from 'react-test-renderer';

describe('Icon component', () => {
  test('Default render', () => {
    const component = renderer.create(
      <Icon name="more" />,
    );
  
    expect(component.toJSON()).toMatchSnapshot();
  });
});