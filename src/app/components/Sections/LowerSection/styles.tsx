import styled from "styled-components";

const LowerSectionContainer = styled.div`
    width: 100vw;
    height: 665px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 1135px) {
      height: 1250px;
    }
`;

const LSContentContainer = styled.div`
    width: 87.50%;
    height: 436px;

    @media (max-width: 1135px) {
        display: flex;
        flex-direction: column;
        height: 87.50%;
        justify-content: space-around;
    }
`;

// div that contains the group of ResourcesCards
const ResourcesGroupContainer = styled.div`
    width: 100%;
    height: 173px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 4.188rem;
    margin-top: 4.188rem;
    @media (max-width: 1135px) {
      flex-direction: column;
      height: 570px;
    }
`;

// div that contains the last row of Lower Section, row 4
const FooterContainer = styled.div`
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2.25rem;

    @media (max-width: 770px) {
      flex-direction: column;
      height: 120px;
      align-items: flex-start;
    }
`;

// div that contains rocket icon and it's side text
const RocketContainer = styled.div`
    width: 493px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`;

const SeeMoreContainer = styled.div`
    width: 131px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`;

// div that contains decoration line and "Pensamos em cada detalhe" text.
const DetailsContainer = styled.div`
    width: 359.28px;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LongLine = styled.hr`
    width: 100%;
    height: 2px;
    background-color: ${props => props.theme.colors.light_gray};
    border: none;
`;

// div that contains row 1 of 4 rows that exists in Lower Section.
const UpperContainer = styled.div`
    width: 100%;
    height: 83px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 1120px) {
      height: 170px;
    }

`;

// div that contains row 1 of 2 rows that exists in first row of Lower Section.
const DetailsnResourcesContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    @media (max-width: 830px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }
`;

export {
    LowerSectionContainer,
    DetailsnResourcesContainer,
    ResourcesGroupContainer,
    FooterContainer,
    RocketContainer,
    SeeMoreContainer,
    DetailsContainer,
    LongLine,
    UpperContainer,
    LSContentContainer,
}