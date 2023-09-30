import styled from "styled-components";
import { Text } from "../../Elements/text";
import LanguageMenu from "../../Elements/LanguageMenu";
import Login from "../../Buttons/Login";

const MenuContainer = styled.div`
    width: 150px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: ${props => props.theme.colors.white};
    border-radius: 4px;
    position: absolute;
    right: 1rem;
    top: 4rem;
    padding: 1.5rem;

    @media (min-width: 1250px) {
      display: none;
    }
`;

export default function MenuOpen() {
    return (
        <MenuContainer>
            <Login textColor="black" textWeight="medium" />
            <a href=""><Text color="black" $size="small" $weight="medium">Soluções</Text></a>
            <a href=""><Text color="black" $size="small" $weight="medium">Preços</Text></a>
            <a href=""><Text color="black" $size="small" $weight="medium">Academy</Text></a>
            <a href=""><Text color="black" $size="small" $weight="medium">Blog</Text></a>
            <a href=""><Text color="black" $size="small" $weight="medium">Contato</Text></a>
            {/* <a href=""><Text color="black" $size="small" $weight="medium">Linguagem</Text></a> */}
            <LanguageMenu textColor="black" />
        </MenuContainer>
    )
}