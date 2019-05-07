import * as React from 'react';
import { shallow } from 'enzyme';
import ChangeItem from './ChangeItem';

test('Expect to render Typography in ChangeItemw', () => {
  const changeItem = shallow(<ChangeItem />);

  // Snapshot demo
  expect(changeItem.find('Typography')).toBeTruthy();
});
