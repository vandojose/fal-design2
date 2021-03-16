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
  margin: 9rem auto 2.5rem;
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
    font-size: 1.6rem;
    line-height: 3.2rem;
    margin-bottom: 3rem;
    font-weight: 400;
    font-family: "Lora", serif;
  }
  h2 {
    margin: 3.2rem 0 1.6rem;
    font-size: 2.2rem;
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

export const Article = styled.article`
  max-width: 95vw;
  margin: auto;
  background: #fff;
  padding: 1.6rem;
  p {
    span {
      text-transform: italic;
    }
  }

  ul {
    max-width: 60rem;
    margin: auto;
    font-size: 1.5rem;
    line-height: 3.2rem;
    margin-bottom: 3rem;
    font-weight: 400;
    font-family: "Lora", serif;
    padding: 0 2rem 0 0;
    list-style-type: none;

    li {
      margin-left: 3.6rem;
      position: relative;
      &::before {
        content: " ";
        background: ${({ theme }) => theme.colors.secondary};
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 0.2rem solid ${({ theme }) => theme.colors.primary};
        left: -2.5rem;
        top: 1rem;
        width: 0.5rem;
        height: 0.5rem;
        z-index: 400;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      }
    }
  }

  ${media.between("small", "large")`
    max-width: 70vw;
  `}

  ${media.greaterThan("large")`
    max-width: 680px; 
  `}
`;
