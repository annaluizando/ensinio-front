import styled from "styled-components";

const SolutionsCardContainer = styled.a`
    display : flex;
    width: 235px;
    height: 40px;
    justify-content: space-around;
    cursor: pointer;
    &:hover,
    &:focus {
        box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
        transform: translateY(-0.25em);
    }
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