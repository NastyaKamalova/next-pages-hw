import Link from "next/link"
import styled from "styled-components"

const UserPosts = ({post}) => {
    return(
        <StyledPost>
            <div>
                <StyledTitle>{post.autor}</StyledTitle>
            </div>
            <StyledSubtitle>{post.title}</StyledSubtitle>
            <StyledText>{post.body}</StyledText>
            <Link href={`/posts/${post.id}`}>{`/posts/${post.id}`}</Link>
        </StyledPost>
    )
}
export default UserPosts

const StyledPost = styled.div`
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    align-items: flex-start;
    border-bottom: 1px solid #e5e7eb;
    flex-direction: column;
`
const StyledTitle = styled.h1`
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: rgb(17 24 39);
`
const StyledSubtitle = styled.p`
    color: rgb(55 65 81);
    font-size: 1.125rem;
    line-height: 1.75rem;
`
const StyledText = styled.p`
    color: rgb(55 65 81);
    font-size: .875rem;
    line-height: 1.25rem;
    margin-top: 0.75rem;
`
