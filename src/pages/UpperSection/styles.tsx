import styled from "styled-components";

const SectionContainer = styled.div`
    width: 100%;
    height: 700px;
    background-image: ${props => props.theme.colors.gradient};
    position: relative;
`;

const IntroContainer = styled.div`
    width: 87.50%;
    height: 100%;
    display: grid;
    justify-content: start;
    align-items: center;
    padding-top: 6.281rem;
    padding-bottom: 6.281rem;
    padding-left: 7rem;
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
    width: 450px;
    height: 212px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export {
    SectionContainer,
    IntroContainer,
    DevicesContainer,
    ButtonsContainer,
    TextContainer,
}

