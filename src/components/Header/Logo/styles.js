import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  transition: width 0.5s;
  ${(props) =>
    props.scroll > 100
      ? css`
          width: 20rem;
        `
      : css`
          width: 23rem;
        `}
  ${media.greaterThan("large")`
        ${(props) =>
          props.scroll > 100
            ? css`
                width: 17rem;
              `
            : css`
                width: 27rem;
              `} 
        `}
`;
