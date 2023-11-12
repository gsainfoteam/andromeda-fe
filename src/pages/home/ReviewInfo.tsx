import Flex from "src/atoms/containers/flex/Flex";
import Text from "src/atoms/text/Text";
import colorSet from "src/styles/color-set";
import Font from "src/styles/fonts";
import { IReviewList } from "./data";

interface ReviewInfoProps {
  review: IReviewList;
}

const ReviewInfo = ({ review }: ReviewInfoProps) => {
  return (
    <Flex flexDirection="column" gap="6px">
      <Text color={colorSet.titleText} font={Font.Bold} size="20px">
        {review.year}년도 {review.semester}학기 수강자
      </Text>
      <Text
        color={colorSet.colorless}
        font={Font.Medium}
        size="18px"
        style={{ lineHeight: "1.4" }}
      >
        {review.content}
      </Text>
    </Flex>
  );
};

export default ReviewInfo;
