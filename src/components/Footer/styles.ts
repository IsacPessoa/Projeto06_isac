import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterBar = styled.footer`
  background-color: ${colors.beige};
  height: 300px;
  padding: 40px 0;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const List = styled.ul`
  list-style: none;
  display: flex;
  margin-top: 32px;
  margin-bottom: 80px;

  li {
    margin-right: 8px;

    img {
      height: 24px;
    }
  }
`

export const Copy = styled.p`
  text-align: center;
  font-size: 10px;
`
