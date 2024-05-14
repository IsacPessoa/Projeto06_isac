import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
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
    text-decoration: none;
  }

  body {
    background-color: ${colors.beige};
    color: ${colors.firstOrange};
  }
`
