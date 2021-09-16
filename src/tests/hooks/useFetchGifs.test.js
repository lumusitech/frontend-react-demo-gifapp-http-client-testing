import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks'

describe('Testing on hook useFetchGifs', () => {

    test('should return initial state',  async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
        const { data, loading } = result.current;

        await waitForNextUpdate();
        
        expect(data).toEqual([]);
        expect(loading).toBeTruthy();
    });
    
    test('should returns an images list and loading with false', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));

        await waitForNextUpdate();
        
        const { data, loading } = result.current;

        expect(data.length).toBe(5);
        expect(loading).toBeFalsy();
    })



})
