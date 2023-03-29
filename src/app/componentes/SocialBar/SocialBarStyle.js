import styled from '@emotion/styled';

export const SocialBarStyle = styled.div`
background-color: Var(--fondo_seccion);
color: white;
width: min-content;
padding: 5px;
border-radius:10px;
display: flex;
flex-wrap: wrap; 
flex-direction: column;
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
