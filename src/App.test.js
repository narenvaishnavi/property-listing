import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Card from './components/card/card';
import Header from './components/Header/header';

Enzyme.configure({ adapter: new Adapter() });

describe('Property List', () => {
  const mockData = [
    {
      id: 1,
      bedroom: '2BR',
      baths: 3.5,
      area: 2700,
      listPrice: 950000,
      address: '456 Avenue Crt',
      listDate: '01/02/2021',
      photo:
        'https://s3-us-west-2.amazonaws.com/cdn.simplyrets.com/properties/trial/home-inside-5.jpg',
      favorite: false,
    },
  ];
  const handleClick = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Card updateEstate={mockData} parentCallback={handleClick} />,
    );
  });

  it('Data Passed to CardList is not Null', () => {
    expect(wrapper).not.toBeNull();
  });

  it('Data Passed to CardList is not an Object', () => {
    expect(wrapper).not.toBe({});
  });

  it('Data Passed to CardList is an array of object', () => {
    expect(mockData).toEqual(
      expect.arrayContaining([expect.objectContaining({ id: 1 })]),
    );
  });

  it('Simulate HandleClick should always return object', () => {
    wrapper.find(Card).first().simulate('click');
    expect(wrapper).toEqual({});
  });

  it('Card Component render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Header Component render correctly', () => {
    wrapper = mount(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
