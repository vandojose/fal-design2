import styled, { css } from "styled-components";

import Img from "gatsby-image";

export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 350px);
  grid-gap: 1rem;
  margin: 10rem 0;
`;

export const CategoryFilter = styled.div`
  ul {
    display: flex;
    list-style: none;
    li {
      padding: 1rem;
      span {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;
export const BgImage = styled(Img)``;

export const Card = styled.div`
  visibility: visible;
  opacity: 1;
  padding: 1em;
  background: #fff;
  transition: 0.2s;
  border: 0.1rem solid ${({ theme }) => theme.colors.primary};
  h3 {
    position: absolute;
    left: 0;
    right: 0;
    font-size: 2rem;
    text-transform: uppercase;

    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    position: relative;
    padding-bottom: 0.3rem;
    max-width: 80%;
    margin-bottom: 0.2rem;
  }
  a {
    text-decoration: none;
    .cardContent {
      object-fit: cover;
      overflow: hidden;
      position: relative;
      ${BgImage} {
        width: 100%;
        height: 25rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 1s;
        opacity: 0.9;
      }
    }
    .cardExverpt {
      padding: 1rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 85%;
      z-index: 0;
      transition: 0.5s;
      opacity: 0;
      p {
        font-size: 1rem;
        line-height: 2.5rem;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.text};
      }
    }
    .cardCategory {
      position: absolute;
      font-size: 0.7rem;
      bottom: 0;
      right: 0;
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.body};
      padding: 0.3rem;
      margin: 0.3rem;
    }
  }
  &:hover {
    a {
      text-decoration: none;

      .cardContent {
        ${BgImage} {
          transform: scale(1.1);
          opacity: 0.3;
        }
      }
      .cardExverpt {
        opacity: 1;
      }
    }
  }
`;
