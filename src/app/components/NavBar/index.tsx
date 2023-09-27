import Image from "next/image";
import { MenuBtn, MenuContainer, NavBarContainer, NavBarContentContainer, PagesContainer } from "./styles";
import { Text } from "../Elements/text";
import { EmptyBtn } from "../Buttons/EmptyBtn";
import { useState } from "react";
import Login from "../Buttons/Login";
import SolutionsToggle from "../Elements/SolutionsToggle";
import line_blue from "../../../../public/assets/shapes/line_blue.svg";
import LanguageMenu from "../Elements/LanguageMenu";
import menuIcon from "../../../../public/assets/icons/menu_icon.svg";
import MenuOpen from "./MenuOpen";

export default function NavBar() {
    const [menu, setMenu] = useState(false);

    function handleMenu() {
        setMenu(!menu);
    }

    return (
        <NavBarContainer>
            <NavBarContentContainer>

                <Image draggable="false" src="./logo.svg" height={40} width={159} alt="Ensinio-Logo" />

                <MenuContainer>

                    <PagesContainer>
                        <SolutionsToggle />
                        <a href=""><Text color="white" $size="small" $weight="medium">Preços</Text></a>
                        <a href=""><Text color="white" $size="small" $weight="medium">Academy</Text></a>
                        <a href=""><Text color="white" $size="small" $weight="medium">Blog</Text></a>
                        <a href=""><Text color="white" $size="small" $weight="medium">Contato</Text></a>
                    </PagesContainer>

                    <Image src={line_blue} width={1} height={24} alt="line" />

                    <Login />


                    <EmptyBtn>Começar agora</EmptyBtn>

                    <LanguageMenu />
                </MenuContainer>
            </NavBarContentContainer>

            <MenuBtn onClick={handleMenu}><Image src={menuIcon} width={24} height={24} alt="menu-icon" /></MenuBtn>
            {menu && (
                <>
                    <MenuOpen />
                </>
            )}
        </NavBarContainer>
    )
}