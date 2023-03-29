import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const MainSectionStyle = styled.div`
  background-color: Var(--fondo_seccion);
  border-radius: 10px;
  padding: 0.75rem;
`

export const HomeSectionStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 10px;
  justify-content: space-around;
`

export const NavBarStyle = styled.nav`
  background-color: var(--main);
  height: 5.25rem;
  border-radius: 10px;
  a {
    color: var(--texto_principal);
    text-decoration: none;
    padding: 0 1.125rem;
  }
`
export const SearchBarStyle = styled.nav`
  background-color: var(--fondo);
  margin-bottom: 0.75rem;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .searchInput {
    border-radius: 10px;
    height: 2.5rem;
    flex-basis: 90%;
    font-size: 1.2em;
  }

  .newPostBtn {
    border-radius: 10px;
    font-size: 1.2em;
    flex-basis: 8%;
  }
`

export const ProjectBarStyle = styled.div`
  background-color: 'Var(--main)';
  padding: 0.75rem;
`

export const NewPostFormStyle = styled.div`
  color: var(--texto_principal);
  background-color: 'Var(--main)';
  padding: 0.75rem;
`

