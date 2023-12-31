import Image from "next/image";
import RocketIcon from "@/public/assets/icons/rocket.svg";
import ArrowIcon from "@/public/assets/shapes/arrow.svg";
import LinePurple from "@/public/assets/shapes/line_purple.svg";

import { DetailsContainer, DetailsnResourcesContainer, FooterContainer, LSContentContainer, LongLine, LowerSectionContainer, ResourcesGroupContainer, RocketContainer, SeeMoreContainer, UpperContainer } from "./styles";
import ResourcesCard from "@/components/ResourcesCard";
import { Text } from "@/components/Elements/text";

import { useEffect, useState } from 'react';
import { getCard } from "@/app/types/api/api";
import { useTranslation } from "next-i18next";


export default function LowerSection() {
    const [resourcesData, setResourcesData] = useState<ResourceData[]>([]);
    const { t } = useTranslation('common')


    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getCard();
                setResourcesData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <LowerSectionContainer>
            <LSContentContainer>
                <UpperContainer>
                    <DetailsnResourcesContainer>
                        <DetailsContainer>
                            <Image src={LinePurple} width={40} height={1} alt="line" />
                            <Text $case="upper" $spacing="wider" $size="small" $weight="semibold" color="purple_dark">{t('lower_section.details')}</Text>
                        </DetailsContainer>
                        <Text>{t('lower_section.resources')}</Text>
                    </DetailsnResourcesContainer>

                    <Text $size="large" $weight="medium" $family="secondary" color="black">{t('lower_section.ideal')}</Text>
                </UpperContainer>

                <ResourcesGroupContainer>
                    {resourcesData.map((resource) => (
                        <ResourcesCard key={resource.id} data={resource} $url={`./assets/icons/${resource.id}.svg`} />
                    ))}
                </ResourcesGroupContainer>

                <LongLine />

                <FooterContainer>
                    <RocketContainer>
                        <Image src={RocketIcon} height={32} width={32} alt="rocket" />
                        <Text $size="small" $weight="medium" color="gray">{t('lower_section.rocket')}</Text>
                    </RocketContainer>

                    <SeeMoreContainer>
                        <Text $size="small" $weight="semibold" color="purple_pure">{t('lower_section.seemore')}</Text>
                        <Image className="bounce" src={ArrowIcon} width={24} height={32} alt="see-more"></Image>
                    </SeeMoreContainer>
                </FooterContainer>
            </LSContentContainer>

        </LowerSectionContainer>
    )
}