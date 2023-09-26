import styled from "styled-components";

const NavBarContainer = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(15px);
    position: absolute;
    top: 0;
    z-index: 9;
`;

const MenuContainer = styled.div`
    width: 456px;
    display: flex;
    justify-content: space-between;
`;



export {
    NavBarContainer,
    MenuContainer,
}