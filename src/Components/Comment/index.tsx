import { ThumbsUp, Trash } from 'phosphor-react'

import { Avatar } from '../Avatar'

import * as S from './styles'

export const Comment = () => {
  return (
    <S.CommentWrapper>
      <Avatar src="https://github.com/anddersonrds.png" alt="Imagem do avatar" />
      <S.CommentBox>
        <S.ContentWrapper>
          <header>
            <S.AuthorAndTime>
              <S.Name>Anderson Rodrigues</S.Name>
              <S.TimeWrapper title="11 de maio às 08:13h" dateTime='2022-06-07 08:13:30'>Cerca de 1h atrás</S.TimeWrapper>
            </S.AuthorAndTime>

            <S.DeleteButton title='Deletar comentário'>
              <Trash size={20} />
            </S.DeleteButton>
          </header>

          <S.Content>Muito bom parabéns!!</S.Content>
        </S.ContentWrapper>

        <S.FooterWrapper>
          <S.LikeButton type='submit'>
            <ThumbsUp size={20} />
            Aplaudir
            <span>20</span>
          </S.LikeButton>
        </S.FooterWrapper>
      </S.CommentBox>
    </S.CommentWrapper>
  )
}
