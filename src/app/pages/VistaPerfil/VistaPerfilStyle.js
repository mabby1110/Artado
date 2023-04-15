import styled from '@emotion/styled';

export const UserSectionStyle = styled.div`
  grid-column: 2 / 3;
  
  display: flex;
  row-gap: 4px;
  flex-direction: column;

  .userInfoSection {
        background-color: Var(--fondo_seccion);
        display: flex;
        border-radius: 12px;
  }

  .userProfileBanner {
    flex-grow: 1;
    height: 500px;
    display: flex;

    img {
      flex-grow: 1;
      object-fit: cover;
      border-radius: 12px;
    }
  }
`;