import React, { ChangeEvent, useState } from "react";
import Icons from "src/assets/Icons";
import colorSet from "src/styles/color-set";
import styled from "styled-components";

import Flex from "../containers/flex/Flex";

export interface SearchInputProps {
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  placeholder: string;
  value: string;
}

const StyledSearchInput = styled(Flex)`
  border-radius: 25px;
  border: 2px solid transparent; //투명한 boarder 생성
  background: linear-gradient(${colorSet.card}, ${colorSet.card}),
    // contents box 영역 색
    linear-gradient(
        to right,
        ${colorSet.galactic_green},
        ${colorSet.galactic_purple}
      ); // boarder 색
  background-origin: border-box; // border 영역을 backgrond 영역에 포함
  background-clip: content-box, border-box; // 첫 색은 content-box에 적용, 두 번째 색은 border-box에 적용

  box-sizing: border-box; // border-box로 box-sizing을 설정하면, width와 height는 content-box의 값이 된다.
`;

const Input = styled.input`
  flex-grow: 1;

  background-color: transparent;
  height: 45px;
  padding: 0 0 0 20px;

  font-family: Noto Sans KR, sans-serif;
  font-size: 16px;
  color: ${colorSet.colorless};

  outline: none;
  border: none;

  &::placeholder {
    color: ${colorSet.deselected};
  }
`;

const SearchButton = styled.button`
  flex-grow: 0;

  padding: 0 18px 0 0;

  background: none;
  border: none;
  cursor: pointer;
  outline: none;
`;

const SearchInput = (props: SearchInputProps) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    // Implement search logic
    console.log(`Searching for: ${searchValue}`);
  };

  return (
    <StyledSearchInput alignItems="center">
      <Input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder={props.placeholder}
      />
      <SearchButton onClick={handleSearch}>
        <Icons.Search size={"18px"} fill={colorSet.galactic_purple} />
      </SearchButton>
    </StyledSearchInput>
  );
};

export default SearchInput;
