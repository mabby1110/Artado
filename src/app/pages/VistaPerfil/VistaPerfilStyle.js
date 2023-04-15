import styled from '@emotion/styled';

export const UserSectionStyle = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-around;
  .midSection {
    width: 100%;
  }
  .userSection1 {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    .userTopSection {
      display: flex;
      gap: 10px;
      height: 23%;
    }
    .userDownSection {
      display: flex;
      gap: 10px;
    }
    .downSubSection2 {
      width: 100%;
      .userInfoSection {
        background-color: Var(--fondo_seccion);
        display: flex;
        width: 100%;
        margin-top: 5px;
        border-radius: 7px;
        .aboutSection {
          margin: 10px;
        }
        .projectsSection {
          margin: 10px;
        }
        .gallerySection {
          margin: 10px;
        }
      }
    }
  }
  .userBanner {
    width: 100%;
    object-fit: cover;
  }
`;