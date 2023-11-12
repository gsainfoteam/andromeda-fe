import styled from "styled-components";
import colorSet from "src/styles/color-set";
import { useState, useEffect } from "react";
import defaults from "src/styles/defaults";

export interface StarProps {
  color?: "green" | "purple";
  STAR_RATE: number;
  width: number;
}

const StarRateWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: ${defaults.borderRadius};
`;

const Star = (props: StarProps) => {
  const DefaultColor = "#1A1A1A";
  const RATE = props.STAR_RATE;
  const STAR_IDX_ARR = ["first", "second", "third", "fourth", "last"]; // 5개 별의 고유 id
  const [ratesResArr, setRatesResArr] = useState([0, 0, 0, 0, 0]);
  const calcStarRates = () => {
    let tempStarRatesArr = [0, 0, 0, 0, 0];
    let starVerScore = (RATE * 576 * 5) / 5; // 별 한 개 당 width가 576
    let idx = 0;
    while (starVerScore > 576) {
      // 별 하나하나에 채워질 width를 지정
      tempStarRatesArr[idx] = 576;
      idx += 1;
      starVerScore -= 576;
    }
    tempStarRatesArr[idx] = starVerScore;
    return tempStarRatesArr;
  };
  useEffect(() => {
    setRatesResArr(calcStarRates);
  }, []);
  const DefColor =
    props.color == "green"
      ? `${colorSet.galactic_green}`
      : `${colorSet.galactic_purple}`;

  return (
    <StarRateWrap>
      {STAR_IDX_ARR.map((item, idx) => {
        return (
          <span className="star_icon" key={`${item}_${idx}`}>
            <svg
              xmlns="hhttp://www.w3.org/2000/svg"
              width={props.width}
              height={props.width}
              viewBox="0 0 576 512"
              fill={DefaultColor}
            >
              <clipPath id={`${item}StarClip`}>
                <rect width={`${ratesResArr[idx]}`} height="512" />
              </clipPath>
              <path
                id={`${item}Star`}
                stroke={DefColor}
                stroke-width="35"
                d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
              />
              <use
                clipPath={`url(#${item}StarClip)`}
                href={`#${item}Star`}
                fill={DefColor}
              />
            </svg>
          </span>
        );
      })}
    </StarRateWrap>
  );
};

export default Star;
