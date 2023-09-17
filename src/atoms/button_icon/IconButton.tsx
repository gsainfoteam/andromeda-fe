import React from "react";
import styled from "styled-components";

import Icon from "../icon/Icon";
import Text from "../text/Text";
import Font from "src/styles/fonts";
import colorSet from "src/styles/color-set";

interface UniProps {
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
}

interface TextProps {
  text: string;
  fontSize?: React.CSSProperties["fontSize"];
}

interface ButtonProps extends UniProps, TextProps {}

const Wrapper = styled.button<UniProps>`
  min-width: ${({ width }) => (width ? width : undefined)};
  width: fit-content;
  height: ${({ height }) => (height ? height : undefined)};
  background-color: transparent;
  transition: 0.1s;
  border-radius: 10px;
  border: none;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  padding: 20px 14px;

  :hover {
    cursor: pointer;
    box-shadow: inset rgba(0, 0, 0, 0.15) 0px 0px 0px 40px;
  }
  :active {
    transform: scale(0.95);
  }
`;

const IconButton = ({ width, height, text, fontSize }: ButtonProps) => {
  return (
    <Wrapper width={width} height={height}>
      <Text color={colorSet.titleText} font={Font.Medium} size={fontSize}>
        {text}
      </Text>
      <Icon.FilterGray height={`calc(${height}*0.8)`} />
    </Wrapper>
  );
};

export default IconButton;
