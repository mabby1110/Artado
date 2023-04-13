import styled from "@emotion/styled";

export const ProjectCardStyle = styled.div`
  flex-grow: 1;

  background: Var(--fondo_componente);
  color: white;
  height: 4.5em;
  border-radius: 9px;
  position: relative;
  margin-bottom: 5px;
  
  img {
    object-fit: cover;
    border-radius: 100%;
    width: 3.3em;
    height: 3.3em;
    margin: 5px;
  }
  .projectDetail {
    width: max-content;
    position: absolute;
    top: 40%;
    p {
      display: inline-block;
      margin: 0;
    }
    .pRole {
      display: inline-block;
      margin: 0;
    }
    .rStatus {
      display: inline-block;
      margin: 0;
      margin-left: 20px;
    }
    .postulations {
      display: inline-block;
      margin: 0;
    }
    .pStatus {
      display: inline-block;
      margin: 0;
      margin-left: 20px;
    }
  }
  .nPost {
    margin: 0;
    position: absolute;
    right: 5%;
    bottom: 5%;
  }
  .projectText {
    display: inline-block;
    .pState {
      right: 9px;
      display: inline-block;
      position: absolute;
      margin: 0;
      top: 8px;
      font-size: 12px;
      font-weight: normal;
    }
    width: 50%;
    h3 {
      font-size: 15px;
      margin: 0;
      font-weight: normal;
      position: absolute;
      display: inline-block;
    }
    p {
      font-size: 11px;
    }
  }
`;
