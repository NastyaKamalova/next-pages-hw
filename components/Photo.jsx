import Image from "next/image"
import styled from "styled-components"

const Photo = ({url, title}) => {
    return(
        <div>
            <StyledImg src={url} alt={title} width={300} height={300}/>
            <StyledText>Photo - {title}</StyledText>
        </div>
    )
}
export default Photo

const StyledImg = styled(Image)`
    margin-top: 1rem;
    border-radius: 0.5rem;
    margin-right: 1rem;
`
const StyledText = styled.div`
    color: rgb(156 163 175);
    font-size: .875rem;
    line-height: 1.25rem;
    text-align: center;
    margin-top: 0.5rem;
    max-width: 20rem;
`