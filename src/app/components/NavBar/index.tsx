import Image from "next/image";
import { MenuContainer, NavBarContainer } from "./styles";
import { Text } from "../Elements/text";
import { EmptyBtn } from "../Buttons/EmptyBtn";
import LanguageMenu from "../Elements/LanguageMenu";
import Login from "../Buttons/Login";
import SolutionsToggle from "../Elements/SolutionsToggle";

export default function NavBar() {
    return (
        <NavBarContainer>
            <Image draggable="false" src="./logo.svg" height={40} width={159} alt="Ensinio-Logo" />

            <MenuContainer>
                <SolutionsToggle />
                <a href=""><Text color="white" $size="small" $weight="medium">Preços</Text></a>
                <a href=""><Text color="white" $size="small" $weight="medium">Academy</Text></a>
                <a href=""><Text color="white" $size="small" $weight="medium">Blog</Text></a>
                <a href=""><Text color="white" $size="small" $weight="medium">Contato</Text></a>
            </MenuContainer>

            {/* <Line /> */}

            <Login />

            <EmptyBtn>Começar agora</EmptyBtn>

            {/* <LanguageMenu /> */}
        </NavBarContainer>
    )
}