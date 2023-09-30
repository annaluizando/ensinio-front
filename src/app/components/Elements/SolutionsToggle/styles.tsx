import styled, { keyframes } from "styled-components";


// div of solutions button (text + icon) 
const SolutionsContainer = styled.div`
    width: 88px;
    height: 16px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
`;

const ToggleButton = styled.button`
    width: 10px;
    height: 8px;
    border: none;
    background-color: transparent;
    cursor: pointer;
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
    top: 4rem;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    animation-name: ${fadeInAnimation};
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

const STitleContainer = styled.div`
    width: 547px;
    height: auto;
    padding-bottom: 2.5rem;
`;


// div that contains all content inside the solutions popup
const SPopUpContent = styled.div`
    height: 175px;
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