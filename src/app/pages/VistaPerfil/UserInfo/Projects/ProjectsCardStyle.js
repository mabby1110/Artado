import styled from "@emotion/styled";

export const ProjectsCardStyle = styled.div`
  margin: 10px;
  .contentAlign {
    text-align: center;
    width: 54.5rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sectionContent {
    text-align: center;
    width: 54.5rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    max-width: 100%;
    overflow-x: scroll;
    scroll-behavior: smooth;
    gap: 10px;
  }
  ul::-webkit-scrollbar {
    -webkit-appearance: none;
  }
  button {
    border: 0;
    color: #fff;
    background: black;
    font-size: 24px;
    position: absolute;
    opacity: 0.6;
    transition: 0.3s;
    box-shadow: inset 0px 0px 3px 3px rgb(16 16 16);
  }
  button:hover {
    opacity: 1;
  }
  .prev {
    left: 0;
    padding: 16% 1rem;
    z-index: 1;
  }
  .next {
    right: 0;
    padding: 16% 1rem;
    z-index: 1;
  }
`;
