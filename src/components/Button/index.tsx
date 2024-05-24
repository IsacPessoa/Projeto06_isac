import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  buttonType: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string[] | string
}

const Button = ({ buttonType, title, to, onClick, children }: Props) => {
  if (buttonType === 'button') {
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}

export default Button
