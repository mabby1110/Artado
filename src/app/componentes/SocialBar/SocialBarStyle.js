import styled from "@emotion/styled";

export const SocialBarStyle = styled.div`
  grid-area: 2 / 3 / 3 / 4;
  justify-self: left;

  background-color: Var(--fondo_seccion);
  border-radius: 7px;
  max-width: min-content;
  height: min-content;
  padding: 0.625rem;
  color: white;

  display: flex;
  align-content: center;
  align-items: flex-start;
  flex-direction: column;

  .toggle-button {
    cursor: pointer;
    border-style: none;
    width: 35px;
    height: 35px;
    background-color: transparent;
    color: var(--texto_principal);
    font-size: 1.4em;
  }
  .toggle-button:hover {
    color: var(--highlight);
  }
  .socialBarContent {
    width: 280px;
    transition: all 0.4s ease-out;
  }
  .socialBarContent.open {
    width: 0;
    div,
    h2 {
      display: none;
    }
  }

  .titleSection {
    display: inline-block;
    h2 {
      font-size: 1.5rem;
      font-weight: normal;
      margin: 0;
      margin-bottom: 1rem;
    }
  }
  .cardSection {
    h5 {
      font-size: 11px;
      font-weight: normal;
      margin: 8px 0px;
    }
    .cards {
      display: inline-block;
    }
  }
`;
