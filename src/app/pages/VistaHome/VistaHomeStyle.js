import styled from '@emotion/styled';

export const VistaHomeStyle = styled.div`
  grid-column: 2 / 3;

  border-radius: 10px;
  max-width: 1080rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 0.625rem;
  justify-content: space-around;

  .feed-section {
    background-color: var(--fondo_seccion);
    padding: 0.625rem;
    border-radius: 10px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.8rem 0.625rem;
  }
`
