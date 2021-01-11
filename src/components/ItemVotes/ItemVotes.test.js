import React from 'react';
import { shallow } from 'enzyme';
import ItemVotes from './ItemVotes';

describe('<ItemVotes />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ItemVotes />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
