interface IconProps {
  size?: React.CSSProperties["width"];
  fill: React.CSSProperties["fill"];
}

export const IconDirection = {
  UP: "rotate(0deg)",
  DOWN: "rotate(180deg)",
  LEFT: "rotate(270deg)",
  RIGHT: "rotate(90deg)",
};

interface IconDirectionProps {
  direction?: keyof typeof IconDirection;
}

/* eslint-disable */
const Icons = ({ size, fill }: IconProps) => {
  return;
};

const Filter = ({ size = "24px", fill }: IconProps) => {
  return (
    <svg
      width={size ?? "24px"}
      height={size ?? "24px"}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.75 21.25V23.75H11.25V21.25H3.75ZM3.75 6.25V8.75H16.25V6.25H3.75ZM16.25 26.25V23.75H26.25V21.25H16.25V18.75H13.75V26.25H16.25ZM8.75 11.25V13.75H3.75V16.25H8.75V18.75H11.25V11.25H8.75ZM26.25 16.25V13.75H13.75V16.25H26.25ZM18.75 11.25H21.25V8.75H26.25V6.25H21.25V3.75H18.75V11.25Z"
        fill={fill}
      />
    </svg>
  );
};

const Search = ({ size = "24px", fill }: IconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16">
      <path
        fill={fill}
        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
      />
    </svg>
  );
};

const Arrow = ({
  size = "24px",
  fill,
  direction = "UP",
}: IconProps & IconDirectionProps) => {
  return (
    <svg
      width={size}
      height={size}
      style={{ transform: IconDirection[direction] }}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.40039 14.3003L11.0004 7.70032L17.6004 14.3003"
        stroke={fill}
        strokeWidth="2"
      />
    </svg>
  );
};

Icons.Filter = Filter;
Icons.Search = Search;
Icons.Arrow = Arrow;

export default Icons;
