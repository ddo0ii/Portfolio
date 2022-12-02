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
    actPrototype1:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/activities%2Fss.jpg?alt=media&token=09062509-b3a4-48e0-8412-f7f0632602f7",
    actPrototype2: "",
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
    actPrototype1:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/activities%2Fhd_sfc.jpg?alt=media&token=0c777f8b-84f7-4c2d-ba92-cca2a9a9f9c0",
    actPrototype2: "",
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
    actPrototype1:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/activities%2Fgd_sfc1.jpg?alt=media&token=0b009d38-eecf-49ff-ad5e-d78c9cac1e03",
    actPrototype2:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/activities%2Fgd_sfc2.jpg?alt=media&token=27feaa5f-c038-4d85-9e1b-fb882f09c8d4",
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
    actPrototype1:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/activities%2Fsma.jpg?alt=media&token=8d0c3bb1-6e62-4129-b722-bb1d001c74d9",
    actPrototype2: "",
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
    actPrototype1:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/activities%2Fstar1.jpg?alt=media&token=c245cd26-9b70-4ef9-922d-b4a0e262337a",
    actPrototype2:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/activities%2Fstar2.jpg?alt=media&token=589c635d-9d42-4814-9ec2-7b3a14aea05d",
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
