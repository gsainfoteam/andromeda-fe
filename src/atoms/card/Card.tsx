import colorSet from "src/styles/color-set";
import styled from "styled-components";

export interface CardProps {
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  hilight: boolean;
}

const Card = styled.div<CardProps>`
  width: ${({ width }) => width ?? "100%"};
  height: ${({ height }) => height ?? "auto"};

  box-sizing: border-box;
  padding: 15px;

  background-color: ${colorSet.card};
  border-radius: 10px;
  box-shadow: ${({ hilight }) =>
    hilight
      ? `0 0 0 2px ${colorSet.galactic_green}`
      : `0 0 0 2px ${colorSet.deselected}`};
`;

export default Card;
