import styled from "styled-components";

interface SolutionsIconProps {
    $url: string;
}

const SolutionsCardContainer = styled.div`
    display : flex;
    width: 235px;
    height: 40px;
    justify-content: space-around;
`;

const SolutionsIcon = styled.div<SolutionsIconProps>`
    height: 40px;
    width: 40px;
    background-image: url(${props => props.$url});
`;

const STextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export {
    SolutionsCardContainer,
    SolutionsIcon,
    STextContainer,
}