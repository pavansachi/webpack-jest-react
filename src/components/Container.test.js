import Enzyme, { mount } from 'enzyme';
import Container  from 'components/Container';
import React from "react";
import _ from "underscore";

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<Container />', () => {
    it('check for property', () => {
      const wrapper = mount(<Container text="Welcome"/>);
      document.body.innerHTML = wrapper.html();
    //   console.log(wrapper.html());
    //   console.log(document.querySelector("#container"));
      wrapper.find('Container').simulate('click');
      expect(wrapper.props().text).toEqual('Welcome');
    });

    it('map func', () => {
       expect(_.map([1, 2, 3], function(num){ return num * 3; })).toEqual([3,6,9]);
      });
})