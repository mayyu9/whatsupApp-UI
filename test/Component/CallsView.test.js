import React from 'react';
import { shallow, mount } from 'enzyme';
import CallsView from '../../src/Component/CallsView';
import mock from '../../src/MockData/Mockdata';

it('should render calls view', () => {
  const view = shallow(<CallsView calls={mock.Calls}/>);
  expect(view).toMatchSnapshot();
});
