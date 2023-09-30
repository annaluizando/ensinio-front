import { IconProps } from "@/app/types/elements/IconProps";
import styled, { keyframes } from "styled-components";

const SolutionsCardContainer = styled.div`
    display : flex;
    width: 235px;
    height: 40px;
    justify-content: space-around;

`;

const SolutionsIcon = styled.div<IconProps>`
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