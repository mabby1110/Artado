import styled from "@emotion/styled";

export const LoginFormStyle = styled.div`
  .formContainer {
    background: var(--fondo_seccion);
    border-radius: 5px;
    padding-bottom: 1rem;
    form{
        margin: 0 5px;
    }
  }
  .userInput {
    margin: 1rem 0;
    label {
      display: block;
      font-weight: bold;
    }
    input {
      width: 50%;
      border-radius: 5px;
      padding: 0.2rem 0;
    }
  }
  .passInput {
    margin: 1rem 0;
    label {
      display: block;
      font-weight: bold;
    }
    input {
      width: 50%;
      border-radius: 5px;
      padding: 0.2rem 0;
    }
  }
  .extraBSection{
    text-align: center;
  }
  .submitB {
    width: 100%; 
    transition:0.5s; 
    background:var(--principal);
    cursor:pointer;
    border:black solid;
    color:white;
    border-radius: 5px;
    padding: 0.5rem 0;
    font-size: 2rem;
    margin-top: 1rem;
  }
  .submitB:hover{
    background:var(--highlight);
  }
  .modeB {
    border: none;
    cursor:pointer;
    background: none;
    color: var(--highlight);
    font-size: 1rem;
  }
  .modeB:hover {
    color: var(--highlight2);
  }
`;
