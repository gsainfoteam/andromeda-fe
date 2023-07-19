import styled from "styled-components";
import React, {useState, ChangeEvent } from 'react';
import colorSet from "src/styles/color-set";

export interface SearchInputProps {
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  placeholder: string;
  value:string;
}

const StyledSearchInput = styled.div`
  position: relative;
  display: inline-block;

  input {
    width: 352px;
    height: 45px;
    padding: 0px;

    border-radius: 20px;
    border: 2px solid transparent; //투명한 boarder 생성
    background: 
      linear-gradient(#222, #222), // contents box 영역 색
      linear-gradient(to right, ${colorSet.galactic_green}, ${colorSet.galactic_purple}); // boarder 색
    background-origin: border-box; // border 영역을 backgrond 영역에 포함
    background-clip: content-box, border-box; // 첫 색은 content-box에 적용, 두 번째 색은 border-box에 적용

    font-family: Noto Sans KR, sans-serif;
    font-size: 16px;
    color: #a0a0a0;
    outline: none;

    &::placeholder {
      color: #474747;
    }
  }

  button {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
  }
`;

const SearchIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: #666;
`;

const SearchInput = (props: SearchInputProps) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    // Implement search logic
    console.log(`Searching for: ${searchValue}`);
  };

  return (
    <StyledSearchInput>
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder={props.placeholder}
      />
      <button onClick={handleSearch}>
        <SearchIcon viewBox="0 0 16 16">
          <path
            fill={colorSet.galactic_purple}
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
          />
        </SearchIcon>
      </button>
    </StyledSearchInput>
  );
};

export default SearchInput;