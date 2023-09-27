import { Text } from "../Elements/text";
import { STextContainer, SolutionsContainer, SolutionsIcon } from "./styles";

interface SolutionsCardProps {
    title: string;
    description: string;
    $url: string;
}

export default function SolutionsCard({ title, description, $url }: SolutionsCardProps) {
    return (
        <SolutionsContainer>
            <SolutionsIcon $url={$url} />
            <STextContainer>
                <Text color="black" $size="x_small" $weight="semibold" $family="secondary">{title}</Text>
                <Text color="black" $size="xxx_small" $weight="regular" $family="primary">{description}</Text>
            </STextContainer>
        </SolutionsContainer>
    );
}
