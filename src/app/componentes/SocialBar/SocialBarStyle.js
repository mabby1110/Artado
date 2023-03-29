import styled from '@emotion/styled';

export const SocialBarStyle = styled.div`
  background: var(--fondo_seccion);
  padding: 0.75rem;
  border-radius: 10px;
  color: var(--texto_primario);
  width: min-content;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  .titleSection{
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
  }
`
