import React from "react";
import { Box, Container, Grid } from "@mui/material";
import TopTitle from "../components/TopTitle";
import ALCList from "../components/ALCList";

const alcData = [
  {
    id: 1,
    alcImage: "/images/projectImg/project1.jpg",
    alcTitle: "국경 없는 과학자 기술자 회장상",
    alcSubTitle: "제 10회 소외된 90%를 위한 창의설계 경진대회",
    alcOrganizer: "과학기술정보통신부",
    alcDate: "DECEMBER 2019 - FEBRUARY 2020",
    alcDeTitle1: "LANGUAGE & TOOL",
    alcDeContent1_1: "Vue.js",
    alcDeContent1_2: "Nuxt.js",
    alcDeContent1_3: "Daum 도로명주소 API",
    alcDeContent1_4: "HTML",
    alcDeTitle2: "ROLE",
    alcDeContent2: "기획 및 제작",
    alcDeTitle3: "INDUSTRY",
    alcDeContent3: "Solo",
    alcDeTitle4: "DURATION",
    alcDeContent4: "2 Months",
    alcDef:
      "부동산계산기를 웹페이지에서도 모바일에서도 편리하게 사용할 수 있도록 깔끔한 디자인으로 기획하고 구상하여 제작하였다.",
    alcPrototypeAlt: "alcPrototypeAlt",
    alcPrototype: "/images/projectImg/project1_1.jpg",
  },
  {
    id: 2,
    alcImage: "/images/projectImg/project1.jpg",
    alcTitle: "국경 없는 과학자 기술자 회장상2",
    alcSubTitle: "제 10회 소외된 90%를 위한 창의설계 경진대회",
    alcOrganizer: "과학기술정보통신부",
    alcDate: "DECEMBER 2019 - FEBRUARY 2020",
    alcDeTitle1: "LANGUAGE & TOOL",
    alcDeContent1_1: "Vue.js",
    alcDeContent1_2: "Nuxt.js",
    alcDeContent1_3: "Daum 도로명주소 API",
    alcDeContent1_4: "HTML",
    alcDeTitle2: "ROLE",
    alcDeContent2: "기획 및 제작",
    alcDeTitle3: "INDUSTRY",
    alcDeContent3: "Solo",
    alcDeTitle4: "DURATION",
    alcDeContent4: "2 Months",
    alcDef:
      "부동산계산기를 웹페이지에서도 모바일에서도 편리하게 사용할 수 있도록 깔끔한 디자인으로 기획하고 구상하여 제작하였다.",
    alcPrototypeAlt: "alcPrototypeAlt",
    alcPrototype: "/images/projectImg/project1_1.jpg",
  },
  {
    id: 3,
    alcImage: "/images/projectImg/project1.jpg",
    alcTitle: "국경 없는 과학자 기술자 회장상3",
    alcSubTitle: "제 10회 소외된 90%를 위한 창의설계 경진대회",
    alcOrganizer: "과학기술정보통신부",
    alcDate: "DECEMBER 2019 - FEBRUARY 2020",
    alcDeTitle1: "LANGUAGE & TOOL",
    alcDeContent1_1: "Vue.js",
    alcDeContent1_2: "Nuxt.js",
    alcDeContent1_3: "Daum 도로명주소 API",
    alcDeContent1_4: "HTML",
    alcDeTitle2: "ROLE",
    alcDeContent2: "기획 및 제작",
    alcDeTitle3: "INDUSTRY",
    alcDeContent3: "Solo",
    alcDeTitle4: "DURATION",
    alcDeContent4: "2 Months",
    alcDef:
      "부동산계산기를 웹페이지에서도 모바일에서도 편리하게 사용할 수 있도록 깔끔한 디자인으로 기획하고 구상하여 제작하였다.",
    alcPrototypeAlt: "alcPrototypeAlt",
    alcPrototype: "/images/projectImg/project1_1.jpg",
  },
  {
    id: 4,
    alcImage: "/images/projectImg/project1.jpg",
    alcTitle: "국경 없는 과학자 기술자 회장상4",
    alcSubTitle: "제 10회 소외된 90%를 위한 창의설계 경진대회",
    alcOrganizer: "과학기술정보통신부",
    alcDate: "DECEMBER 2019 - FEBRUARY 2020",
    alcDeTitle1: "LANGUAGE & TOOL",
    alcDeContent1_1: "Vue.js",
    alcDeContent1_2: "Nuxt.js",
    alcDeContent1_3: "Daum 도로명주소 API",
    alcDeContent1_4: "HTML",
    alcDeTitle2: "ROLE",
    alcDeContent2: "기획 및 제작",
    alcDeTitle3: "INDUSTRY",
    alcDeContent3: "Solo",
    alcDeTitle4: "DURATION",
    alcDeContent4: "2 Months",
    alcDef:
      "부동산계산기를 웹페이지에서도 모바일에서도 편리하게 사용할 수 있도록 깔끔한 디자인으로 기획하고 구상하여 제작하였다.",
    alcPrototypeAlt: "alcPrototypeAlt",
    alcPrototype: "/images/projectImg/project1_1.jpg",
  },
];

function ALC() {
  return (
    <Box
      sx={{
        pt: { sm: "50px", xs: "20px" },
        pb: { sm: "100px", xs: "80px" },
      }}
    >
      <Container>
        <TopTitle
          subTitle="QUALIFICATION"
          realTitle="AWARD & LICENSE & CERTIFICATE"
        />
        <ALCList alcList={alcData} />
      </Container>
    </Box>
  );
}

export default ALC;
