
export const getGifs = async (category) => {
    const url_base = 'https://api.giphy.com/v1/gifs/search';
    const limit = 5;
    const buscar = encodeURI(category);
    const api_key = 'jdvZMbDstUoUU74RPdsakdWajFgXfFIh';
    const url = `${url_base}?q=${buscar}&limit=${limit}&api_key=${api_key}`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs
};