import styled from "@emotion/styled";

export const NewPostStyle = styled.div`
  grid-area: 3 / 1 / 4 / 4;
  color: var(--texto_principal);
  background-color: Var(--fondo_seccion);
  padding: 0.75rem;
  .addB {
    transition:1s;
    border: none;
    width: 100%;
    border-radius: 6px;
    padding: 0.5rem;
    background: var(--principal);
    cursor:pointer;
    color: white;
    font-size: 2rem;
  }
  .addB:hover{
    background:var(--highlight);
  }
  .objInsert input{
    width: 100%;
    border-radius: 6px;
  }
  .descInsert input{
    width: 100%;
    border-radius: 6px;
  }
  .titleInsert input{
    width: 100%;
    border-radius: 6px;
  }
`;
