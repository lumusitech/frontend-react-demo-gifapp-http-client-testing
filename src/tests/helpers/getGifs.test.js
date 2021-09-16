import { getGifs } from "../../helpers/getGifs"

describe('Testing on helper getGifs.js with Fetch', () => {
    test('should return 5 elements (limit)', async () => {
        const gifs = await getGifs('Goku');
        expect(gifs.length).toBe(5);
    })

    test('should return empty array with the argument empty stringw', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })
    
})
