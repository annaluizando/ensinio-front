import { Text } from "../text";
import { useState } from "react";
import polygon from "../../../../../public/assets/shapes/polygon.svg";
import Image from "next/image";
import SolutionsCard from "../../SolutionsCard";
import { CardsContainer, SPopUpContent, STitleContainer, SolutionsContainer, SolutionsPopUpContainer, ToggleButton } from "./styles";


export default function SolutionsToggle() {
    const [solutions, setSolutions] = useState(false);

    // will be responsable to show or not show the solutions menu
    function handleSolutions() {
        setSolutions(!solutions);
    }

    return (
        <>
            <SolutionsContainer onClick={handleSolutions}>
                <a><Text color="white" $size="small" $weight="medium">Soluções</Text></a>
                <ToggleButton onClick={handleSolutions}>
                    <Image src={polygon} width={10} height={8} alt="toggle" />
                </ToggleButton>
            </SolutionsContainer>

            {solutions && (
                <SolutionsPopUpContainer>
                    <SPopUpContent>
                        <STitleContainer>
                            <Text $spacing="wide" $size="xx_small" $weight="semibold" $case="upper" color="purple_pure">Soluções Principais</Text>
                        </STitleContainer>
                        <CardsContainer>
                            <SolutionsCard $url="./assets/icons/ead.svg" title="Crie uma Escola Online" description="Lorem ipsum dolor sit amet" />
                            <SolutionsCard $url="./assets/icons/icon-social.svg" title="Comunicação e rede social" description="Lorem ipsum dolor sit amet" />
                            <SolutionsCard $url="./assets/icons/icon-gamification.svg" title="Gamificação" description="Lorem ipsum dolor sit amet" />
                            <SolutionsCard $url="./assets/icons/icon-app.svg" title="Aplicativo mobile" description="Lorem ipsum dolor sit amet" />
                        </CardsContainer>
                    </SPopUpContent>
                </SolutionsPopUpContainer>
            )}
        </>
    )
}