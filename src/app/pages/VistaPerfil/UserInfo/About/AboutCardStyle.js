import styled from "@emotion/styled";

export const AboutCardStyle = styled.div`
  margin: 10px;
  .sectionContent {
    margin-left: 2rem;
    margin-bottom: 2rem;
  }
  .basicInfo {
    display: inline-block;
    margin: 0;
    .userName {
      display: inline-block;
      margin: 0;
      margin-right: 15%;
      vertical-align: top;
      h4 {
        display: inline-block;
        margin: 0;
      }
      .userName1 {
        margin-right: 2rem;
      }
    }
    .userExtra {
      display: inline-block;
      margin: 0;
      h4 {
        display: inline-block;
        margin: 0;
      }
      .userLang {
        display: inline-block;
        margin-right: 2rem;
      }
      .userLoc {
        display: inline-block;
        vertical-align: top;
        h4 {
          margin-right: 1rem;
        }
        p {
          display: inline-block;
          margin: 0;
        }
      }
    }
    .userDesc {
    }
  }
  .sectionFilters {
    margin-right: 4rem;
    display: inline-block;
    .filterBox {
      display: inline-block;
      margin: 0;
      margin-left: 1rem;
      border: 1px solid;
      padding: 1rem;
      .filterOnly{
        margin-right:0.3rem;
      }
    }
  }
  .contactInfo {
    vertical-align: top;
    display: inline-block;
    margin: 0;
    .contactTypes {
      display: inline-block;
      margin: 0;
      margin-left: 1rem;
      p {
        display: block;
        margin: 0;
        margin-bottom: 1rem;
      }
    }
  }
`;
