import styled from 'styled-components'

export const PostWrapper = styled.article`
  background: var(--gray-800);
  border-radius: 8px;
  padding: 2.5rem;

  & + article {
    margin-top: 2rem;
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Avatar = styled.img`
  width: calc(3rem + 12px);
  height: calc(3rem + 12px);
  border-radius: 8px;
  border: 4px solid var(--gray-800);
  outline: 2px solid var(--green-500);
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
`

export const Name = styled.strong`
  line-height: 1.6;
  color: var(--gray-100);
`

export const Job = styled.span`
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--gray-400);
`

export const TimeWrapper = styled.time`
  font-size: 0.875rem;
  color: var(--gray-400);
`

export const ContentWrapper = styled.div`
  line-height: 1.6;
  color: var(--gray-300);
  margin-top: 1.5rem;

  p {
    margin-top: 1rem;
  }

  a {
    font-weight: bold;
    color: var(--green-500);
    text-decoration: none;

    &:hover {
      color: var(--green-300);
    }
  }
`

export const CommentWrapper = styled.form`
  width: 100%;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--gray-600);

  &:focus-within {
    > footer {
      visibility: visible;
      max-height: none;
    }
  }
`

export const Title = styled.strong`
  line-height: 1.6;
  color: var(--gray-100);
`
export const Textarea = styled.textarea`
  width: 100%;
  height: 6rem;
  border: 0;
  border-radius: 8px;
  resize: none;
  padding: 1rem;
  margin-top: 1rem;
  color: var(--gray-100);
  background: var(--gray-900);
`
export const Button = styled.button`
  padding: 1rem 1.5rem;
  margin-top: 1rem;
  border-radius: 8px;
  border: 0;
  background: var(--green-500);
  color: var(--white);
  font-weight: bold;
  cursor: pointer;

  transition: background-color 0.1s;

  &:hover {
    background: var(--green-300);
  }
`
export const FooterWrapper = styled.footer`
  visibility: hidden;
  max-height: 0;
`

export const CommentListWrapper = styled.div`
  margin-top: 2rem;
`
