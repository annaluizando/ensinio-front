import ResourcesCard from "@/app/components/ResourcesCard";
import { DetailsContainer, DetailsnResourcesContainer, FooterContainer, LSContentContainer, LongLine, LowerSectionContainer, ResourcesGroupContainer, RocketContainer, SeeMoreContainer, UpperContainer } from "./styles";
import { Text } from "@/app/components/Elements/text";
import Image from "next/image";
import rocket from "../../../../../public/assets/icons/rocket.svg";
import arrow from "../../../../../public/assets/shapes/arrow.svg";
import line_purple from "../../../../../public/assets/shapes/line_purple.svg";
import { useEffect, useState } from 'react';
import { getCard } from "@/app/types/api/api";
import { ResourceData } from "@/app/types/elements/ResourcesCard";

export default function LowerSection() {
    const [resourcesData, setResourcesData] = useState<ResourceData[]>([]);

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
                            <Image src={line_purple} width={40} height={1} alt="line" />
                            <Text $case="upper" $spacing="wider" $size="small" $weight="semibold" color="purple_dark">Pensamos em cada detalhe</Text>
                        </DetailsContainer>
                        <Text>Conheça alguns dos nossos recursos⚡️</Text>
                    </DetailsnResourcesContainer>

                    <Text $size="large" $weight="medium" $family="secondary" color="black">Queremos que o aluno se sinta confortável enquanto aprende</Text>
                </UpperContainer>

                <ResourcesGroupContainer>
                    {resourcesData.map((resource) => (
                        <ResourcesCard key={resource.id} data={resource} $url={`./assets/icons/${resource.id}.svg`} />
                    ))}
                </ResourcesGroupContainer>

                <LongLine />

                <FooterContainer>
                    <RocketContainer>
                        <Image src={rocket} height={32} width={32} alt="rocket" />
                        <Text $size="small" $weight="medium" color="gray">Veja todos os outros recursos disponíveis para te ajudar </Text>
                    </RocketContainer>

                    <SeeMoreContainer>
                        <Text $size="small" $weight="semibold" color="purple_pure">Ver mais</Text>
                        <Image src={arrow} width={24} height={32} alt="see-more"></Image>
                    </SeeMoreContainer>
                </FooterContainer>
            </LSContentContainer>

        </LowerSectionContainer>
    )
}