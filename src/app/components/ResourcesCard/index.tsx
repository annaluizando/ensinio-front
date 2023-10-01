import { Text } from "../Elements/text";
import { RTextContainer, ResourcesContainer, ResourcesIcon } from "./styles";
import { useTranslation } from "next-i18next";

export default function ResourcesCard({ data, $url }: ResourcesCardProps) {
    const { title, description } = data;
    const { i18n } = useTranslation('common')

    return (
        <ResourcesContainer>
            <ResourcesIcon $url={$url} />
            <RTextContainer>
                <Text color="black" $size="medium" $weight="semibold" $family="secondary">{title[i18n.language]}</Text>
                <Text color="black" $size="small" $weight="regular" $family="primary">{description[i18n.language]}</Text>
            </RTextContainer>
        </ResourcesContainer>
    );
}
