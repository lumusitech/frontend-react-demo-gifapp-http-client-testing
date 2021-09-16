import React from 'react';
import { shallow } from 'enzyme'
import '@testing-library/jest-dom'

import GifExpertApp from '../GifExpertApp'

describe('Tensting on <GifExpertApp />', () => {
    test('should match with the snapshot along time', () => {
        const wrapper = shallow(<GifExpertApp />); // con valores por defecto

        expect(wrapper).toMatchSnapshot();
    })
    
    test('should shows a category list', () => {
        const categories = ['One Punch','Dragon ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
})