import styled from "styled-components";

interface ResourcesIconProps {
    $url: string;
}

const ResourcesContainer = styled.div`
    height: 173px;
    width: 304px;
`;

const ResourcesIcon = styled.div<ResourcesIconProps>`
    height: 40px;
    width: 40px;
    background-image: url(${props => props.$url});
`;

export {
    ResourcesContainer,
    ResourcesIcon,
}