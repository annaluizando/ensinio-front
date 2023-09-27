import styled from "styled-components";

const NavBarContainer = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(15px);
    position: absolute;
    top: 0;
    z-index: 9;
`;

const MenuContainer = styled.div`
    width: 903px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1250px) {
      display: none;
    }
`;

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