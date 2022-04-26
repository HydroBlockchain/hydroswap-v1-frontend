import styled from 'styled-components'
import {backgroundColor} from '../../common/styles/variables'

const Card = styled.div<any>`
  width: 100%;
  border-radius: 16px;
  padding: 1.25rem;
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
`
export default Card

export const LightCard = styled(Card)`
  border: none;
  background-color: ${backgroundColor};
`

export const GreyCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.tertiary};
`
