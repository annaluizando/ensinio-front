import Image from "next/image";
import { Text } from "@/components/Elements/text";
import { useState } from "react";
import polygon from "@/public/assets/shapes/polygon.svg";
import checked from "@/public/assets/shapes/checkmark-square.svg";
import brazil from "@/public/assets/icons/brazil.svg";
import usa from "@/public/assets/icons/usa.svg";
import spain from "@/public/assets/icons/spain.svg";
import { LangItem, LangPopUpContainer, LanguageContainer, MiniLangContainer, SelectedContainer, SelectedContent, ToggleButton } from "./styles";
import { useRouter } from "next/router";

export default function LanguageMenu({ textColor = "white" }: LanguageMenuProps): JSX.Element {
    // const [hover, setHover] = useState(false);
    // const [click, setClick] = useState(false);

    const [popup, setPopUp] = useState(false);
    const { locale, push } = useRouter();

    const languages = [
        { code: "pt", icon: brazil },
        { code: "en", icon: usa },
        { code: "es", icon: spain },
    ];


    // to keep the language user selected, so next time they access the site it will display in their last selected language.
    const setCookie = (locale: string) => {
        document.cookie = `NEXT_LOCALE=${locale}; max-age=31536000; path=/`
    }

    // function handleLMenuHover() {
    //     setHover(!hover);
    // }

    // function handleLMenuClick() {
    //     setClick(!click)
    // }

    function handlePopUp() {
        setPopUp(!popup);
    }

    // function that happens when user selects a language in the lang pop-up menu 
    function handleLanguageSelect(languageCode: string) {
        // to change locale, that changes page language, using "push" that is provided by useRouter
        push('/', undefined, { locale: languageCode });
        setPopUp(false);
        setCookie(languageCode);
        // setClick(false);
        // setHover(false)
    }

    return (
        <LanguageContainer onClick={handlePopUp}>
            <Text $size="x_small" $weight="medium" color={textColor} $case="upper">{locale}</Text>
            {popup ? (
                <ToggleButton rotate>
                    <Image src={polygon} width={10} height={8} alt="toggle" />
                </ToggleButton>
            ) : (
                <ToggleButton>
                    <Image src={polygon} width={10} height={8} alt="toggle" />
                </ToggleButton>
            )}

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
