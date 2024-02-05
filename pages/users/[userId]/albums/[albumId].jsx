import {getAlbum, getAllAlbums} from "@/actions/albums"
import { getUser } from "@/actions/users";
import Photo from "@/components/Photo";
import styled from "styled-components";

const getStaticPaths = async() => {
    const album = await getAllAlbums()
    const albumPaths = album.map(album => {
        return {
          params: { 
            userId: String(album.userId),
            albumId: String(album.id)
          }
        } 
      });
      return { paths: albumPaths, fallback: false }
}

const getStaticProps = async({params}) => {
    const photos = await getAlbum(params.albumId)
    const user = await getUser(params.userId);
    return { props: { 
        photos, 
        user, 
        albumId: params.albumId,
        pageTitle: "Album - " + params.albumId + user.name}}
}

export { getStaticPaths, getStaticProps }

const UserAlbum = ({photos, user, albumId}) => {
    return (
        <>
        <StyledAlbum>
            <div>
                <StyledTitle> User - {user.name}, Album № {albumId}</StyledTitle>
            </div>
        </StyledAlbum>

        <StyledPhotosWrapper>
            {
                photos.map(photo => {
                    return <Photo key={photo.id} url={photo.url} title={photo.title}/>
                })
            }
        </StyledPhotosWrapper>
       
        </>
    )
}
export default UserAlbum

const StyledAlbum = styled.div`
    display: flex;
    padding: 5px 25px; 
`
const StyledTitle = styled.h2`
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.75rem;
`
const StyledPhotosWrapper = styled.div`
    display: flex;
    margin-bottom: 5px;
    flex-wrap: wrap;
`
