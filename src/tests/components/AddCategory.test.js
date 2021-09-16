import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'

import { AddCategory } from '../../components/AddCategory';

describe('Testing on AddCategory.js', () => {

    // const setCategories = () => { };
    const setCategories = jest.fn(); // Mejor, crear las funciones mock
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('should shows the component <AddCategory /> correctly along time', () => {

        expect(wrapper).toMatchSnapshot();
    })

    test('should change text on change', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', { target: { value } });

        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(value);

    })

    test('should not post info on submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } })

        expect(setCategories).not.toHaveBeenCalled();
    })

    test('should calls function setCategories once', () => {
        const value = 'Hola testing'
        const input = wrapper.find('input');
        input.simulate('change', { target: { value } })

        wrapper.find('form').simulate('submit', { preventDefault() { } })
        
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        // Se verifica que después del submit, se vacíe el input
        expect(input.props().value).toBe('')
    })
})
