import styled from "styled-components";

const LowerSectionContainer = styled.div`
    width: 100vw;
    height: 661px;
    display: grid;
    justify-content: center;
    align-content: space-evenly;
`;

const UpperContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ResourcesGroupContainer = styled.div`
    width: 100%;
    height: 173px;
    display: flex;
`;

const FooterContainer = styled.div`
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

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

export {
    LowerSectionContainer,
    UpperContainer,
    ResourcesGroupContainer,
    FooterContainer,
    RocketContainer,
    SeeMoreContainer,
}