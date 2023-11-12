import React, { Dispatch, SetStateAction } from "react";
import Flex from "src/atoms/containers/flex/Flex";
import LectureCard from "src/molecules/lectureCard/LectureCard";
import styled from "styled-components";
import { ILectureList, lectureList } from "./data";
import colorSet from "src/styles/color-set";

interface LectureListProps {
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  selectedLecture: ILectureList;
  setSelectedLecture: Dispatch<SetStateAction<ILectureList>>;
}

const SectionWrapper = styled(Flex)`
  padding: 20px;
  border-top: 4px solid ${colorSet.deselected};
  border-bottom: 4px solid ${colorSet.deselected};
  box-sizing: border-box;
  overflow-y: auto;
  flex-wrap: nowrap;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const LectureListSection = ({
  width,
  height,
  selectedLecture,
  setSelectedLecture,
}: LectureListProps) => {
  const handleClickLecture = (
    e: React.MouseEvent<HTMLDivElement>,
    newSelectedLecture: ILectureList,
  ) => {
    setSelectedLecture(newSelectedLecture);
  };
  return (
    <SectionWrapper
      flexDirection="column"
      justifyContent="start"
      alignItems="center"
      gap="20px"
      width={width}
      height={height}
    >
      {lectureList.map((lecture, idx) => (
        <LectureCard
          key={idx}
          hilight={selectedLecture === lecture ? true : false}
          width={`calc(${width} - 40px)`}
          height="200px"
          lecture={lecture}
          onClick={(e) => handleClickLecture(e, lecture)}
        ></LectureCard>
      ))}
    </SectionWrapper>
  );
};

export default LectureListSection;
