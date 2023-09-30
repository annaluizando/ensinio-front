import styled from "styled-components";

const SectionContainer = styled.div`
    width: 100vw;
    height: 700px;
    background-image: ${props => props.theme.colors.gradient};

    @media (max-width: 415px) {
        height: 60rem;
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
    @media (max-width: 400px) {
        height: 80%;
        width: 95%;
    }
`;

const DevicesContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;

    @media (max-width: 305px){
        padding-top: 6.813rem;
    }
`;

const ButtonsContainer = styled.div`
    width: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;
    align-items: center;

    @media (max-width: 545px){
        width: 100%;
        padding-left: 0;
        justify-content: center;
    }
`;


// text div that contains UpperSection's introduction about ensinio.
const TextContainer = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 2.75rem;
    margin-bottom: 3rem;
    margin-top: 2.75rem;

    /* @media (max-width: 470px) {
        width: 95%;
        height: 70%;
    } */
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
    height: auto;
    padding-left: 7rem;
    padding-right: 4rem;
    padding-top: 6.813rem;

    @media (min-width: 414px) and (max-width: 525px) {
        padding-left: 1.5rem;
        padding-right: 0;
        width: 100%;
    }

    @media (min-width: 525px) and (max-width: 611px) {
        padding-left: 3rem;
        padding-right: 0;
        width: 100%;
    }

    @media (min-width: 322px) and (max-width: 414px) {
        gap: 3rem;
        padding-right: 0;
        padding-left: 0.8rem;
        padding-top: 15rem;
        width: 100%;
        padding-bottom: 7.625rem;
    }

    @media (max-width: 322px) {
        gap: 3rem;
        padding-right: 0;
        padding-left: 0.8rem;
        padding-top: 20rem;
        width: 100%;
        padding-bottom: 7.625rem;
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

