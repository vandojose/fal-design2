import styled, { css } from "styled-components";
import media from "styled-media-query";

import Img from "gatsby-image";

export const Description = styled.div`
  display: flex;
  ${(props) =>
    props.side === "left"
      ? css`
          flex-direction: column-reverse;
        `
      : css`
          flex-direction: column;
        `}

  justify-content: space-between;
  align-items: center;
  max-width: 90vw;
  margin: 3rem auto;
  overflow: hidden;
  ${media.between("small", "large")`
    max-width: 55vw;

  `}

  ${media.greaterThan("large")`
    max-width: 1024px;   
    margin: 10rem auto;
    
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start; 
  `}
`;

export const Content = styled.div`
  display: block;

  span {
    font-size: 4rem;
    line-height: 5rem;
    font-weight: 600;
    margin: 0 0 2rem 0;
  }
  p {
    font-size: 2rem;
    line-height: 2.5rem;
    margin-bottom: 2.5rem;
  }
  a {
    position: relative;
    font-weight: 700;

    width: 20rem;
    margin: 2.5rem auto;
    padding: 1rem;
    border: 0.1rem solid ${({ theme }) => theme.colors.primary};

    font-size: 2rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    background: #fff;

    cursor: pointer;

    > span {
      position: relative;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.primary};
      font-size: 1.9rem;
      background-image: linear-gradient(
        90deg,
        var(${({ theme }) => theme.colors.primary}) 0%,
        var(${({ theme }) => theme.colors.primary}) 50%,
        var(${({ theme }) => theme.colors.primary}) 50%,
        var(${({ theme }) => theme.colors.primary}) 100%
      );
      background-repeat: repeat;
      background-size: 200%;
      background-position: 100% 0;

      background-clip: text;
      transition: 0.5s;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background: ${({ theme }) => theme.colors.primary};

      transition: 0.5s;
    }

    &:hover {
      span {
        background-position: 0 0;

        color: #fff;
      }
      &::before {
        width: 100%;
      }
    }
  }

  ${media.between("small", "large")`
   width: 55vw;

  `}

  ${media.greaterThan("large")`
    width: 100%;    
  `}
`;

export const Flower = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ImgTest = styled(Img)`
  margin: 1rem;
  width: 55rem;
  height: auto;
`;
