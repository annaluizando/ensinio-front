import Image from "next/image";
import { Text } from "../text";
import { useState } from "react";
import polygon from "../../../../../public/assets/shapes/polygon.svg";
import checked from "../../../../../public/assets/shapes/checkmark-square.svg";
import brazil from "../../../../../public/assets/icons/brazil.svg";
import usa from "../../../../../public/assets/icons/usa.svg";
import spain from "../../../../../public/assets/icons/spain.svg";
import { LangItem, LangPopUpContainer, LanguageContainer, MiniLangContainer, SelectedContainer, SelectedContent, ToggleButton } from "./styles";

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