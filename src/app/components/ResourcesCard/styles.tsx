import styled from "styled-components";

interface ResourcesIconProps {
    $url: string;
}

const ResourcesContainer = styled.div`
    height: 173px;
    width: 304px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  @media (max-width: 370px) {
        width: 100%;
    }
`;

const ResourcesIcon = styled.div<ResourcesIconProps>`
    width: 40px;
    height: 40px;
    background-image: url(${props => props.$url});

    @media (max-width: 370px){
        height: 50px;

    }
`;

const RTextContainer = styled.div`
    width: 304px;
    height: 109px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
      @media (max-width: 370px) {
        height: 100%;
        width: 80%;
    }
`;

export {
    ResourcesContainer,
    ResourcesIcon,
    RTextContainer,
}