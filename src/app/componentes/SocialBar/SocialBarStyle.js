import styled from '@emotion/styled';

export const SocialBarStyle = styled.div`
grid-area: 2 / 3 / 3 / 4;
justify-self: left;

background-color: Var(--fondo_seccion);
border-radius: 7px;
display: flex;
flex-wrap: wrap;
align-content: center;
flex-direction: column;
max-width: min-content;
min-width: 23.75rem;
height: min-content;
padding: 0.625rem;
color: white;
.titleSection{
  display: inline-block;
  h2{ 
    font-size: 17px;
    font-weight: normal;
    margin: 0;
    margin-bottom: 1rem;
  }
}
.cardSection{
  h5{
    font-size: 11px;
    font-weight: normal;
    margin: 8px 0px;
  }
  .cards{
    display: inline-block;
  }
}
`;
