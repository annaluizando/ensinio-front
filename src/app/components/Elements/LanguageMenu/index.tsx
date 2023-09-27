import Image from "next/image";
import styled from "styled-components";
import { Text } from "../text";
import { useState } from "react";
import polygon from "../../../../../public/assets/shapes/polygon.svg";
import checked from "../../../../../public/assets/shapes/checkmark-square.svg";
import brazil from "../../../../../public/assets/icons/brazil.svg";
import usa from "../../../../../public/assets/icons/usa.svg";
import spain from "../../../../../public/assets/icons/spain.svg";

const LanguageContainer = styled.div`
    width: 38px;
    height: 16px;
    display: flex;
    justify-content: space-between;
`;

const ToggleButton = styled.button`
    width: 10px;
    height: 8px;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

const LangPopUpContainer = styled.div`
    width: 138px;
    height: 144px;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors.white};
    border-radius: 8px;
    position: absolute;
    top: 4rem;

`;

const SelectedContainer = styled.div`
    width: 138px;
    height: 144px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

const SelectedContent = styled.div`
    width: 138px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(90deg, #5F41D9 -880.48%, rgba(95, 65, 217, 0.00) 100%);
    position: absolute;
`;

// const LangContainer = styled.div`
//     width: ;
//     height: ;
//     display: flex;
// `;


const LangItem = styled.div`
    width: 100%;
    height: 48px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;

  &:hover {
    background: linear-gradient(90deg, #5F41D9 -880.48%, rgba(95, 65, 217, 0.00) 100%);
  }
`;

const MiniLangContainer = styled.div`
    width: 46px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export default function LanguageMenu(): JSX.Element {
    const [languageMenu, setLanguageMenu] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState("PT");

    const languages = [
        { code: "PT", icon: brazil, name: "Portuguese" },
        { code: "EN", icon: usa, name: "English" },
        { code: "ES", icon: spain, name: "Spanish" },
    ];

    function handleLanguageMenu() {
        setLanguageMenu(!languageMenu);
    }

    function handleLanguageSelect(languageSelected: string) {
        setCurrentLanguage(languageSelected);
        setLanguageMenu(false);
    }

    return (
        <LanguageContainer>
            <Text $size="x_small" $weight="medium" color="white"> {currentLanguage} </Text>
            <ToggleButton onClick={handleLanguageMenu}>
                <Image src={polygon} width={10} height={8} alt="toggle" />
            </ToggleButton>

            {languageMenu && (
                <LangPopUpContainer>
                    <SelectedContainer>
                        {languages.map(language => (
                            <LangItem
                                key={language.code}
                                onClick={() => handleLanguageSelect(language.code)}
                            >
                                <MiniLangContainer>
                                    <Image src={language.icon} height={16} width={16} alt={language.name} />
                                    <Text $size="x_small" $weight="medium" color="gray">
                                        {language.code}
                                    </Text>
                                </MiniLangContainer>
                                {currentLanguage === language.code && (
                                    <>
                                        <SelectedContent>
                                        </SelectedContent>
                                        <Image src={checked} height={20} width={20} alt="checked" />
                                    </>
                                )}
                            </LangItem>
                        ))}
                        {/* <SelectedContent>
                            <Image src={brazil} height={16} width={16} alt="brazil" />
                            <Text $size="x_small" $weight="medium" color="gray">PT</Text>
                            <Image src={checked} height={20} width={20} alt="checked" />
                        </SelectedContent> */}
                    </SelectedContainer>

                </LangPopUpContainer>
            )}
        </LanguageContainer>
    );
}