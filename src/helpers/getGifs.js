export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=c4lPGenZ4LZd1TWcin6zY2djI1gQD7aL&q=${category}&limit=10`
    //Peticion http:
    const resp = await fetch(url)
    const { data } = await resp.json()

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs
}