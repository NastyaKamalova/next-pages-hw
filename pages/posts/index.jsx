import { getAllPosts } from "@/actions/posts";
import { getAllUsers } from "@/actions/users";
import UserPosts from "@/components/UserPosts";

const getStaticProps = async() => {
    const posts = await getAllPosts();
    const users = await getAllUsers();
    const postsWithUsersName = posts.map(post => {
        const user = users.find(u => u.id === post.userId)
        post.autor = user.name;
        return post;
    })
    return { props: { 
        posts: postsWithUsersName,
        pageTitle: "Posts"
    } }
}
export { getStaticProps }

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