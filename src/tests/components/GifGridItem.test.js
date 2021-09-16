import React from 'react';
import { shallow } from 'enzyme';

import '@testing-library/jest-dom'
import { GifGridItem } from '../../components/GifGridItem';

describe('testing on GifGridItem', () => {
    const title = 'Un title';
    const url = 'https://localhost.test.jpg'
    const wrapper = shallow(
        <GifGridItem
            title={title}
            url={url}
        />
    );

    test('should shows the component <GifGridItem /> correctly along time', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('it should has a paragraph with the title', () => {

        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(title);
    })

    test('should has an img with url and alt from props', () => {
        const img = wrapper.find('img');

        expect(img.props().src).toBe(url);
        expect(img.props().alt).toBe(title);
    })

    test('should has className animate_fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.props().className;
        expect(className.includes('animate__fadeIn')).toBeTruthy();
    })

})