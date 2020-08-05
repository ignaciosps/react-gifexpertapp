export const getGifs = async( category ) => {
    const apiKey = 'OkHZanpqvvjvwEAYOMhHR4cllZwrmTco';
    const search = encodeURI(category);
    const limit = 10;
    const url = `https://api.giphy.com/v1/gifs/search?q=${ search }&limit=${ limit }&api_key=${ apiKey }`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });
    return gifs;    
}