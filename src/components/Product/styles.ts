import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  background-color: ${colors.white};
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const CardSecondary = styled.div`
  background-color: ${colors.firstOrange};
  color: ${colors.beige};
  padding: 8px;
  border-radius: 12px;
  max-width: 320px;
  width: 100%;

  ${ButtonContainer} {
    background-color: ${colors.beige};
    color: ${colors.firstOrange};
    padding: 4px 0;
    width: 100%;
    height: 24px;
    text-align: center;
    cursor: pointer;
  }
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`
export const Decription = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`

export const AllDescription = styled.div`
  padding: 8px 8px;
  border-width: 0px, 1px, 1px, 1px;
  border-style: solid;
  border-color: transparent ${colors.firstOrange} ${colors.firstOrange}
    ${colors.firstOrange};
`

export const Nota = styled.div`
  font-size: 18px;
  font-weight: bold;
  display: flex;

  img {
    margin-left: 8px;
  }
`

export const InitialBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  div {
    position: relative;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  background-color: ${colors.firstOrange};
  color: ${colors.white};
  padding: 32px 32px;
  width: 1024px;
  height: 344px;
  font-size: 14px;

  h4 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 24px;
    line-height: 22px;
  }

  ${ButtonContainer} {
    margin-top: 16px;
    padding: 4px 8px;
    background-color: ${colors.beige};
  }
`

export const ImagePrato = styled.img`
  max-width: 280px;
  width: 100%;
  height: 280px;
  margin-right: 24px;
`

export const Close = styled.img`
  width: 16px;
  height: 16px;
  margin-bottom: 10px;
  cursor: pointer;
`
