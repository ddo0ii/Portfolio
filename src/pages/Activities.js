import React from "react";
import { Box, Container } from "@mui/material";
import TopTitle from "../components/TopTitle";
import ActivitiesList from "../components/ActivitiesList";

const actiData = [
  {
    id: 1,
    actImage: "/images/projectImg/project1.jpg",
    actTitle: "시선 학회 / 한동대학교",
    actSubTitle: "소외된 이웃을 위한 IT 솔루션 연구 학회",
    actOrganizer: "",
    actDate: "MARCH 2017 - JULY 2018",
    actDeTitle1: "",
    actDeContent1_1: "",
    actDeContent1_2: "",
    actDeContent1_3: "",
    actDeContent1_4: "",
    actDeTitle2: "",
    actDeContent2: "",
    actDeTitle3: "INDUSTRY",
    actDeContent3: "Developer 4",
    actDeTitle4: "DURATION",
    actDeContent4: "2 Months",
    actDef: "",
    actPrototype1: "",
    actPrototype2: "/images/projectImg/project1_1.jpg",
  },
  {
    id: 2,
    actImage: "/images/projectImg/project1.jpg",
    actTitle: "Student for Christ / 한동대학교",
    actSubTitle: "학생신앙운동",
    actOrganizer: "",
    actDate: "MARCH 2015 - FEBRUARY 2020",
    actDeTitle1: "",
    actDeContent1_1: "",
    actDeContent1_2: "",
    actDeContent1_3: "",
    actDeContent1_4: "",
    actDeTitle2: "",
    actDeContent2: "",
    actDeTitle3: "",
    actDeContent3: "",
    actDeTitle4: "DURATION",
    actDeContent4: "2 Months",
    actDef:
      "개혁주의 신앙인으로서 하나님 중심, 성경 중심, 교회 중심의 삶을 이 땅에서 살아내기위해 힘쓰며 배우고 고민함",
    actPrototype1: "",
    actPrototype2: "/images/projectImg/project1_1.jpg",
  },
  {
    id: 3,
    actImage: "/images/projectImg/project1.jpg",
    actTitle: "Student for Christ / 경북동부지방소속",
    actSubTitle: "학생신앙운동",
    actOrganizer: "",
    actDate: "MARCH 2015 - FEBRUARY 2020",
    actDeTitle1: "",
    actDeContent1_1: "",
    actDeContent1_2: "",
    actDeContent1_3: "",
    actDeContent1_4: "",
    actDeTitle2: "",
    actDeContent2: "",
    actDeTitle3: "",
    actDeContent3: "",
    actDeTitle4: "DURATION",
    actDeContent4: "2 Months",
    actDef:
      "경북동부지방(경주,영천,울릉,포항)에 있는 청소년들을 대상으로 수련회와 각종 행사들을 담당하여 주최하고 참여. 경북동부지방에 있는 대학생들과 리더로서 자질을 갖추기 위한 교육을 받고 함께 소통함",
    actPrototype1: "",
    actPrototype2: "/images/projectImg/project1_1.jpg",
  },
  {
    id: 4,
    actImage: "/images/projectImg/project1.jpg",
    actTitle: "Social Maker Academy 참여 / 한동대학교",
    actSubTitle: "",
    actOrganizer: "",
    actDate: "AUGUST 05, 2019 - AUGUST 08 2020",
    actDeTitle1: "LANGUAGE & TOOL",
    actDeContent1_1: "Fusion 360",
    actDeContent1_2: "",
    actDeContent1_3: "",
    actDeContent1_4: "",
    actDeTitle2: "ROLE",
    actDeContent2: "기획 및 제작",
    actDeTitle3: "INDUSTRY",
    actDeContent3: "Developer 3",
    actDeTitle4: "",
    actDeContent4: "",
    actDef:
      "휠체어를 사용하는 환자의 신체에 맞게 발판 조정이 가능한 휠체어 3D모델링을 사용하여 프로토타입 제작",
    actPrototype1: "",
    actPrototype2: "/images/projectImg/project1_1.jpg",
  },
  {
    id: 5,
    actImage: "/images/projectImg/project1.jpg",
    actTitle: "이방의 빛 차세대 지도자 훈련원",
    actSubTitle: "",
    actOrganizer: "",
    actDate: "AUGUST 05, 2019 - AUGUST 08 2020",
    actDeTitle1: "",
    actDeContent1_1: "",
    actDeContent1_2: "",
    actDeContent1_3: "",
    actDeContent1_4: "",
    actDeTitle2: "",
    actDeContent2: "",
    actDeTitle3: "INDUSTRY",
    actDeContent3: "Member 7",
    actDeTitle4: "DURATION",
    actDeContent4: "2 Months",
    actDef:
      "하나님 나라의 백성으로 살아가는데 필요한 영성훈련과 공동체 훈련, 매월 1회 합숙훈련(1박 2일), 국내 비전트립, 미국&멕시코 비전트립",
    actPrototype1: "",
    actPrototype2: "/images/projectImg/project1_1.jpg",
  },
];

function Activities() {
  return (
    <Box
      sx={{
        pt: { sm: "50px", xs: "20px" },
        pb: { sm: "100px", xs: "80px" },
      }}
    >
      <Container>
        <TopTitle subTitle="MY PRACTICAL EXPERIENCE" realTitle="ACTIVITIES" />
        <ActivitiesList actiData={actiData} />
      </Container>
    </Box>
  );
}

export default Activities;
