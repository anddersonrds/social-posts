import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 70rem;
  margin: 2rem auto;
  padding: 0 1rem;

  display: grid;
  grid-template-columns: 256px 1fr;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    html {
      font-size: 87.5%;
    }
  }
`
