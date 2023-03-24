import styled from '@emotion/styled';

export const SocialBarStyle = styled.div`
background: #2e2d2d;
color: white;
width: min-content;
padding: 5px;
display: flex;
flex-wrap: wrap;
flex-direction: column;
.titleSection{
  display: inline-block;
  h2{
    font-size: 24px;
    margin: 0;
  }
}
.cardSection{
  h5{
    font-size: 14px;
    margin: 6px 0px;
  }
  .cards{
    display: inline-block;
  }
}
`;
