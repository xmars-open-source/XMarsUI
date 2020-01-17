import React from 'react';
import IconButton from '../IconButton';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('IconButton component', () => {
  test('Default render', () => {
    const component = renderer.create(
      <IconButton name="more" />,
    );
  
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('Primary render', () => {
    const component = renderer.create(
      <IconButton primary name="more" />,
    );
  
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('Circle render', () => {
    const component = renderer.create(
      <IconButton circle name="more" />,
    );
  
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('Ripple render', () => {
    const component = renderer.create(
      <IconButton ripple name="more" />,
    );
  
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('additionalClass render', () => {
    const component = renderer.create(
      <IconButton additionalClass="foo bar" name="more" />,
    );
  
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('onClick', () => {
    const onClick = jest.fn();

    const component = shallow(
      <IconButton onClick={onClick} name="more" />,
    );

    component.simulate('click');
  
    expect(onClick).toHaveBeenCalled();
  });
});