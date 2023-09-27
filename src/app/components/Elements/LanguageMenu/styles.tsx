import styled from "styled-components";


const LanguageContainer = styled.div`
    width: 38px;
    height: 16px;
    display: flex;
    justify-content: space-between;
`;

const ToggleButton = styled.button`
    width: 10px;
    height: 8px;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

const LangPopUpContainer = styled.div`
    width: 138px;
    height: 144px;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors.white};
    border-radius: 8px;
    position: absolute;
    top: 4rem;

`;

const SelectedContainer = styled.div`
    width: 138px;
    height: 144px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

const SelectedContent = styled.div`
    width: 138px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(90deg, #5F41D9 -880.48%, rgba(95, 65, 217, 0.00) 100%);
    position: absolute;
`;

// const LangContainer = styled.div`
//     width: ;
//     height: ;
//     display: flex;
// `;


const LangItem = styled.div`
    width: 100%;
    height: 48px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;

  &:hover {
    background: linear-gradient(90deg, #5F41D9 -880.48%, rgba(95, 65, 217, 0.00) 100%);
  }
`;

const MiniLangContainer = styled.div`
    width: 46px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export {
    MiniLangContainer,
    LangItem,
    SelectedContent,
    SelectedContainer,
    LangPopUpContainer,
    ToggleButton,
    LanguageContainer,
}