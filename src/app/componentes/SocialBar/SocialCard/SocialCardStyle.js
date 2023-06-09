import styled from "@emotion/styled";

export const SocialCardStyle = styled.div`
  flex-grow: 1;
  cursor:pointer;
  background: Var(--fondo_componente);
  color: white;
  height: 4.5em;
  border-radius: 9px;
  position: relative;
  margin-bottom: 5px;
  overflow: hidden;
  position: relative;
  margin-bottom: 5px;
  transition: 1s;

  :hover {
    filter: brightness(1.3);
  }
  .filterOnly {
    padding: 4px 4px;
    font-size: 10px;
    margin-bottom: 2px;
  }
  img {
    vertical-align: top;
    object-fit: cover;
    border-radius: 100%;
    width: 3.5em;
    height: 3.5em;
    margin: 5px;
  }
  .socialText {
    width: 72%;
    height: 60%;
    display: inline-block;
    h3 {
      font-size: 15px;
      margin: 0;
      display: inline-block;
      font-weight: normal;
    }
    .filterSection {
      margin: 0;
      width: -webkit-fill-available;
      height: -webkit-fill-available;
    }
  }
`;
