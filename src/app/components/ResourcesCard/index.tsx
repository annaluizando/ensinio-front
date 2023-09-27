import { ResourceData } from "@/app/types/elements/ResourcesCard";
import { Text } from "../Elements/text";
import { RTextContainer, ResourcesContainer, ResourcesIcon } from "./styles";

interface ResourcesCardProps {
    data: ResourceData;
    $url: string;
}

export default function ResourcesCard({ data, $url }: ResourcesCardProps) {
    const { title, description } = data;

    return (
        <ResourcesContainer>
            <ResourcesIcon $url={$url} />
            <RTextContainer>
                <Text color="black" $size="medium" $weight="semibold" $family="secondary">{title}</Text>
                <Text color="black" $size="small" $weight="regular" $family="primary">{description}</Text>
            </RTextContainer>
        </ResourcesContainer>
    );
}
