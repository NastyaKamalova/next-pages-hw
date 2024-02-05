import Header from "@/components/Header";
import styled from "styled-components";

export default function Layout({children}) {
  return (
    <StyledMain>
        <Header />
        {children}
    </StyledMain>
  );
}

const StyledMain = styled.main`
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  width: 970px;
  max-width: 100%;
  margin: auto;
`