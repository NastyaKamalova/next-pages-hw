import { getAllUsers, getUser } from "@/actions/users";
import UserCard from "@/components/UserCard";

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
    return { props: { user,
        pageTitle: "User - " + user.name} }
}

export { getStaticProps, getStaticPaths }

const User = ({user}) => {
    return <UserCard user={user} />
}
export default User

