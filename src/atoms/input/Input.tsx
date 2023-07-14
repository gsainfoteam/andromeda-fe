import React, { ChangeEvent } from "react";
import colorSet from "src/styles/color-set";
import defaults from "src/styles/defaults";
import styled from "styled-components";

import Font from "../../styles/fonts";
import Text from "../text/Text";

interface LabelProps {
  label: string;
}

interface HilightProps {
  hilight: boolean;
}

interface UniProps {
  width?: string;
}

interface TextInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;

  height?: string;

  // padding?: string;
  // color?: string;
  // fontFamily?: string;
  // fontWeight?: string;
  // fontSize?: string;
}

// Create interface props concatinating all the interfaces
interface InputProps
  extends LabelProps,
    UniProps,
    TextInputProps,
    HilightProps {}

const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  width,
  height,
  hilight,
}) => {
  const Input_Styled = styled.input<TextInputProps & HilightProps>`
    all: unset;

    width: calc(
      ${defaults.pageWidth} - 2 * ${defaults.pageSideGap} - 2 * 5px
    ); // 5px는 padding
    height: ${({ height }) => height ?? "23px"};

    padding: 10px 5px 10px;

    font-family: Noto Sans KR, sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: ${(props) =>
      props.hilight
        ? colorSet.colorless
        : colorSet.titleText}; // hilight 모드이면 colorless, 아니면 titleText

    border: none;

    ::placeholder {
      color: ${(props) =>
        props.hilight
          ? colorSet.colorless
          : colorSet.titleText}; // hilight 모드이면 colorless, 아니면 titleText
    }
  `;

  const Hr_Styled = styled.hr<HilightProps>`
    border: 0px;
    width: inherit; // inherit는 부모 태그의 width를 상속받음, 즉 div 태그의 width를 그대로 이어받게 됨
    margin: 0px;
    border-top: 1px solid;
    border-top-color: ${(props) =>
      props.hilight ? colorSet.galactic_green : colorSet.colorless};
  `;

  return (
    <div
      style={{
        width:
          width ?? `calc(${defaults.pageWidth} - 2 * ${defaults.pageSideGap})`,
      }}
    >
      {label && (
        <Text
          font={Font.Medium}
          size="14px"
          color={hilight ? colorSet.galactic_green : colorSet.colorless}
        >
          {label}
        </Text>
      )}
      <Input_Styled
        height={height}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        hilight={hilight}
      />
      <Hr_Styled hilight={hilight} />
    </div>
  );
};

export default Input;
