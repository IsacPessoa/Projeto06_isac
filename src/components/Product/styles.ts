import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${colors.white};
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
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
