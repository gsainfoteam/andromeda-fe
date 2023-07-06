import React, { ChangeEvent } from 'react';

interface TextareaProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
//label?: string;
  placeholder?: string;
  width?: string;
  height?: string;
  padding? : string;
  lineHeight?: string;
  fontFamily?: string;
  fontWeight?: string;
  fontSize?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  value,
  onChange,
//label,
  placeholder,
  width,
  height,
  padding,
  lineHeight,
  fontFamily,
  fontWeight,
  fontSize,
}) => {
    const textareaStyle: React.CSSProperties = {
        width,
        height,
        padding,
        lineHeight,
        fontFamily,
        fontSize,
        fontWeight,
      };
  return (
    <div>
        <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={textareaStyle}
    />
    </div>
  );
};
export default Textarea;

/*
    {label && <label >{label}</label>}
*/