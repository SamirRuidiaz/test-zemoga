import React from 'react';
import { shallow } from 'enzyme';
import GridVotes from './GridVotes';

describe('<GridVotes />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<GridVotes />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
