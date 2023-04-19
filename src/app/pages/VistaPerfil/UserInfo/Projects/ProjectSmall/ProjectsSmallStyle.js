import styled from "@emotion/styled";

export const ProjectsSmallStyle = styled.div`
  margin:0;
  flex: 1 24%;
  .projectSection{
    margin:0;
  }
  li {
    list-style: none;
  }
  .imgContainer {
    position: relative;
    margin: 0;
    img {
      width: 100%;
      filter: brightness(0.4);
      min-width: 7.5rem;
      height: 13rem;
      object-fit: cover;
      border-radius: 5px;
    }
    .hoverSection {
      width: 100%;
      text-align: center;
      position: absolute;
      top: 45%;
      p {
        margin: 0;
        font-size: 1.5rem;
        opacity: 0;
      }
      p:hover{
        color: var(--highlight2);
      }
    }
  }
  .imgContainer:hover{
    cursor: pointer;
    img{
      filter: brightness(50%)
    }
    p {
      opacity: 1;
    }
  }
  h5 {
    font-size: 1.2rem;
    margin: 0;
    margin-top: 5px;
    text-align: center;
  }
`;
