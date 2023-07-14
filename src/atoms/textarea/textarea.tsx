import React, { ChangeEvent, useState } from "react";
import colorSet from "src/styles/color-set";
import defaults from "src/styles/defaults";
import Font from "src/styles/fonts";
import styled from "styled-components";

import Text from "../text/Text";

interface TextareaProps {
  // value: string;
  placeholder?: string;
  width?: string;
  height?: string;
  maxLength: number;
  //label?: string;
  // fontFamily?: string;
  // fontWeight?: string;
  // fontSize?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  width,
  height,
  maxLength,
  // value,
  //label,
}) => {
  const [textLength, setTextLength] = useState<number>(0);
  const [text, setText] = useState<string>("");

  const Textarea_Styled = styled.textarea<TextareaProps>`
    width: ${({ width }) =>
      width ?? `calc(${defaults.pageWidth} - 2 * ${defaults.pageSideGap})`};
    height: ${({ height }) => height ?? "138px"};
    padding: 13px 15px 8px;
    line-height: 23px;

    /* font */
    font-family: Noto Sans KR, sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: ${colorSet.titleText};

    resize: none;
    outline: none;
    border-radius: ${defaults.borderRadius};
    background: transparent;
    border: 1.5px solid ${colorSet.colorless};
  `;

  const Length_Styled = styled(Text)`
    width: ${width ??
    `calc(${defaults.pageWidth} - 2 * ${defaults.pageSideGap} + 2 * 15px)`}; // 15px는 padding

    text-align: right;
    margin-top: 5px;
  `;

  const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setText(newText);
    setTextLength(newText.length);
  };

  return (
    <div>
      <Textarea_Styled
        value={text}
        width={width}
        height={height}
        onChange={handleOnChange}
        placeholder={placeholder}
        maxLength={maxLength}
      />

      <Length_Styled
        color={colorSet.titleText}
        font={Font.Regular}
        size={"14px"}
      >
        {textLength}/{maxLength}
      </Length_Styled>
    </div>
  );
};
export default Textarea;
