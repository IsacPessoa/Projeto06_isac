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
  display: none;
  justify-content: flex-end;
  z-index: 1;
  color: ${colors.beige};

  &.is-open {
    display: flex;
  }
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
    cursor: pointer;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    margin-top: 40px;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
  }

  h3,
  h2 {
    font-size: 16px;
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
export const Row = styled.div``

export const ButtonGroup = styled.div`
  margin-top: 16px;

  ${ButtonContainer} {
    margin-top: 8px;
    background-color: ${colors.beige};
    padding: 4px;
    font-size: 14px;
    font-weight: bold;
  }
`

export const InputGroup = styled.div`
  margin-top: 16px;
  font-size: 14px;
  font-weight: bold;

  &.cep-number {
    display: flex;
    gap: 34px;
  }

  label {
  }

  input {
    margin-top: 8px;
    width: 100%;
    padding: 8px;
    background-color: ${colors.beige};
    border: none;

    &.error {
      border: 1px solid red;
    }
  }

  small {
    color: #ffa500;
  }
`

export const TextEmptyCart = styled.p`
  text-align: center;
  padding: 8px;
`
