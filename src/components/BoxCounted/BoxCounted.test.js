import React from 'react';
import { shallow } from 'enzyme';
import BoxCounted from './BoxCounted';

describe('<BoxCounted />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<BoxCounted />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
