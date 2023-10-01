import { ColorTheme, FontFamily, FontSize, FontWeight, TextCase, TextSpacing } from "@/app/styles";

export interface TextProps {
  $size?: FontSize;
  color?: ColorTheme | string;
  $weight?: FontWeight | string;
  $family?: FontFamily;
  $case?: TextCase;
  $spacing?: TextSpacing;
  $padding?: string;
}