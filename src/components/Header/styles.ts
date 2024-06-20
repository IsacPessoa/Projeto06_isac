import styled from 'styled-components'
import { colors } from '../../styles'

import backgroundImage from '../../assets/images/background-image.png'

export const HeaderBar = styled.header`
  position: relative;
  background-color: ${colors.secondOrange};
  background-image: url(${backgroundImage});
  width: 100%;
  height: 380px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeaderBarSecondary = styled.header`
  position: relative;
  background-color: ${colors.secondOrange};
  background-image: url(${backgroundImage});
  width: 100%;
  height: 185px;
  margin: 0 auto;
  font-size: 18px;
  font-weight: 900;
  align-items: center;
  display: flex;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: ;
  }

  p {
    cursor: pointer;
  }
`

export const Image = styled.img`
  position: absolute;
  margin-bottom: 260px;
`

export const ImageSecondary = styled.img`
  margin-left: 24px;
  cursor: pointer;
`

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  margin-top: 260px;
  font-size: 36px;
  font-weight: 900;
`
