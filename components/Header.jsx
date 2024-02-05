import Image from "next/image";
import logo from "../public/logo.png"
import styled from "styled-components";
import Link from "next/link";

const Header = () => {
    return(
        <>
            <StyledDiv>
                <StyledLogo src={logo} alt="logo"/>
                <StyledLink>
                    <Link href="/">to homepage</Link>
                </StyledLink>
            </StyledDiv>
        </>
    )
}
export default Header;

const StyledLogo = styled(Image)`
    width: 200px;
    height: 100px;
`
const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
`
const StyledLink = styled.div`
    color: rgb(107 114 128);
    text-decoration-line: underline;
    line-height: 1.75rem;
    font-weight: 600;
`