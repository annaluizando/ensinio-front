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

  .icon-play{
    margin-top: 1.688rem;
    margin-left: 1.875rem;
  }

  .icon-cert{
    margin-top: 3.813rem;
  }

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
  