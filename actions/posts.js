const getAllPosts = async() => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await posts.json();
}

const getPost = async(postId) => {
    const post = await fetch('https://jsonplaceholder.typicode.com/posts/' + postId);
    return await post.json();
}


const getUserPosts = async(userId) => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/user/' + userId + '/posts');
    return await posts.json();
}

export { getAllPosts, getPost, getUserPosts }