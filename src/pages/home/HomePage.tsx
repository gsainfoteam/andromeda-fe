import { useState } from "react";
import Icons from "src/assets/Icons";
import Button from "src/atoms/button/Button";
import Area from "src/atoms/containers/area/Area";
import Flex from "src/atoms/containers/flex/Flex";
import SearchInput from "src/atoms/searchinput/SearchInput";
import Spacer from "src/atoms/spacer/Spacer";
import IconButton from "src/molecules/button_icon/IconButton";
import colorSet from "src/styles/color-set";
import FilterMenu from "./FilterMenu";
import LectureListSection from "./LectureListSection";
import ReviewSection from "./ReviewSection";
import { ILectureList, lectureList } from "./data";

const HomePage = () => {
  const [clickedFilterButton, setClickedFilterButton] =
    useState<boolean>(false);
  const [selectedLecture, setSelectedLecture] = useState<ILectureList>(
    lectureList[0],
  );

  return (
    <Area>
      <Spacer height="25px" />
      <SearchInput
        width="46%"
        placeholder="강의명/교수명/과목코드"
        value="강의명/교수명/과목코드"
      />
      <Flex width="45%" justifyContent="end">
        <IconButton
          text="검색 필터"
          icon={<Icons.Filter fill={colorSet.titleText} />}
          onClick={() => setClickedFilterButton(!clickedFilterButton)}
        />
      </Flex>
      <FilterMenu isDisplayed={clickedFilterButton} />
      <Flex
        gap="10px"
        width="75%"
        justifyContent="center"
        alignItems="center"
        style={{ marginBlock: "25px" }}
      >
        <LectureListSection
          width="460px"
          height="900px"
          selectedLecture={selectedLecture}
          setSelectedLecture={setSelectedLecture}
        />
        <ReviewSection
          width={`calc(100% - 490px)`}
          height="900px"
          lecture={selectedLecture}
        />
      </Flex>
      <Spacer height="100px" />
    </Area>
  );
};

export default HomePage;
