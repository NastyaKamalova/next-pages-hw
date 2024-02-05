const getUsersAlbums = async(userId) => {
    const albums = await fetch('https://jsonplaceholder.typicode.com/user/' + userId + '/albums');
    return await albums.json();
}

const getAllAlbums = async() => {
    const albums = await fetch('https://jsonplaceholder.typicode.com/albums');
    return await albums.json();
}

const getAlbum = async(albumId) => {
    const album = await fetch('https://jsonplaceholder.typicode.com/albums/' + albumId + '/photos');
    return await album.json();
}

export {getUsersAlbums, getAllAlbums, getAlbum}