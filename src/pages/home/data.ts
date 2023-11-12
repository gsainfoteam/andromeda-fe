// 강의 정보

export interface ILectureList {
  title: string;
  departure: string;
  professor: string;
  lectureCode: string;
}

export const lectureList: ILectureList[] = [
  {
    title: "세포・발생생물학 실험",
    departure: "생명과학부",
    professor: "홍길동",
    lectureCode: "BS3112",
  },
  {
    title: "종교와 과학",
    departure: "기초교육학부",
    professor: "이용주",
    lectureCode: "GS3663",
  },
  {
    title: "과학기술학의 이해: 과학사회논쟁의 쟁점과 윤리",
    departure: "인문학・사회과학 부전공",
    professor: "하대청",
    lectureCode: "SS3831",
  },
  {
    title: "그래피컬 시스템 디자인 프로그래밍   ",
    departure: "기계공학부",
    professor: "양성",
    lectureCode: "MC4208",
  },
  {
    title: "그래피컬 시스템 디자인 프로그래밍   ",
    departure: "기계공학부",
    professor: "양성",
    lectureCode: "MC4208",
  },
];

// 평가 정보

// export interface IReviewList extends ILectureList {}
// export enum SemesterVariant {
//   spring = "봄",
//   summer = "여름",
//   autumn = "가을",
//   winter = "겨울",
// }
// interface CommentInfoProps {
//   year: number;
//   semester: SemesterVariant;
//   content: string;
// }
export interface IReviewList {
  year: number;
  semester: string;
  content: string;
}

export const reviewList: IReviewList[] = [
  {
    year: 22,
    semester: "가을",
    content:
      "아니 이 강의 좋은데 왜 아무도 듣지 않는 것이지? 아니 이 강의 좋은데 왜 아무도 듣지 않는 것이지? 아니 이 강의 좋은데 왜 아무도 듣지 않는 것이지? ",
  },
  {
    year: 21,
    semester: "가을",
    content: "자네들 머리가 이상한가? A0가 기본이라네. ",
  },
  {
    year: 21,
    semester: "가을",
    content: "자네들 머리가 이상한가? A0가 기본이라네. ",
  },
  {
    year: 21,
    semester: "가을",
    content: "자네들 머리가 이상한가? A0가 기본이라네. ",
  },
  {
    year: 21,
    semester: "가을",
    content: "자네들 머리가 이상한가? A0가 기본이라네. ",
  },
];
