import React from "react";
import CareerTimelineList from "./CareerTimelineList";

const dummyList = [
  {
    id: 1,
    timeDate: "August 1, 2020 - August 31, 2022",
    timeTitle:
      "생물학연구정보센터 (Biological Research Information Center, BRIC)",
    timeSubTitle: "Front-End Web 개발 및 Webinar 담당",
    content1: "",
    content1Date: "",
    content2: "",
    content2Date: "",
  },
  {
    id: 2,
    timeDate: "December 23, 2019 - February 7, 2020",
    timeTitle: "케이페이스 (디디하우스)",
    timeSubTitle: "개발팀 인턴 근무",
    content1: "",
    content1Date: "",
    content2: "",
    content2Date: "",
  },
  {
    id: 3,
    timeDate: "August 2019 - December 2019",
    timeTitle: "한동대학교 전산전자 공학부 사무실 근로",
    timeSubTitle: "사무보조, 보조작업",
    content1: "",
    content1Date: "",
    content2: "",
    content2Date: "",
  },
  {
    id: 4,
    timeDate: "March 2015 - February 2020",
    timeTitle: "Handong Global Univ.",
    timeSubTitle: "Computer Engineering (Science and Electrical Engineering)",
    content1: "시선 (소외된 이웃을 위한 IT 솔루션 연구 학회)",
    content1Date: "March 2017 - July 2018",
    content2: "Student for Christ (학생신앙운동) 동아리",
    content2Date: "March 2015 - February 2020",
  },
  {
    id: 5,
    timeDate: "March 2012 - February 2015",
    timeTitle: "Angang Girls'High School",
    timeSubTitle: "Natural Sciences",
    content1: "",
    content1Date: "",
    content2: "",
    content2Date: "",
  },
];

function CareerTimeline() {
  return <CareerTimelineList careerList={dummyList} />;
}
export default CareerTimeline;