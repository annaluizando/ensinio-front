import Image from "next/image";
import styled from "styled-components";
import { Text } from "../text";
import { useState } from "react";

const LanguageContainer = styled.div`
    width: 38px;
    height: 16px;
    display: flex;
`;

const ToggleButton = styled.button`
    width: 10px;
    height: 8px;
    border: none;
    background-color: transparent;
    background-image: url('../../../public/assets/shapes/polygon.svg');
`;

export default function LanguageMenu() {
    const [languageMenu, setLanguageMenu] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState("PT");

    function handleLanguageMenu() {
        setLanguageMenu(!languageMenu);
    }

    return (
        <LanguageContainer>
            <Text $size="x_small" $weight="medium" color="white"> {currentlanguage} </Text>
            <ToggleButton onClick={handleLanguageMenu} />

            {languageMenu && (
                <></>
            )}
        </LanguageContainer>
    );
}