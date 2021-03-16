import styled, { keyframes } from "styled-components";
import media from "styled-media-query";

import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";

const Slide = keyframes`
  from {  transform: scale(1.2)} 
  to {   transform: scale(1)}
  `;

export const Container = styled.div`
  width: 100%;
  margin: auto;
`;
export const ImgBox = styled.div`
  margin-bottom: 3rem;
  object-fit: cover;
  overflow-x: hidden;
`;
export const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.colors.titlePage};
  text-shadow: 3px 3px 2px rgba(115, 41, 55, 1);
  position: relative;
  padding-bottom: 1rem;
  max-width: 80%;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1rem;
    background: ${({ theme }) => theme.colors.titlePage};
    z-index: 0;
    box-shadow: 0 1px 1px rgba(115, 41, 55, 1);
  }

  ${media.greaterThan("large")`   
  font-size: 5rem;
  `}
`;

export const BgImage = styled(BackgroundImage)`
  width: unset !important;
  height: 100vh;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &::before,
  &::after {
    background-position: 50% 50% !important;
    animation-name: ${Slide};
    animation-duration: 5s;
    filter: opacity(0.7);
  }

  ${media.greaterThan("large")`
  height: 30rem;  
  `}
`;

export const ImgContent = styled(Img)``;
export const Content = styled.div`
  background: #fff;
  width: 95vw;
  height: 100%;
  margin: 5rem auto 2.5rem;
  padding: 2.5rem 0;
  border-radius: 0.5rem;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) and (max-width: 1024px) {
    max-width: 800px;
  }
  @media (min-width: 1025px) {
    max-width: 960px;
  }

  p {
    font-size: 3rem;
    line-height: 3.2rem;
    margin-bottom: 3rem;
    font-weight: 400;
    font-family: "Lora", serif;
  }
  h2 {
    margin: 3.2rem 0 1.6rem;
    font-size: 4.5rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary};
  }
  ${ImgContent} {
    width: 30rem;
    height: auto;
    margin: 2.5rem auto 3.5rem;
    padding: 2rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
`;

export const Article = styled.div`
  max-width: 95vw;
  margin: auto;
  background: #fff;
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .button {
    a {
      display: flex;
      justify-content: center;
      align-items: center;

      position: relative;

      width: 30rem;
      margin: 2.5rem auto;
      padding: 1rem;
      border: 0.1rem solid ${({ theme }) => theme.colors.primary};

      font-size: 1.6rem;
      text-decoration: none;
      color: #fff;
      background: ${({ theme }) => theme.colors.primary};

      cursor: pointer;

      > span {
        position: relative;
        font-weight: 500;
        color: #fff;
        font-size: 1.9rem;
        background-image: linear-gradient(
          90deg,
          var(#fff) 0%,
          var(#fff) 50%,
          var(#fff) 50%,
          var(#fff) 100%
        );
        background-repeat: repeat;
        background-size: 200%;
        background-position: 100% 0;
        -webkit-background-clip: text;
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
        background: #fff;

        transition: 0.5s;
      }

      &:hover {
        span {
          background-position: 0 0;

          color: ${({ theme }) => theme.colors.primary};
        }
        &::before {
          width: 100%;
        }
      }
    }
  }

  ${media.between("small", "large")`
    max-width: 70vw;
    min-height: 60vh;
  `}

  ${media.greaterThan("large")`
    max-width: 680px; 
    min-height: 60vh;
  `}
`;
