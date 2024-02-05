const getAllUsers = async() => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users');
    return await users.json();
}

const getUser = async(userId) => {
    const user = await fetch('https://jsonplaceholder.typicode.com/users/' + userId);
    return await user.json();
}


export { getAllUsers, getUser }