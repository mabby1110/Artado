import styled from "@emotion/styled";

export const SearchBarStyle = styled.nav`
  grid-area: 1 / 2 / 2 / 3;

  .searchInput {
    border-radius: 10px;
    height: 2.5rem;
    flex-basis: 90%;
    font-size: 1.2em;
  }

  .newPostBtn {
    border-radius: 10px;
    font-size: 1.2em;
    flex-basis: 8%;
  }

  .span-2 {
    grid-row: span 2;
  }
`