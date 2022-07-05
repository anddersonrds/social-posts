import styled from 'styled-components'

export const SidebarWrapper = styled.aside`
  background: var(--gray-800);
  border-radius: 8px;
  overflow: hidden;
`

export const ImgBanner = styled.img`
  width: 100%;
  height: 72px;
  object-fit: cover;
`

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: calc(0px - 1.5rem - 6px);
`

export const Name = styled.strong`
  margin-top: 1rem;
  line-height: 1.6;
  color: var(--gray-100);
`

export const Job = styled.span`
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--gray-400);
`

export const Footer = styled.footer`
  border-top: 1px solid var(--gray-600);
  margin-top: 1.5rem;
  padding: 1.5rem 2rem 2rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    gap: 0.5rem;

    background: transparent;
    color: var(--green-500);
    border: 1px solid var(--green-500);
    border-radius: 8px;
    padding: 0 1.5rem;
    text-decoration: none;
    font-weight: bold;

    transition: color 0.2s, background-color 0.2s;

    &:hover {
      background: var(--green-500);
      color: var(--white);
    }
  }
`
