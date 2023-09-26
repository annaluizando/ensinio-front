import styled from "styled-components";
import introImage from "../../../../../public/stockphoto.svg";
import introShape from "../../../../../public/assets/shapes/elipse.svg";
import Image from "next/image";

const IntroContainer = styled.div`
    width: 659px;
    height: 533px;
    display: flex;
    position: absolute;
    bottom: 0;
    right: 7rem;
`;

const IntroMainImage = styled.div`
    width: 529px;
    height: 533px;
    position: absolute;
    z-index: 9;
    bottom: 0;
`;

const IntroShape = styled.div`
    width: 560px;
    height: 484px;
    position: absolute;
    bottom: 0;
`;

export default function IntroImage() {
    return (
        <IntroContainer>
            <IntroMainImage>
                <Image src={introImage} width={529} height={533} alt="main-image" />
            </IntroMainImage>

            <IntroShape>
                <Image src={introShape} width={659} height={533} alt="shape" />
            </IntroShape>
        </IntroContainer>
    )
}