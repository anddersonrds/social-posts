import { AvatarProps } from "./type"

import * as S from './styles'

export const Avatar = ({ src, alt, hasBorder = false }: AvatarProps) => {
  return (
    <S.Wrapper hasBorder={hasBorder} src={src} alt={alt} />
  )
}
