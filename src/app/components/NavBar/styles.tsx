import styled from "styled-components";

// div that contains all content that is inside navbar, even ensinio's logo
const NavBarContainer = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(15px);
    position: fixed;
    top: 0;
    z-index: 9;
`;

// div that contains only the options and clickable in navbar
const MenuContainer = styled.div`
    width: 903px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1250px) {
      display: none;
    }
`;

// menu icon, that only appears in mobile devices
const MenuBtn = styled.button`
    width: 24px;
    height: 24px;
    background-color: transparent;
    border: none;
    display: none;
    cursor: pointer;

    @media (max-width: 1250px) {
      display: flex;
    }
`;


const NavBarContentContainer = styled.div`
    width: 87.50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

// div that contains the options of navegation
const PagesContainer = styled.div`
    width: 456px;
    height: auto;
    display: flex;
    justify-content: space-between;
`;

export {
    NavBarContainer,
    MenuContainer,
    MenuBtn,
    NavBarContentContainer,
    PagesContainer,
}