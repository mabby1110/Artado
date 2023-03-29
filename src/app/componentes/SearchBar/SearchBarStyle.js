import styled from "@emotion/styled";

export const SearchBarStyle = styled.nav`
  background-color: var(--fondo);
  margin-bottom: 0.75rem;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

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
`