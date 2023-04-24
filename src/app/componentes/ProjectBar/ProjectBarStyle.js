import styled from "@emotion/styled";

export const ProjectBarStyle = styled.div`
  grid-area: 2 / 1 / 4 / 2;
  justify-self: right;

  background-color: Var(--fondo_seccion);
  border-radius: 7px;
  max-width: min-content;
  height: min-content;
  padding: 0.625rem;
  color: white;

  display: flex;
  align-content: center;
  align-items: flex-end;
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
  .projectBarContent {
    width: 280px;
    transition: all 0.4s ease-out;
    h2{
      margin-top:0;
      font-weight: normal;
    }
  }

  .projectBarContent.open {
    width: 0;
    div,
    h2 {
      display: none;
    }
  }

  .profilePic {
    text-align: center;
    padding: 2rem;
  }
  .userPic {
    object-fit: cover;
    width: 15.625rem;
    height: 15.625rem;
    border: black solid 4px;
    border-radius: 7px;
  }
  .projectSection1 {
    img {
      vertical-align: super;
    }
    .projectText {
      vertical-align: top;
      margin-top: 5px;
    }
  }
  .projectSection2 {
    img {
      vertical-align: super;
    }
    .projectText {
      vertical-align: top;
      margin-top: 5px;
    }
  }
  .barContent {
    h2 {
      font-size: 17px;
      margin-right: 10px;
      border-bottom: solid white 1px;
      padding-bottom: 5px;
      margin: 0;
      font-weight: normal;
      margin-top: 1em;
      margin-left: 5px;
      margin-bottom: 0.5em;
    }
  }
`;
