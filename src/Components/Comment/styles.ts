import styled from 'styled-components'

export const CommentWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`

export const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 8px;
`

export const CommentBox = styled.form`
  flex: 1;
`

export const ContentWrapper = styled.div`
  color: var(--gray-700);
  padding: 1rem;
  border-radius: 8px;

  > header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`

export const AuthorAndTime = styled.div`
  display: flex;
  flex-direction: column;
`

export const Name = styled.strong`
  line-height: 1.6;
  font-size: 0.875rem;
  color: var(--gray-100);
`

export const TimeWrapper = styled.time`
  font-size: 0.75rem;
  line-height: 1.6;
  color: var(--gray-400);
`

export const DeleteButton = styled.button`
  cursor: pointer;
  color: var(--gray-400);
  background: transparent;
  line-height: 0;
  border-radius: 2px;
  border: 0;

  transition: background-color 0.1s;

  &:hover {
    color: var(--red-500);
  }
`

export const Content = styled.p`
  margin-top: 1rem;
  color: var(--gray-300);
`

export const FooterWrapper = styled.footer`
  margin-top: 1rem;
`

export const LikeButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  color: var(--gray-400);
  background: transparent;
  border: 0;

  transition: background-color 0.1s;

  > svg {
    margin-right: 0.5rem;
  }

  /* > span:before {
    content: "\2022";
    padding: 0 0.25rem;
  } */

  &:hover {
    color: var(--green-300);
  }
`
