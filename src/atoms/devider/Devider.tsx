import React from "react";
import styled from "styled-components";

interface DeviderProps {
  width?: React.CSSProperties["width"];
  borderWidth?: React.CSSProperties["borderWidth"];
  color?: React.CSSProperties["color"];
}

const Devider = styled.hr<DeviderProps>`
  border: none;
  width: ${({ width }) => (width ? width : "inherit")};
  margin: 0px;
  border-top-width: ${({ borderWidth }) =>
    borderWidth ? borderWidth : undefined};
  border-top-style: solid;
  border-top-color: ${({ color }) => (color ? color : undefined)};
`;

export default Devider;
