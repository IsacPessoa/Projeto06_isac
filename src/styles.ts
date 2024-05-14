import { createGlobalStyle } from 'styled-components'

const colors = {
  firstOrange: '#E66767',
  secondOrange: '#FFF8F2',
  white: '#FFFFFF',
  beige: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${colors.beige};
    color: ${colors.firstOrange};
  }
`
