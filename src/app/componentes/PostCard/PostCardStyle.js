import styled from '@emotion/styled'
import { css } from '@emotion/react';

export const PostCardStyle = styled.div`
  background-color: Var(--fondo_componente);
  border-radius: 10px;
  padding-bottom: 3em;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 17em;
    object-fit: cover;
  }
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
      a {
        vertical-align: middle;
      }
      button {
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
  }
`;