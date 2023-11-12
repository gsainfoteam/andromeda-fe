import React, { useState, useEffect } from "react";
import colorSet from "src/styles/color-set";
import defaults from "src/styles/defaults";
import Flex from "../containers/flex/Flex";

import { v4 as uuidv4 } from "uuid"; // UUID 라이브러리

export interface StarProps {
  color?: "green" | "purple";
  starsize: number;
  ablehalf?: boolean;
}

const StarInput = ({ color, starsize, ablehalf }: StarProps) => {
  const uniqueId = uuidv4();
  const STAR_IDX_ARR = ["first", "second", "third", "fourth", "last"]; // 5개 별의 고유 id

  const default_rating = ablehalf ? 0.5 : 1.0;

  const [rating, setRating] = useState(default_rating);
  const [ratesResArr, setRatesResArr] = useState([0, 0, 0, 0, 0]);

  const handleStarClick = (
    index: number,
    event: React.MouseEvent<SVGSVGElement, MouseEvent>,
  ) => {
    const clickX =
      event.clientX - event.currentTarget.getBoundingClientRect().left;
    const newRating = index + (clickX > starsize / 2 ? 1.0 : default_rating);
    setRating(newRating);
  };

  const calculateRatesResArr = (rating: number) => {
    return [0, 1, 2, 3, 4].map((idx) => {
      if (rating >= idx + 1) {
        return 576; // Full star
      } else if (rating > idx && rating < idx + 1) {
        return 288; // Half star
      } else {
        return 0; // Empty star
      }
    });
  };

  useEffect(() => {
    const newRatesResArr = calculateRatesResArr(rating);
    setRatesResArr(newRatesResArr);
  }, [rating]);

  const DefaultColor = "#1A1A1A";
  const DefColor =
    color === "green" ? colorSet.galactic_green : colorSet.galactic_purple;

  return (
    <Flex
      alignItems="center"
      gap="6px"
      style={{ borderRadius: defaults.borderRadius }}
    >
      {STAR_IDX_ARR.map((item, idx) => {
        return (
          <span className="star_icon" key={`${item}_${idx}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={starsize}
              height={starsize}
              viewBox="0 0 576 512"
              fill={DefaultColor}
              style={{
                cursor: "pointer",
                // fill: idx < Math.ceil(rating) ? DefColor : DefaultColor,
                verticalAlign: "middle",
              }}
              onClick={(e) => handleStarClick(idx, e)}
            >
              <clipPath id={`${item}StarClip-${uniqueId}`}>
                <rect width={`${ratesResArr[idx]}`} height="512" />
              </clipPath>
              <path
                id={`${item}Star-${uniqueId}`}
                stroke={DefColor}
                stroke-width="35"
                d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
              />
              <use
                clipPath={`url(#${item}StarClip-${uniqueId})`}
                href={`#${item}Star-${uniqueId}`}
                fill={DefColor}
              />
            </svg>
          </span>
        );
      })}
    </Flex>
  );
};

export default StarInput;
