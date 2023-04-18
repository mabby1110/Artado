import styled from "@emotion/styled";

export const FilterBarStyle = styled.div`
  overflow-x: scroll;
  white-space: nowrap;
  .filterOnly{
    cursor:pointer;
  }
  ::-webkit-scrollbar {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--highlight);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--highlight2);
    border-radius: 10px;
  }
`;
