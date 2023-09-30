import { SolutionsCardProps } from "@/app/types/elements/SolutionsCardProps";
import { Text } from "../Elements/text";
import { STextContainer, SolutionsCardContainer, SolutionsIcon } from "./styles";

export default function SolutionsCard({ title, description, $url }: SolutionsCardProps) {
    return (
        <SolutionsCardContainer>
            <SolutionsIcon $url={$url} />
            <STextContainer>
                <Text color="black" $size="x_small" $weight="semibold" $family="secondary">{title}</Text>
                <Text color="black" $size="xxx_small" $weight="regular" $family="primary">{description}</Text>
            </STextContainer>
        </SolutionsCardContainer>
    );
}
