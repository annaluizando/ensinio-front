import styled from "styled-components";
import { ButtonProps } from "@/app/types/elements/ButtonProps";

export const EmptyBtn = styled.button<ButtonProps>`
    height: 40px;
    width: 160px;
    border-radius: 80px;
    font-size: ${props => props.theme.font.sizes.small};
    font-weight: ${props => props.theme.font.weights.semibold};
    background-color: transparent;
    color: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.white};
    cursor: pointer;

    &:hover {
        transition: all .4s ease-in-out;
        background-color: ${props => props.theme.colors.white};
        color: ${props => props.theme.colors.black};
    }
`;