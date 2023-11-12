import React from "react";
import styled, { css } from "styled-components";

import Font from "../../styles/fonts";

export interface TextProps {
  color?: React.CSSProperties["color"];
  font?: Font;
  size?: React.CSSProperties["fontSize"];
  textAlign?: React.CSSProperties["textAlign"];
}

// 폰트별 letter-spacing 도 추가해야할 수도

const Text = styled.p<TextProps>`
  margin: 0;
  ${({ font }) => {
    switch (font) {
      case Font.Black:
        return css`
          font-family: "Noto Sans KR", sans-serif;
          font-weight: 800;
        `;
      case Font.Bold:
        return css`
          font-family: "Noto Sans KR", sans-serif;
          font-weight: 700;
        `;
      case Font.Medium:
        return css`
          font-family: "Noto Sans KR", sans-serif;
          font-weight: 500;
        `;
      case Font.Regular:
        return css`
          font-family: "Noto Sans KR", sans-serif;
          font-weight: 400;
        `;
      case Font.Schweiz:
        return css`
          @font-face {
            font-family: "Schweiz";
            src: url("../src/assets/fonts/Schweiz.otf") format("opentype");
            font-weight: normal;
            font-style: normal;
          }

          font-family: "Schweiz", sans-serif;
        `;
    }
  }}
  background-color: transparent;
  font-size: ${({ size }) => size ?? undefined};
  text-align: ${({ textAlign }) => textAlign ?? "inherit"};
  color: ${({ color }) => color ?? "inherit"};
`;

export default Text;
