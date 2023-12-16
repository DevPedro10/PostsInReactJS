export const loadPosts = async () => {
    const requestPosts = fetch("https://jsonplaceholder.typicode.com/posts");
    const requestPhotos = fetch("https://jsonplaceholder.typicode.com/photos");

    const [posts, photos] = await Promise.all([requestPosts, requestPhotos]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((post, index) => {
        return {
            ...post,
            cover: photosJson[index].url,
        }
    })

    return postsAndPhotos;
};