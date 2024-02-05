import { getUsersAlbums } from "@/actions/albums";
import { getAllUsers, getUser } from "@/actions/users";
import AlbumsCard from "@/components/AlbumsCard";


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
    const userAlbums = await getUsersAlbums(params.userId);
    const albumsWithUsersName = userAlbums.map(album => {
        album.autor = user.name;
        return album;
    })
    return { props: {
        albums: albumsWithUsersName,
        pageTitle: "UserAlbums - " + user.name
    } }
}
export { getStaticProps, getStaticPaths }

const Albums = ({ albums }) => {
    return (
        <div>
            {
                albums.map(album => (
                    <AlbumsCard key={album.id} album={album}/>
                ))
            }
        </div>
    )
}
export default Albums;

