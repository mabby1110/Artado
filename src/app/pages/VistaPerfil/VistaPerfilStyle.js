import styled from "@emotion/styled";

export const UserSectionStyle = styled.div`
  grid-column: 2 / 3;

  display: flex;
  row-gap: 4px;
  flex-direction: column;
  .userPic {
    position: absolute;
    bottom: 0;
    z-index: 1;
    .userImg {
      border-radius: 50%;
      border: solid 4px var(--principal);
      width: 12rem;
    }
  }
  .userInfoSection {
    background-color: Var(--fondo_seccion);
    display: flex;
    border-radius: 12px;
  }

  .userProfileBanner {
    flex-grow: 1;
    height: 20rem;
    display: flex;
    position: relative;

    img {
      flex-grow: 1;
      object-fit: cover;
      width:100%;
      border-radius: 12px;
      
    }
  .picFilter{
    background-image: linear-gradient(to bottom, rgb(0 0 0 / 37%) 56%, #0f0c0c 100%);
    content: '';
    display: block;
    z-index: 1;
    width: 100%;
    height: 100%;
    position: absolute;
  }
  }
`;
