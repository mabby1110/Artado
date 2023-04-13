import styled from '@emotion/styled';

export const NavBarStyle = styled.nav`
  grid-area: 1 / 1 / 2 / 2;

  background-color: var(--fondo_seccion);
  a {
    text-decoration: none;
    color: var(--texto_principal);
    padding: 0 1.125rem;
  }
  .navContent{
    text-align:center;
  }
`;