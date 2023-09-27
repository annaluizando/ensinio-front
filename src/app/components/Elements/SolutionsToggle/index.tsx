import styled from "styled-components";
import { Text } from "../text";
import { useState } from "react";
import polygon from "../../../../../public/assets/shapes/polygon.svg";
import Image from "next/image";
import SolutionsCard from "../../SolutionsCard";


// div of solutions button (text + icon) 
const SolutionsContainer = styled.div`
    width: 88px;
    height: 16px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
`;

const ToggleButton = styled.button`
    width: 10px;
    height: 8px;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

// general div, white background from solutions popup
const SolutionsPopUpContainer = styled.div`
    width: 643px;
    height: 263px;
    border-radius: 6px;
    background-color: ${props => props.theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 4rem;
`;

// div that contains all Solutions Cards
const CardsContainer = styled.div`
    width: 535px;
    height: 120px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
`;

const STitleContainer = styled.div`
    width: 547px;
    height: auto;
    align-items: start;
    padding-bottom: 2.5rem;
`;

const SPopUpContent = styled.div`
    height: 175px;
    width: 535px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

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