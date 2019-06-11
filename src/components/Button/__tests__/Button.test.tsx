import Button from '../';
import React from 'react';
import { shallow } from 'enzyme';

describe('Button', () => {
  it('renders the component', () => {
    const wrapper = shallow(<Button>Test BTN</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders children', () => {
    const wrapper = shallow(<Button>Test BTN</Button>);

    expect(wrapper.text()).toEqual('Test BTN');
  });
});
