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
    right: 0;
    @media (min-width: 1135px) and (max-width: 1250px) {
    }

    @media (max-width: 1135px) {
      display: none;
    }

`;

const IntroMainImage = styled.div`
    width: 529px;
    height: 533px;
    position: absolute;
    z-index: 1;
    bottom: 0;
    right: 0;
`;

const IntroShape = styled.div`
    width: 560px;
    height: 507px;
    position: absolute;
    bottom: 0;
    right: 0;
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