import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import CareerTimelineList from "./CareerTimelineList";

const dummyList1 = [
  {
    id: 1,
    timeDate: "August 1, 2020 - August 31, 2022",
    timeTitle:
      "생물학연구정보센터 (Biological Research Information Center, BRIC)",
    timeTitleLink: "https://www.ibric.org/",
    timeSubTitle: "Front-End Web 개발 및 Webinar 담당",
    content1: "",
    content1Date: "",
    content1Link: "",
    content2: "",
    content2Date: "",
    content2Link: "",
  },
  {
    id: 2,
    timeDate: "December 23, 2019 - February 7, 2020",
    timeTitle: "케이페이스 (디디하우스)",
    timeTitleLink: "https://www.ddhouse.co.kr/",
    timeSubTitle: "개발팀 인턴 근무",
    content1: "",
    content1Date: "",
    content1Link: "",
    content2: "",
    content2Date: "",
    content2Link: "",
  },
  {
    id: 3,
    timeDate: "August 2019 - December 2019",
    timeTitle: "한동대학교 전산전자 공학부 사무실 근로",
    timeTitleLink: "https://csee.handong.edu/",
    timeSubTitle: "사무보조, 보조작업",
    content1: "",
    content1Date: "",
    content1Link: "",
    content2: "",
    content2Date: "",
    content2Link: "",
  },
];
const dummyList2 = [
  {
    id: 1,
    timeDate: "March 2015 - February 2020",
    timeTitle: "Handong Global Univ.",
    timeTitleLink: "https://www.handong.edu/",
    timeSubTitle: "Computer Engineering (Science and Electrical Engineering)",
    content1: "시선 (소외된 이웃을 위한 IT 솔루션 연구 학회)",
    content1Date: "March 2017 - July 2018",
    content1Link: "https://www.facebook.com/forneighbor/",
    content2: "Student for Christ (학생신앙운동) 동아리",
    content2Date: "March 2015 - February 2020",
    content2Link: "https://sfc.or.kr/",
  },
  {
    id: 2,
    timeDate: "March 2012 - February 2015",
    timeTitle: "Angang Girls'High School",
    timeTitleLink: "http://school.gyo6.net/gj-yale",
    timeSubTitle: "Natural Sciences",
    content1: "",
    content1Date: "",
    content1Link: "",
    content2: "",
    content2Date: "",
    content2Link: "",
  },
];

function CareerTimeline() {
  return (
    <Grid container spacing={1} sx={{ mt: { sm: "5", xs: "0" } }}>
      <Grid item xs={12} sm={6}>
        <Box>
          <Typography
            sx={{
              typography: { sm: "h6", xs: "subtitle1" },
            }}
          >
            <b>EXPERIENCE</b>
          </Typography>
          <CareerTimelineList careerList={dummyList1} />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box>
          <Typography sx={{ typography: { sm: "h6", xs: "subtitle1" } }}>
            <b>EDUCATION</b>
          </Typography>
          <CareerTimelineList careerList={dummyList2} />
        </Box>
      </Grid>
    </Grid>
  );
}
export default CareerTimeline;
