import styled from "@emotion/styled";

export const NavBarStyle = styled.nav`
  grid-area: 1 / 1 / 2 / 2;
  .logoImg {
    height: 100%;
  }
  a {
    text-decoration: none;
    color: var(--texto_principal);
  }
  .navContent {
    text-align: center;
    height: 100%;
  }
`;

export const NavBarStyleTwo = styled.nav`
  display: flex;
  align-items: center;
  gap: 15px;
  .linkContainer {
    display: grid;
    gap: 15px;
  }
  .proLink {
    grid-area: 1;
    text-decoration: none;
    font-size: 1.5rem;
    color: var(--texto_secundario);
  }
  .proLink:hover {
    color: var(--highlight2);
  }
  .loginLink:hover {
    color: var(--highlight2);
  }
  .loginLink {
    grid-area: 2;
    text-decoration: none;
    font-size: 1.5rem;
    color: var(--texto_secundario);
  }
  .profileContainer {
    width: 100%;
    display: grid;
  }
  .profileLink {
    text-align: end;
  }
  .profileImg {
    border-radius: 100%;
    object-fit: cover;
    width: 4rem;
    max-height: 4rem;
  }
`;
