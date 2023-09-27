import ResourcesCard from "@/app/components/ResourcesCard";
import { DetailsContainer, DetailsnResourcesContainer, FooterContainer, LSContentContainer, LongLine, LowerSectionContainer, ResourcesGroupContainer, RocketContainer, SeeMoreContainer, UpperContainer } from "./styles";
import { Text } from "@/app/components/Elements/text";
import Image from "next/image";
import rocket from "../../../../../public/assets/icons/rocket.svg";
import arrow from "../../../../../public/assets/shapes/arrow.svg";
import line_purple from "../../../../../public/assets/shapes/line_purple.svg";

export default function LowerSection() {
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
                    <ResourcesCard $url="./assets/icons/icon-app.svg" title="Trilhas de etapas" description="Crie planos de estudos especificando aulas e/ou cursos e definindo a ordem que seus alunos devem estudar."></ResourcesCard>
                    <ResourcesCard $url="./assets/icons/icon-playlists.svg" title="Playlists" description="Transforme uma coleção em uma playlist para poder ver vídeos e áudios em sequência offline."></ResourcesCard>
                    <ResourcesCard $url="./assets/icons/icon-folder.svg" title="Coleções" description="Crie coleções, adicione conteúdos, reorganize ítens e deixe tudo do seu jeito para melhorar a experiência."></ResourcesCard>
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