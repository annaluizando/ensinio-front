import { ColorTheme, FontFamily, FontSize, FontWeight, TextCase, TextSpacing } from "@/app/styles";
import styled from "styled-components";

interface TextProps {
  $size?: FontSize;
  color?: ColorTheme | string;
  $weight?: FontWeight | string;
  $family?: FontFamily;
  $case?: TextCase;
  $spacing?: TextSpacing;
}

export const Text = styled.p<TextProps>`
  ${({ theme, $size, color, $weight, $family, $case, $spacing }) => `
    color: ${color ? theme.colors[color] : 'inherit'};
    font-size: ${$size ? theme.font.sizes[$size] : 'inherit'};
    font-weight: ${$weight ? theme.font.weights[$weight] : 'inherit'};
    font-family: ${$family ? theme.font.familys[$family] : 'inherit'};
    text-transform: ${$case ? theme.font.cases[$case].textTransform : 'none'};
    letter-spacing: ${$spacing ? theme.font.spacings[$spacing] : 'normal'};
  `}
`;
