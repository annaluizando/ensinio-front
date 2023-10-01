import styled from "styled-components";

const IntroContainer = styled.div`
    width: 659px;
    height: 533px;
    display: flex;
    position: absolute;
    bottom: 0;
    right: 0;

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

export {
    IntroContainer,
    IntroMainImage,
    IntroShape
}