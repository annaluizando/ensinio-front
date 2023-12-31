import Image from "next/image";
import Polygon from "@/public/assets/shapes/polygon.svg";
import Checked from "@/public/assets/shapes/checkmark-square.svg";
import Brazil from "@/public/assets/icons/brazil.svg";
import Usa from "@/public/assets/icons/usa.svg";
import Spain from "@/public/assets/icons/spain.svg";

import { Text } from "@/components/Elements/text";
import { useState } from "react";
import { LangItem, LangPopUpContainer, LanguageContainer, MiniLangContainer, SelectedContainer, SelectedContent, ToggleButton } from "./styles";
import { useRouter } from "next/router";

export default function LanguageMenu({ textColor = "white" }: LanguageMenuProps): JSX.Element {
    const [popup, setPopUp] = useState(false);
    const { locale, push } = useRouter();

    const languages = [
        { code: "pt", icon: Brazil },
        { code: "en", icon: Usa },
        { code: "es", icon: Spain },
    ];


    // to keep the language user selected, so next time they access the site it will display in their last selected language.
    const setCookie = (locale: string) => {
        document.cookie = `NEXT_LOCALE=${locale}; max-age=31536000; path=/`
    }

    function LangPopUpOn() {
        setPopUp(true);
    }

    function LangPopUpOff() {
        setPopUp(false);
    }


    // function that happens when user selects a language in the lang pop-up menu 
    function handleLanguageSelect(languageCode: string) {
        // to change locale, that changes page language, using "push" that comes from useRouter
        push('/', undefined, { locale: languageCode });
        setPopUp(false);
        setCookie(languageCode);
    }

    return (
        <LanguageContainer onMouseEnter={LangPopUpOn} onMouseLeave={LangPopUpOff}>
            <Text $size="x_small" $weight="medium" color={textColor} $case="upper">{locale}</Text>

            <ToggleButton>
                <Image src={Polygon} width={10} height={8} alt="toggle" />
            </ToggleButton>

            {popup && (
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
                                        <Image src={Checked} height={20} width={20} alt="checked" />
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
