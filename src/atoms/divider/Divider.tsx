import React from "react";
import styled, { css } from "styled-components";
import colorSet from "src/styles/color-set";

export enum DividerVariant {
  bold = "bold",
}

interface DividerProps {
  width?: React.CSSProperties["width"];
  variant?: DividerVariant;
}

const Divider = styled.hr<DividerProps>`
  border: none;
  width: ${({ width }) => (width ? width : "inherit")};
  margin: 0px;
  border-top-style: solid;

  ${({ variant }) => {
    switch (variant) {
      case DividerVariant.bold:
        return css`
          border-top-width: 4px;
          border-top-color: ${colorSet.deselected};
        `;

      default:
        return css`
          border-top-width: 1px;
          border-top-color: ${colorSet.titleText};
        `;
    }
  }}
`;

export default Divider;
