import styled from "@emotion/styled"

export const LabelStyle = styled.div`
  display: inline-block;
  .filterOnly {
    background: #353232;
    height: 0.6rem;
    padding: 10px 5px;
    margin: 0;
    border-radius: 14px;
    margin: 0;
    font-size: 12px;
    flex-wrap: wrap;
    margin-bottom: 5px;
    text-align: center;
    transition:1s;
    p {
      margin: 0;
    }
  }
  .filterOnly:hover{
    background: var(--principal);
    filter: brightness(1.3);
  }
`