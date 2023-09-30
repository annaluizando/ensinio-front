import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body{
    ${({ theme }) => `
      background-color: ${theme.colors.white};
    `}
    scroll-behavior: smooth;
    min-width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

  html{
    overflow-x: hidden;
    min-width: 100vw;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-family: 'Inter', sans-serif;
  }

  a{ 
    text-decoration: none !important;
  }

  img {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    pointer-events: none;
  }

  // classes that are responsables for decoration icons (that are in the top of UpperSection) spacing 
  .icon-play{
    margin-top: 1.688rem;
    margin-left: 1.875rem;
  }

  .icon-cert{
    margin-top: 3.813rem;
  }


  // keyframe that is responsable for "see more" arrow animation
  @keyframes bounce {
      0% {
        transform: translateX(0);
      }
      5.55556% {
        transform: translateX(0);
      }
      11.11111% {
        transform: translateX(0);
      }
      22.22222% {
        transform: translateX(-15px);
      }
      27.77778% {
        transform: translateX(0);
      }
      33.33333% {
        transform: translateX(-15px);
      }
      44.44444% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(0);
      }
    }

  .bounce{
    animation-iteration-count: infinite;
    animation-duration: 1.5s;
    animation: bounce 3s ease infinite;
    transform-origin: 50% 50%;
  }

  // to personalize navegator scrollbar
  ::-webkit-scrollbar {
      width: 3px;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.light_gray};
  }
  ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.gray};
      border-radius: 50px;
  }

  ::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.0);
  }
`

// general container, inside of it theres all the others containers
const MainContainer = styled.main`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

export {
  GlobalStyles,
  MainContainer
}
  