import styled, { keyframes } from "styled-components";


const ToggleButton = styled.button`
  border: none;
  padding-left: 0.75rem;
  background-color: transparent;
  cursor: pointer;
`;

// div of solutions button (text + icon) 
const SolutionsContainer = styled.div`
    width: auto;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    border: none;
    transition: ease-in-out 0.3s;
    cursor: pointer;
    
    &:hover {
      ${ToggleButton} {
      transform: rotateX(180deg);
      }
    }
`;

// animation to be used in SolutionsPopUp
const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;


// general div, white background from solutions popup
const SolutionsPopUpContainer = styled.div`
    width: 643px;
    height: 263px;
    padding: 2.75rem;
    border-radius: 6px;
    background-color: ${props => props.theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 3.5rem;
    transition: ease-in-out 5s;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    animation-name: ${fadeInAnimation};
    cursor: default;
`;

// div that contains all Solutions Cards
const CardsContainer = styled.div`
    width: 547px;
    height: 100px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(0, 1fr);
    column-gap: 77px;
    row-gap: 40px;
    justify-content: space-between;
    align-content: space-between;
`;

// "solutions" text container
const STitleContainer = styled.div`
    width: 547px;
    height: auto;
    padding-bottom: 2.5rem;
`;


// div that contains all content inside the solutions popup
const SPopUpContent = styled.div`
    height: auto;
    width: 547px;
    display: flex;
    flex-direction: column;
`;

export {
  SPopUpContent,
  STitleContainer,
  CardsContainer,
  SolutionsPopUpContainer,
  SolutionsContainer,
  ToggleButton,
}