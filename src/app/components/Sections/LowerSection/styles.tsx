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
        height: 100%;
        justify-content: space-around;
        padding-top: 6.688rem;
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
        height: auto;
        gap: 5rem;
    }
    
`;

// div that contains the last row of Lower Section, row 4
const FooterContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 2.25rem;
    gap: 1.5rem;

    @media (max-width: 732px) {
        justify-content: flex-end;
    }

    /* @media (min-width: 322px) and (max-width: 770px) {
      flex-direction: column;
      height: 120px;
      align-items: flex-start;
    } */

    @media (max-width: 322px) {
      flex-direction: column;
      height: 100%;
      align-items: flex-start;
    }
`;

// div that contains rocket icon and it's side text
const RocketContainer = styled.div`
    width: auto;
    height: auto;
    gap: 2rem;
    display: flex;
    align-items: center;
/*     
    @media (max-width: 580px) {
        width: 90%;
    } */
`;


// div that contains "see more" text and arrow
const SeeMoreContainer = styled.button`
    width: auto;
    height: auto;
    display: flex;
    gap: 2rem;
    align-items: center;
    cursor: pointer;
    border: none;
    background-color: transparent;
    
`;

// div that contains decoration line and "details" text
const DetailsContainer = styled.div`
    width: auto;
    height: auto;
    display: flex;
    gap: 1rem;
    align-items: center;
    @media (max-width: 390px) {
        width: 100%;
    }
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
    gap: 1rem;

    @media (max-width: 1120px) {
      height: auto;
    }

    @media (max-width: 335px) {
        height: auto;
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