import styled, { keyframes } from "styled-components";


const ToggleButton = styled.button<ToggleButtonProps>`
  width: 10px;
  height: ${props => (props.rotate ? 'auto' : '8px')};
  transform: ${props => (props.rotate ? 'rotate(180deg)' : 'none')};
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

// div responsable for all things that envolves language menu, the name of current language + popup
const LanguageContainer = styled.div`
  width: 38px;
  height: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;


const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// div that contains the popup background and is responsable for elements that are inside it
const LangPopUpContainer = styled.div`
  width: 138px;
  height: 144px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.white};
  border-radius: 8px;
  position: absolute;
  top: 3.5rem;
  right: 2rem;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-name: ${fadeInAnimation};

  @media (max-width: 1250px) {
    top: 20rem;
    right: 0;
    width: 150px;
  }
`;

// div that ir responsable for the selected language content
const SelectedContainer = styled.div`
  width: 138px;
  height: 144px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  
  @media (max-width: 1250px) {
    width: 100%;
  }
  `;

// styles for the selected language
const SelectedContent = styled.div`
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: linear-gradient(90deg, #5F41D9 -880.48%, rgba(95, 65, 217, 0.00) 100%);
    position: absolute;
    padding: 1rem;
    right: 0;
`;

// bigger div that contains all the languages, even the selected one
const LangItem = styled.div`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 1rem;
  padding-left: 1.5rem;

  &:hover {
    background: linear-gradient(90deg, #5F41D9 -880.48%, rgba(95, 65, 217, 0.00) 100%);
    border-radius: 0;
  }
`;

// div that contains only language icon + language name
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