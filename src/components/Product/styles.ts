import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`

export const Card = styled.div`
  flex: 1 0 300px;
  position: relative;
  max-width: 472px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  text-align: justify;

  ${TagContainer} {
    margin-right: 8px;
  }

  img {
    display: block;
    width: 100%;
    height: 220px;
    object-fit: cover;
  }
`

export const CardSecondary = styled.div`
  background-color: ${colors.firstOrange};
  color: ${colors.beige};
  padding: 8px;
  border-radius: 12px;
  max-width: 320px;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 500px;

  ${ButtonContainer} {
    background-color: ${colors.beige};
    color: ${colors.firstOrange};
    padding: 4px 0;
    width: 100%;
    height: 24px;
    text-align: center;
    cursor: pointer;
    border-radius: 3px;
  }

  img {
    display: block;
    width: 100%;
    height: 220px;
    object-fit: cover;
  }
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  flex-shrink: 0;
`
export const Decription = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
  flex-shrink: 0;
`

export const AllDescription = styled.div`
  background-color: ${colors.white};
  padding: 8px 8px;
  border-width: 0px, 1px, 1px, 1px;
  border-style: solid;
  border-color: transparent ${colors.firstOrange} ${colors.firstOrange}
    ${colors.firstOrange};
  flex-grow: 1;
`

export const AllDescription2 = styled.div`
  background-color: ${colors.firstOrange};
  padding: 8px 8px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: justify;
  display: flex; /* Usar Flexbox */
  flex-grow: 1; /* Permite que este contêiner ocupe o espaço restante */

  ${ButtonContainer} {
    width: 100%;
  }
`

export const Nota = styled.div`
  font-size: 18px;
  font-weight: bold;
  display: flex;

  img {
    margin-left: 8px;
    height: 20px;
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

  ${ButtonContainer} {
    cursor: pointer;
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
  height: 280px;
  width: 100%;
  margin-right: 24px;
`

export const Close = styled.img`
  width: 16px;
  height: 16px;
  margin-bottom: 10px;
  cursor: pointer;
`
