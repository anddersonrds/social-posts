import styled, { css } from 'styled-components'

import { AvatarProps } from './type'

export const Wrapper = styled.img<AvatarProps>`
  width: 3rem;
  height: 3rem;
  border-radius: 8px;

  ${({hasBorder}) => hasBorder && css`
    width: calc(3rem + 12px);
    height: calc(3rem + 12px);
    border-radius: 8px;
    border: 4px solid var(--gray-800);
    outline: 2px solid var(--green-500);
  `}
`
