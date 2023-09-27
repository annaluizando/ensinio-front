import styled from "styled-components";
import { Text } from "../../Elements/text";
import SolutionsToggle from "../../Elements/SolutionsToggle";

const MenuContainer = styled.div`
    width: 120px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: ${props => props.theme.colors.light_gray};
    border-radius: 4px;
    position: absolute;
    right: 1rem;
    top: 4rem;
    padding: 1rem;

    @media (min-width: 1250px) {
      display: none;
    }
`;

export default function MenuOpen() {
    return (
        <MenuContainer>
            <a href=""><Text color="purple_pure" $size="small" $weight="semibold">Soluções</Text></a>
            <a href=""><Text color="purple_pure" $size="small" $weight="semibold">Preços</Text></a>
            <a href=""><Text color="purple_pure" $size="small" $weight="semibold">Academy</Text></a>
            <a href=""><Text color="purple_pure" $size="small" $weight="semibold">Blog</Text></a>
            <a href=""><Text color="purple_pure" $size="small" $weight="semibold">Contato</Text></a>
        </MenuContainer>
    )
}