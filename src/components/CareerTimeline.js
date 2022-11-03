import React from "react";

import CareerTimelineList from "./CareerTimelineList";
import { Box } from "@mui/system";

const dummyList = [
  {
    id: 1,
    timeDate: "March 2015 - February 2020",
    timeTitle: "Handong Global Univ.",
    timeSubTitle: "Computer Engineering (Science and Electrical Engineering)",
    content1: "시선 (소외된 이웃을 위한 IT 솔루션 연구 학회)",
    content1Date: "March 2017 - July 2018",
    content2: "Student for Christ(학생신앙운동) 동아리",
    content2Date: "March 2015 - February 2020",
  },
  {
    id: 2,
    timeDate: "August 1, 2020 - August 31, 2022",
    timeTitle:
      "생물학연구정보센터(Biological Research Information Center, BRIC)",
    timeSubTitle: "Front-End Web 개발 및 Webinar 담당",
    content1: "시선 (소외된 이웃을 위한 IT 솔루션 연구 학회)",
    content1Date: "March 2017 - July 2018",
    content2: "Student for Christ(학생신앙운동) 동아리",
    content2Date: "March 2015 - February 2020",
  },
];

function CareerTimeline() {
  return <CareerTimelineList careerList={dummyList} />;
}
export default CareerTimeline;
