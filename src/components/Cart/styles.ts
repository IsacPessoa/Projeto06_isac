import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

import lixeira from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
  color: ${colors.beige};
`

export const Sidebar = styled.aside`
  background-color: ${colors.firstOrange};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }

  p {
    font-size: 14px;
    font-weight: 700;
    margin-top: 40px;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
  }
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.beige};
  color: ${colors.firstOrange};
  padding: 8px 8px 12px 8px;
  margin-bottom: 16px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
  }

  span {
    font-size: 14px;
    display: block;
    margin-top: 16px;
    margin-bottom: 21px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    bottom: 0;
    right: 0;
    margin-bottom: 8px;
    margin-right: 8px;
  }
`
