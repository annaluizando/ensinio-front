import styled from "styled-components";

const SectionContainer = styled.div`
    width: 100vw;
    height: 700px;
    background-image: ${props => props.theme.colors.gradient};
    position: relative;
`;

const IntroContainer = styled.div`
    width: 87.50%;
    height: 100%;
    display: grid;
    justify-items: start;
    align-items: center;
    align-content: space-evenly;
    margin: 0;
    position: relative;
    @media (max-width: 1135px) {
      padding-right: 0;
    }
`;

const DevicesContainer = styled.div`
    width: 256px;
    height: 24px;
    display: flex;
    justify-content: space-between;
`;

const ButtonsContainer = styled.div`
    width: 338px;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TextContainer = styled.div`
    width: 28.125rem;
    height: 212px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const DesignIconsContainer = styled.div`
    width: 96.90%;
    display: flex;
    justify-content: space-between;
    position: absolute;
`;

export {
    SectionContainer,
    IntroContainer,
    DevicesContainer,
    ButtonsContainer,
    TextContainer,
    DesignIconsContainer,
}

