import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body{
    ${({ theme }) => `
      background-color: ${theme.colors.white};
    `}
    scroll-behavior: smooth;
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

  ::-webkit-scrollbar {
      width: 3px;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.white};
  }
  ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.gray};
      border-radius: 50px;
  }

  ::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.0);
  }
`

export default GlobalStyles