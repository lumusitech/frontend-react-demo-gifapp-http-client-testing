import React from 'react'
import { shallow } from 'enzyme'
import '@testing-library/jest-dom'
import GifGrid from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs')

describe('Testing on GifGrid.js', () => {

    const category = 'Hola'

    test('should match with snapshot along time', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    })

    test('should shows items when images already loading', () => {
        const gifs = [
            {
                id: 1,
                title: 'Cualquier cosa',
                url: 'https://localhost/cualquier/cosa.jpg'
            },
            {
                id: 2,
                title: 'otra cosa',
                url: 'https://localhost/otra/cosa.jpg'
            }
        ];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBeFalsy();
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
})