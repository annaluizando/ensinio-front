import Image from "next/image";
import { Text } from "../text";
import { useState } from "react";
import polygon from "../../../../../public/assets/shapes/polygon.svg";
import checked from "../../../../../public/assets/shapes/checkmark-square.svg";
import brazil from "../../../../../public/assets/icons/brazil.svg";
import usa from "../../../../../public/assets/icons/usa.svg";
import spain from "../../../../../public/assets/icons/spain.svg";
import { LangItem, LangPopUpContainer, LanguageContainer, MiniLangContainer, SelectedContainer, SelectedContent, ToggleButton } from "./styles";
import { useRouter } from "next/router";

export default function LanguageMenu({ textColor = "white" }: LanguageMenuProps): JSX.Element {
    const [languageMenu, setLanguageMenu] = useState(false);
    const { locale, push } = useRouter();

    const languages = [
        { code: "pt", icon: brazil },
        { code: "en", icon: usa },
        { code: "es", icon: spain },
    ];


    function handleLanguageMenu() {
        setLanguageMenu(!languageMenu);
    }

    // function that happens when user selects a language in the lang pop-up menu 
    function handleLanguageSelect(languageCode: string) {
        // to change locale, that changes page language, using "push" that is provided by useRouter
        push('/', undefined, { locale: languageCode });
        setLanguageMenu(false);
    }

    return (
        <LanguageContainer onMouseEnter={handleLanguageMenu} onMouseLeave={handleLanguageMenu} onClick={handleLanguageMenu}>
            <Text $size="x_small" $weight="medium" color={textColor} $case="upper">{locale}</Text>
            <ToggleButton>
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
                                    <Image src={language.icon} height={16} width={16} alt={language.code} />
                                    <Text $size="x_small" $weight="medium" color="gray" $case="upper">
                                        {language.code}
                                    </Text>
                                </MiniLangContainer>
                                {locale === language.code && (
                                    <SelectedContent>
                                        <Image src={checked} height={20} width={20} alt="checked" />
                                    </SelectedContent>
                                )}
                            </LangItem>
                        ))}
                    </SelectedContainer>
                </LangPopUpContainer>
            )}
        </LanguageContainer>
    );
}
