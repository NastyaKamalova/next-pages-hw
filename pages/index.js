import Link from "next/link";
import styled from "styled-components";

const getStaticProps = async() => {
  return { props: { 
      pageTitle: "Homepage"
  }}
}
export { getStaticProps }

export default function Home() {
  return (
    <>
      <div>
        <StyledTitle>Это Next App приложение, использующее jsonplaceholder данные</StyledTitle>
        <StyledText>Вы можете перемещаться по ней подставляя в url следующие адреса:</StyledText>
      </div>
      <div>
          <StyledElem>
            <StyledLink>
              <Link href="/users">/users</Link>
            </StyledLink>
            <StyledText>страница пользователей</StyledText>
          </StyledElem>
          <StyledElem>
            <StyledLink>
              <Link href="/users/9">/users/9</Link>
            </StyledLink>
            <StyledText>страница конкретного пользователя</StyledText>
          </StyledElem>
          <StyledElem>
            <StyledLink>
              <Link href="/posts">/posts</Link>
            </StyledLink>
            <StyledText>страница постов</StyledText>
          </StyledElem>
          <StyledElem>
            <StyledLink>
              <Link href="/posts/4">/posts/4</Link>
            </StyledLink>
            <StyledText>страница конкретного поста</StyledText>
          </StyledElem>
          <StyledElem>
            <StyledLink>
              <Link href="/users/4/posts">/users/4/posts</Link>
            </StyledLink>
            <StyledText>страница постов конкретного пользователя</StyledText>
          </StyledElem>
          <StyledElem>
            <StyledLink>
              <Link href="/users/4/albums" >/users/4/albums</Link>
            </StyledLink>
            <StyledText>страница альбомов конкретного пользователя</StyledText>
          </StyledElem>
      </div>
      </>
  );
}


const StyledElem = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  display: grid;
  grid-template-columns: repeat(3,minmax(0,1fr));
  border-top: 1px solid #e5e7eb;
`
const StyledLink = styled.div`
  color: rgb(17 24 39);
  font-weight: 500;
  line-height: 1.5rem;
  font-size: .875rem;
  text-decoration-line: underline;
`
const StyledText = styled.div`
  color: rgb(55 65 81);
  line-height: 1.5rem;
  font-size: .875rem;
`
const StyledTitle = styled.h1`
    font-weight: 600;
    line-height: 1.75rem;
    font-size: 1rem;
    
`
const StyledTextHeader = styled.p`
    font-weight: 600;
    line-height: 1.75rem;
    font-size:.875rem;
    color:  rgb(107 114 128);
    margin-top: 4px;
`