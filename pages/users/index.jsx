import { getAllUsers } from "@/actions/users";
import UserCard from "@/components/UserCard";
import styled from "styled-components";

const getStaticProps = async() => {
    const users = await getAllUsers();
    return { props: { users,
        pageTitle: "Users" } }
}

export { getStaticProps }

const Users = ({ users }) => {

    return(
        <StyledContainer>
            {
                users.map(user => (
                    <UserCard key={user.id} user={user} />
                ))
            }
        </StyledContainer>
    )
}
export default Users;

const StyledContainer = styled.div`
    padding: 0 15px;
`
