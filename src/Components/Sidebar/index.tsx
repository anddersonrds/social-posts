import { PencilLine } from 'phosphor-react'

import * as S from './styles'

export const Sidebar = () => {
  return (
    <S.SidebarWrapper>
      <S.ImgBanner src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" />
      <S.Profile>
        <S.Avatar src="https://github.com/anddersonrds.png" alt="Imagem do avatar" />
        <S.Name>Anderson Rodrigues</S.Name>
        <S.Job>Web Developer</S.Job>
      </S.Profile>

      <S.Footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </S.Footer>
    </S.SidebarWrapper>
  )
}