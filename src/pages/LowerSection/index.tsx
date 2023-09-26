import ResourcesCard from "@/app/components/ResourcesCard";
import { FooterContainer, LowerSectionContainer, ResourcesGroupContainer, RocketContainer, SeeMoreContainer, UpperContainer } from "./styles";
import { Text } from "@/app/components/Elements/text";
import Image from "next/image";
import rocket from "../../../public/assets/icons/rocket.svg";
import arrow from "../../../public/assets/shapes/arrow.svg";

export default function LowerSection() {
    return (
        <LowerSectionContainer>
            <UpperContainer>
                <Text $case="upper" $spacing="wide" $size="small" $weight="semibold" color="purple_dark">Pensamos em cada detalhe</Text>
                <Text>Conheça alguns dos nossos recursos⚡️</Text>
            </UpperContainer>

            <Text $size="large" $weight="medium" $family="secondary" color="black">Queremos que o aluno se sinta confortável enquanto aprende</Text>

            <ResourcesGroupContainer>
                <ResourcesCard $url="./assets/icons/icon-app.svg" title="Trilhas de etapas" description="Crie planos de estudos especificando aulas e/ou cursos e definindo a ordem que seus alunos devem estudar."></ResourcesCard>
                <ResourcesCard $url="./assets/icons/icon-playlists.svg" title="Playlists" description="Transforme uma coleção em uma playlist para poder ver vídeos e áudios em sequência offline."></ResourcesCard>
                <ResourcesCard $url="./assets/icons/icon-folder.svg" title="Coleções" description="Crie coleções, adicione conteúdos, reorganize ítens e deixe tudo do seu jeito para melhorar a experiência."></ResourcesCard>
            </ResourcesGroupContainer>

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

        </LowerSectionContainer>
    )
}