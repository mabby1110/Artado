import styled from "@emotion/styled";

export const ProjectBarStyle = styled.div`
  background-color: Var(--fondo_seccion);
  border-radius: 7px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  flex-direction: column;
  width: min-content;
  color: white;
  .profilePic{
    text-align:center;
  } 
  .userPic {
    object-fit: cover;
    width: 10em;
    height: 10em;
    border: black solid 4px;
    border-radius: 7px;
    margin-top: 2em;
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
