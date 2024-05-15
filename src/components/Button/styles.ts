import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { colors } from '../../styles'

export const ButtonContainer = styled.button`
  color: ${colors.firstOrange};
  background-color: ${colors.secondOrange};
  font-size: 14px;
  font-weight: bold;
  padding: 8px 0px;
  aligin-items: center;
  justify-content: center;
  border: none;
`

export const ButtonLink = styled(Link)`
  color: ${colors.firstOrange};
  background-color: ${colors.beige};
  font-size: 14px;
  font-weight: bold;
  padding: 8px 0px;
  aligin-items: center;
  justify-content: center;
  border: none;
`
