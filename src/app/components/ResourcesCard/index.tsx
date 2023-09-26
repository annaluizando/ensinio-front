import { Text } from "../Elements/text";
import { ResourcesContainer, ResourcesIcon } from "./styles";

interface ResourcesCardProps {
    title: string;
    description: string;
    $url: string;
}

export default function ResourcesCard({ title, description, $url }: ResourcesCardProps) {
    return (
        <ResourcesContainer>
            <ResourcesIcon $url={$url} />
            <Text color="black" $size="medium" $weight="semibold" $family="secondary">{title}</Text>
            <Text color="black" $size="small" $weight="regular" $family="primary">{description}</Text>
        </ResourcesContainer>
    );
}
