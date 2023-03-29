import styled from "@emotion/styled";

export const ProjectBarStyle = styled.div`
  background-color: var(--fondo_seccion);
  padding: 0.75rem;
  border-radius: 0.6rem;
  color: var(--texto_principal);
  width: min-content;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: flex-start;

  .profilePic{
    text-align:center;
  }

  .userPic {
    object-fit: cover;
    width: 15rem;
    height: 15rem; 
    border: black solid 4px;
    border-radius: 7px;
    margin-top: 1rem;
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
      font-size: 24px;
      margin: 0;
    }
  }
`;
