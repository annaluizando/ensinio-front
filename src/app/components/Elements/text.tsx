import { TextProps } from "@/app/types/elements/TextProps";
import styled from "styled-components";

export const Text = styled.p<TextProps>`
  ${({ theme, $size, color, $weight, $family, $case, $spacing, $padding }) => `
    color: ${color ? theme.colors[color] : 'inherit'};
    font-size: ${$size ? theme.font.sizes[$size] : 'inherit'};
    font-weight: ${$weight ? theme.font.weights[$weight] : 'inherit'};
    font-family: ${$family ? theme.font.familys[$family] : 'inherit'};
    text-transform: ${$case ? theme.font.cases[$case].textTransform : 'none'};
    letter-spacing: ${$spacing ? theme.font.spacings[$spacing] : 'normal'};
    padding: ${$padding || 'none'}
  `}
`;
