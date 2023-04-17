import styled from "@emotion/styled";

export const PostCardFullStyle = styled.div`
  background-color: Var(--fondo_componente);
  border-radius: 12px;
  margin-bottom: 10px;
  display: flex;
  width: 100%;
  //grid-template-columns: minmax(auto, 1056px);
  //grid-template-rows: 6fr auto;
  //position: relative;
  .postContainer {
    display: grid;
    position: relative;
  }
  .postImgHead {
    grid-area: 1;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .postInfoTwo {
    grid-area: 3;
    display: grid;
    grid-template-columns: 15rem auto;
    .sectionOne {
      grid-area: 3/1;
    }
    .sectionTwo {
      grid-area: 3/2;
    }
  }
  .postInfoOne {
    grid-area: 2;
    display: grid;
    grid-template-columns: 15rem auto;
    .postImgMin {
      grid-area: 2/1;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      img{
        width:100%;
        height: 15rem;
        object-fit: cover;
      }
    }
    .sectionInfo {
      grid-area: 2/2;
      p {
        margin-left: 1.5rem;
        margin-right: 0.5rem;
      }
      .sectionTwo {
        flex-grow: 1;
        flex-shrink: 3;
        h3 {
          margin-bottom: 10px;
        }
        .colabsOne {
          margin-left: 1.5rem;
          width: 65%;
          .colabContainer {
            white-space: pre-wrap;
            position: absolute;
            overflow: hidden;
            display: -webkit-box;
            margin-right: 24%;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
          }
          p {
            display: inline-block;
            margin: 0;
            margin-right: 5px;
          }
        }
      }
    }
  }

  .postInfoThree {
    grid-area: 4;
    .sectionContent{
      width: 0rem;
    }
  }
  .postInfoFour {
    grid-area: 5;
  }

  .postBtn {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    .showM {
      background: none;
      border: navajowhite;
      font-size: 1rem;
      color: #6931c0;
    }
  }
  /*
  padding-bottom: 3em;
  position: relative;
  overflow: hidden;
  min-width: auto;
  max-width: 1056px;

  .postText {
    .sectionOne {
      margin-left: 10px;
      display: inline-block;
      width: 40%;
      h1 {
        margin: 0;
        font-weight: normal;
        font-size: 42px;
      }
      p {
        font-size: 12px;
        margin: 0;
        margin-top: 0.5rem;
      }
    }
    .sectionTwo {
      margin-left: 4em;
      display: inline-block;
      vertical-align: top;
      h3 {
        font-size: 16px;
        margin-top: 1rem;
        font-weight: normal;
        margin-bottom: 18px;
      }
      li {
        list-style: none;
        p {
          margin: 0;
          font-size: 10px;
          margin-left: 1rem;
        }
        .checkContainer {
          display: block;
          position: relative;
          padding-left: 35px;
          margin-bottom: 12px;
          cursor: pointer;
          font-size: 22px;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }
        .checkS {
          position: absolute;
          top: 0;
          left: 0;
          height: 0.6rem;
          width: 0.6rem;
          border: solid white 1px;
          border-radius: 3px;
        }
        .checkS:after {
          content: "";
          position: absolute;
          display: none;
        }

        .checkContainer input:checked ~ .checkS:after {
          display: block;
        }

        .checkContainer .checkS:after {
          left: 3px;
          top: 0px;
          width: 0.05rem;
          height: 0.4rem;
          border: solid white;
          border-width: 0 3px 3px 0;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
        }
      }
    }
    .buttons {
      position: absolute;
      bottom: 5px;
      right: 0;
      text-align: right;
      margin-right: 10px;
      .showM {
        vertical-align: middle;
      }
      .postB {
        font-size: 20px;
        border: none;
        margin-left: 20px;
        background: Var(--principal);
        text-decoration: none;
        border-radius: 7px;
        font-size: 20px;
        padding: 4px 20px;
      }
    }
  } */
`;
