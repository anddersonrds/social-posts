import { Avatar } from '../Avatar'
import { Comment } from '../Comment'

import * as S from './styles'

export const Post = () => {
  return (
    <S.PostWrapper>
      <S.Header>
        <S.Author>
          <Avatar hasBorder src="https://github.com/anddersonrds.png" alt="Imagem do avatar" />
          <S.Infos>
            <S.Name>Anderson Rodrigues</S.Name>
            <S.Job>Web Developer</S.Job>
          </S.Infos>
        </S.Author>
        <S.TimeWrapper title="11 de maio às 08:13h" dateTime='2022-06-07 08:13:30'>Publicado há 1h</S.TimeWrapper>
      </S.Header>

      <S.ContentWrapper>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href='#'>👉 jane.design/doctorcare</a></p>
        <p>
          <a href='#'>#novoprojeto</a>{' '}
          <a href='#'>#nlw</a>{' '}
          <a href='#'>#rocketseat</a>
        </p>
      </S.ContentWrapper>

      <S.CommentWrapper>
        <S.Title>Deixe seus feedbacks</S.Title>
        <S.Textarea placeholder='Deixe seu comentário' />
        <S.FooterWrapper>
          <S.Button type='submit'>Comentar</S.Button>
        </S.FooterWrapper>
      </S.CommentWrapper>

      <S.CommentListWrapper>
        <Comment />
        <Comment />
        <Comment />
      </S.CommentListWrapper>
    </S.PostWrapper>
  )
}
