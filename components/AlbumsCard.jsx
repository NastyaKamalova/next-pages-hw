import Link from "next/link"
import styled from "styled-components"

const AlbumsCard = ({album}) => {
    return(
        <StyledAlbums>
            <div>
                <StyledTitle>{album.autor}</StyledTitle>
            </div>
        <Link href={`/users/${album.userId}/albums/${album.id}`}>{album.title}</Link>
        </StyledAlbums>
    )
}
export default AlbumsCard

const StyledAlbums = styled.div`
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
