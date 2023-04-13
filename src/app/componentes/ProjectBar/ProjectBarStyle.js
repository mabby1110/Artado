import styled from "@emotion/styled";

export const ProjectBarStyle = styled.div`
  grid-area: 2 / 1 / 4 / 2;
  justify-self: right;

  background-color: Var(--fondo_seccion);
  border-radius: 7px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: column;
  max-width: min-content;
  min-width: 23.75rem;
  height: min-content;
  padding: 0.625rem;
  color: white;
  .profilePic{
    text-align:center;
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
  .toggle-button {
    border-style: none;
    width: min-content;
    align-self:center;
    color: var(--texto_secundario);
    font-size: 1em;
  }
  .barContent.open {
    display: none;
  }
`;
