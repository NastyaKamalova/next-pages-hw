import { getUserPosts } from "@/actions/posts";
import { getAllUsers, getUser } from "@/actions/users";

import UserPosts from "@/components/UserPosts";


const getStaticPaths = async() => {
    const users = await getAllUsers();
    const usersPaths = users.map(user => (
        {
            params: {
              userId: String(user.id),
            },
        }
    ))
    return { paths: usersPaths, fallback: false }
}

const getStaticProps = async({ params }) => {
    const user = await getUser(params.userId);
    const userPosts = await getUserPosts(params.userId);
    const postsWithUsersName = userPosts.map(post => {
        post.autor = user.name;
        return post;
    })
    return { props: {
        posts: postsWithUsersName,
        pageTitle: "UserPosts - " + user.name
    } }
}
export { getStaticProps, getStaticPaths }

const Posts = ({ posts }) => {
    return (
        <div>
            {
                posts.map(post => (
                    <UserPosts key={post.id} post={post}/>
                ))
            }
        </div>
    )
}
export default Posts;