import styled, { css } from "styled-components";
import media from "styled-media-query";

import Background from "gatsby-background-image";
import Img from "gatsby-image";

export const Description = styled.div`
  display: flex;
  background: #d3d3d3;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50vh;
  margin: 3rem auto;
  overflow: hidden;
  position: relative;
  ${media.between("small", "large")`
  min-height: 100vh;
  `}

  ${media.greaterThan("large")`
 
    
  `}  
  ${media.greaterThan("medium")`
   
  `}
`;

export const Content = styled.div`
  display: block;
  position: absolute;
  width: 95vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  h2 {
    font-size: 4rem;
    line-height: 5rem;
    font-weight: 600;
    margin: 0 0 2rem 0;
    color: #fff;
  }
  p {
    font-size: 1.8rem;
    line-height: 2.5rem;
    color: #fff;
  }

  ${media.between("small", "large")`
   width: 60vw;

  `}

  ${media.greaterThan("large")`
    width: 70rem;    
  left: 30%;
  `}
`;

export const Flower = styled.div`
  width: 100%;
  height: 50vh;
  ${media.between("small", "large")`
    min-height: 100vh;
  `}

  ${media.greaterThan("large")`
    height: 50vh;
 
    
  `}  
  ${media.greaterThan("medium")`
    height: 100vh;
   
  `}
`;

export const ImgTest = styled(Img)`
  min-height: 50vh;
  &:before {
    width: 100%;
    min-height: 100%;
    content: " ";
    background: rgba(143, 113, 87, 0.9);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9;
  }
`;
