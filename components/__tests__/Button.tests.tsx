import React from 'react';
import Button from '../Button';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('Button component', () => {
  test('Default render', () => {
    const component = renderer.create(
      <Button>
        Button
      </Button>,
    );
  
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('Primary render', () => {
    const component = renderer.create(
      <Button primary>
        Button
      </Button>,
    );
  
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('additionalClass render', () => {
    const component = renderer.create(
      <Button additionalClass="foo bar">
        Button
      </Button>,
    );
  
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('onClick', () => {
    const onClick = jest.fn();

    const component = shallow(
      <Button onClick={onClick}>
        Button
      </Button>,
    );

    component.simulate('click');
  
    expect(onClick).toHaveBeenCalled();
  });
});