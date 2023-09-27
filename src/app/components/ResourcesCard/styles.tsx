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
    height: 40px;
    width: 40px;
    background-image: url(${props => props.$url});
`;

const RTextContainer = styled.div`
    width: 304px;
    height: 109px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
      @media (max-width: 370px) {
        width: 80%;
    }
`;

export {
    ResourcesContainer,
    ResourcesIcon,
    RTextContainer,
}