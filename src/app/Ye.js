import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const MainSectionStyle = styled.div({
  backgroundColor: 'Var(--fondo_seccion)',
  padding: '0.75rem',
  width: 'min-content'
})

export const NavBarStyle = styled.nav`
  background-color: var(--principal);
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
  .search {
    grid-area: search;
    height: 2rem;
    width: 100%;
    border-radius: 10px;
    border-style: none;
  }

  .btn {
    grid-area: btn;
    border-radius: 10px;
    border-style: none;
  }

  .form {
    grid-area: form;
  }
`

export const ProjectBarStyle = styled.div({
  backgroundColor: 'Var(--fondo_seccion)',
  padding: '0.75rem'
})

export const SocialBarStyle = styled.div({
  backgroundColor: 'Var(--fondo_seccion)',
  padding: '0.75rem'
})

export const CardStyle = css({
  backgroundColor: 'Var(--fondo_componente)',
  marginBottom: '0.75rem'
})

export const NewPostStyle = css({
  backgroundColor: 'Var(--principal)',
})

