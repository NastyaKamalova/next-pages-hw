import Link from "next/link"
import styled from "styled-components"

const UserCard = ({user}) => {
    return(
        <StyledElem>
            <div>
                <StyledName>{user.name}</StyledName>
                <StyledText>{user.company.name}</StyledText>
                <StyledName>
                    <Link href={`/users/${user.id}`}>{`/users/${user.id}`}</Link>
                </StyledName>
            </div>
            <StyledDataWrapper>
                <StyledText>{user.email}</StyledText>
                <StyledUserWebsite>{user.website}</StyledUserWebsite>
                <StyledText>{user.phone}</StyledText>
            </StyledDataWrapper>
        </StyledElem>
    )
}
export default UserCard

const StyledElem = styled.div`
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    display: flex;
    justify-content: space-between;
    column-gap: 1.5rem;
`
const StyledName = styled.p`
    line-height: 1.5rem;
    font-size: .875rem;
    font-weight: 600;
    color: rgb(17 24 39);
    margin: 0;
`
const StyledText = styled.div`
    line-height: 1.25rem;
    color: rgb(107 114 128);
    font-size: .75rem;
    margin-top: 0.25rem;
`
const StyledUserWebsite = styled.p`
    line-height: 1.5rem;
    font-size: .875rem;
    color: rgb(17 24 39);
    margin: 0;
`
const StyledDataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`