import styled from "styled-components";
import { ButtonProps } from "@/app/types/elements/ButtonProps";


export const FullBtn = styled.button<ButtonProps>`
    height: 56px;
    width: 184px;
    border-radius: 80px;
    font-size: ${props => props.theme.font.sizes.small};
    font-weight: ${props => props.theme.font.weights.semibold};
    background-color: ${props => props.theme.colors.teal_pure};
    color: ${props => props.theme.colors.black};
    border: none;
    cursor: pointer;

    &:hover {
        transition: all .4s ease-in-out;
        background-color: ${props => props.theme.colors.white};
    }
`;