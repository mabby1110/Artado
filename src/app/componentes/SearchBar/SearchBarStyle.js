import styled from "@emotion/styled";

export const SearchBarStyle = styled.nav`

  display: grid;
  gap: 10px;
  grid-template-columns: auto 35px 35px;
  grid-template-rows: 35px 51px auto;
  height: fit-content;

  .searchInput {
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    
    input {
      flex: 1;
      border: none;
      border-radius: 12px;
      outline: none;
      font-size: 1.2em;
    }
  }

  .searchBtn {
    grid-area: 1 / 2 / 2 / 3;
    display: flex;
    
    input {
      flex: 1;
      border: none;
      border-radius: 10px;
      outline: none;
      font-size: 1.2em;
    }
  }

  .newPostBtn {
    grid-area: 1 / 3 / 2 / 4;
    display: flex;
    
    input {
      flex: 1;
      border: none;
      border-radius: 10px;
      outline: none;
      font-size: 1.2em;
    }
  }

  .filterSection {
    grid-area: 2 / 1 / 3 / 2;
    display: flex;
    overflow: hidden;
  }
`