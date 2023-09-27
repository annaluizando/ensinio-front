import styled from "styled-components";

const SectionContainer = styled.div`
    width: 100vw;
    height: 700px;
    background-image: ${props => props.theme.colors.gradient};

    @media (max-width: 330px) {
        height: 56.75rem;
    }
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
    }
`;

const DevicesContainer = styled.div`
    width: 16rem;
    height: 24px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 345px){
        width: 100%;
    }
`;

const ButtonsContainer = styled.div`
    width: 21.125rem;
    height: 56px;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 545px){
        width: 100%;
        padding-left: 0;
        justify-content: center;
    }
`;

const TextContainer = styled.div`
    width: 27.125rem;
    height: 13.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 470px) {
        width: 95%;
        height: 70%;
    }
`;

const DesignIconsContainer = styled.div`
    width: 96.90%;
    display: flex;
    justify-content: space-between;
    position: absolute;
`;

const USContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 38.188rem;
    height: 23.75rem;
    padding-left: 7rem;
    justify-content: space-between;

    @media (min-width: 302px) and (max-width: 525px) {
        padding-left: 1.5rem;
        height: 32rem;
        width: 100%;
    }

    @media (min-width: 525px) and (max-width: 611px) {
        padding-left: 3rem;
        height: 31rem;
        width: 100%;
    }

    @media (max-width: 302px) {
        padding-left: 0.8rem;
        height: 40rem;
        width: 100%;
    }


`;

export {
    SectionContainer,
    IntroContainer,
    DevicesContainer,
    ButtonsContainer,
    TextContainer,
    DesignIconsContainer,
    USContentContainer,
}

