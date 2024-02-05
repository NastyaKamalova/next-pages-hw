import { getAllPosts, getPost } from "@/actions/posts";
import { getUser } from "@/actions/users";
import UserPosts from "@/components/UserPosts";

const getStaticPaths = async() => {
    const posts = await getAllPosts();
    const postsPaths = posts.map(post => (
        {
            params: {
              postId: String(post.id),
            },
        }
    ))
    return { paths: postsPaths, fallback: false }
}

const getStaticProps = async({ params }) => {
    const post = await getPost(params.postId);
    const user = await getUser(post.userId);
    post.autor = user.name;
    return { props: { post,
        pageTitle: "Post - " + post.id + user.name}}

}

export { getStaticProps, getStaticPaths }

const Post = ({post}) => {
    return <UserPosts post={post} />
}
export default Post