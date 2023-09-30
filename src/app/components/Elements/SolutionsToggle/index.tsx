import { Text } from "../text";
import { useState } from "react";
import polygon from "../../../../../public/assets/shapes/polygon.svg";
import Image from "next/image";
import SolutionsCard from "../../SolutionsCard";
import { CardsContainer, SPopUpContent, STitleContainer, SolutionsContainer, SolutionsPopUpContainer, ToggleButton } from "./styles";
import { useTranslation } from "next-i18next";


export default function SolutionsToggle() {
    const [solutions, setSolutions] = useState(false);
    const { t } = useTranslation('common')


    // will be responsable to show or not show the solutions menu
    // two functions where used to make less the chances of an error ocorring
    function handleSolutionsOn() {
        setSolutions(true);
    }
    function handleSolutionsOff() {
        setSolutions(false);
    }


    return (
        <>
            <SolutionsContainer onMouseEnter={handleSolutionsOn} onMouseLeave={handleSolutionsOff}>
                <a><Text color="white" $size="small" $weight="medium">{t('navbar.solutions')}</Text></a>
                <ToggleButton>
                    <Image src={polygon} width={10} height={8} alt="toggle" />
                </ToggleButton>
            </SolutionsContainer>

            {solutions && (
                <SolutionsPopUpContainer>
                    <SPopUpContent>
                        <STitleContainer>
                            <Text $spacing="wide" $size="xx_small" $weight="semibold" $case="upper" color="purple_pure">{t('solpopup.title')}</Text>
                        </STitleContainer>
                        <CardsContainer>
                            <SolutionsCard $url="./assets/icons/ead.svg" title={t('solpopup.create')} description="Lorem ipsum dolor sit amet" />
                            <SolutionsCard $url="./assets/icons/icon-social.svg" title={t('solpopup.social')} description="Lorem ipsum dolor sit amet" />
                            <SolutionsCard $url="./assets/icons/icon-gamification.svg" title={t('solpopup.gamefication')} description="Lorem ipsum dolor sit amet" />
                            <SolutionsCard $url="./assets/icons/icon-app.svg" title={t('solpopup.mobile')} description="Lorem ipsum dolor sit amet" />
                        </CardsContainer>
                    </SPopUpContent>
                </SolutionsPopUpContainer>
            )}
        </>
    )
}