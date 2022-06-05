import * as S from './styles'

import igniteLogo from '../../assets/svg/ignite-logo.svg'

export const Header = () => {
  return (
    <S.HeaderWrapper>
     <S.Logo src={igniteLogo} alt="Logotipo do ignite" />
    </S.HeaderWrapper>
  )
}