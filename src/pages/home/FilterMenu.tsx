import { string } from "prop-types";
import { useState } from "react";
import Flex from "src/atoms/containers/flex/Flex";
import Text from "src/atoms/text/Text";
import DepartmentButton, {
  DepartmentButtonVariant,
} from "src/molecules/button_department/DepartmentButton";
import SelectButton from "src/molecules/button_select/SelectButton";
import colorSet from "src/styles/color-set";
import Font from "src/styles/fonts";

interface IDepartment {
  code: string;
  name: string;
}

interface FilterMenuProps {
  isDisplayed: boolean;
}

const FilterMenu = ({ isDisplayed }: FilterMenuProps) => {
  const majors: IDepartment[] = [
    { code: "UC", name: "공통" },
    { code: "GS", name: "기초" },
    { code: "EC", name: "전컴" },
    { code: "MA", name: "신소재" },
    { code: "MC", name: "기계" },
    { code: "EV", name: "지환공" },
    { code: "BS", name: "생명" },
    { code: "PS", name: "물리" },
    { code: "CH", name: "화학" },
  ];
  const minors: IDepartment[] = [
    { code: "MM", name: "수학" },
    { code: "MD", name: "의생공" },
    { code: "ET", name: "에너지" },
    { code: "CT", name: "문화기술" },
    { code: "IR", name: "지능로봇" },
    { code: "LH", name: "인문사회" },
    { code: "AI", name: "AI융합" },
  ];
  const [selectedMajor, setSelectedMajor] = useState<IDepartment>(majors[0]);
  const [selectedMinor, setSelectedMinor] = useState<IDepartment>(minors[0]);
  const handleClickMajor = (
    e: React.MouseEvent<HTMLButtonElement>,
    newSelectedMajor: IDepartment,
  ) => {
    setSelectedMajor(newSelectedMajor);
  };
  const handleClickMinor = (
    e: React.MouseEvent<HTMLButtonElement>,
    newSelectedMinor: IDepartment,
  ) => {
    setSelectedMinor(newSelectedMinor);
  };
  const sortOptionList = [
    "기본",
    "별점 높은순",
    "별점 낮은순",
    "총평 많은순",
    "총평 적은순",
    "평균 수강신청 난이도 높은 순",
    "평균 수강신청 난이도 낮은 순",
  ];
  const searchOptionList = [
    "강의 이름으로 검색",
    "교수명으로 검색",
    "과목코드로 검색",
  ];

  return (
    <Flex
      flexDirection="column"
      alignItems="start"
      width="47%"
      style={{ display: isDisplayed ? undefined : "none" }}
    >
      <Text
        color={colorSet.titleText}
        font={Font.Bold}
        size="20px"
        textAlign="start"
      >
        전공 - GIST대학
      </Text>
      <Flex alignItems="start" gap="13px" style={{ marginBlock: "15px 30px" }}>
        {majors.map((major, idx) => {
          return (
            <DepartmentButton
              key={idx}
              departmentCode={major.code}
              departmentName={major.name}
              variant={
                selectedMajor.code == major.code &&
                selectedMajor.name == major.name
                  ? DepartmentButtonVariant.selectedMajor
                  : undefined
              }
              onClick={(e) => handleClickMajor(e, major)}
            ></DepartmentButton>
          );
        })}
      </Flex>
      <Text
        color={colorSet.titleText}
        font={Font.Bold}
        size="20px"
        textAlign="start"
      >
        부전공 - GIST대학
      </Text>
      <Flex alignItems="start" gap="13px" style={{ marginBlock: "15px 30px" }}>
        {minors.map((minor, idx) => (
          <DepartmentButton
            key={idx}
            departmentCode={minor.code}
            departmentName={minor.name}
            variant={
              selectedMinor.code == minor.code &&
              selectedMinor.name == minor.name
                ? DepartmentButtonVariant.selectedMinor
                : undefined
            }
            onClick={(e) => handleClickMinor(e, minor)}
          ></DepartmentButton>
        ))}
      </Flex>
      <Flex alignItems="center" gap="90px" style={{ marginBlock: "5px 30px" }}>
        <Text
          color={colorSet.titleText}
          font={Font.Bold}
          size="20px"
          textAlign="start"
        >
          정렬
        </Text>
        <SelectButton
          minWidth="300px"
          placeholder="기본"
          options={sortOptionList}
        ></SelectButton>
      </Flex>
      <Flex alignItems="center" gap="48px">
        <Text
          color={colorSet.titleText}
          font={Font.Bold}
          size="20px"
          textAlign="start"
        >
          검색 옵션
        </Text>
        <SelectButton
          minWidth="300px"
          placeholder="기본"
          options={searchOptionList}
        ></SelectButton>
      </Flex>
    </Flex>
  );
};
export default FilterMenu;
