import React from "react";
import { Box, Container } from "@mui/material";
import TopTitle from "../components/TopTitle";
import ProjectTabs from "../components/ProjectTabs";

const projectData = [
  {
    id: 1,
    pjType: "Web Develop",
    pjImage: "/images/projectImg/project1.jpg",
    pjTitle: "부동산 계산기Web Develop",
    pjSubTitle: "케이페이스 인턴(개발팀)",
    pjDuration: "DECEMBER 2019 - FEBRUARY 2020",
    pjDeTitle1: "LANGUAGE & TOOL",
    pjDeContent1_1: "Vue.js",
    pjDeContent1_2: "Nuxt.js",
    pjDeContent1_3: "Daum 도로명주소 API",
    pjDeContent1_4: "HTML",
    pjDeTitle2: "ROLE",
    pjDeContent2: "기획 및 제작",
    pjDeTitle3: "INDUSTRY",
    pjDeContent3: "Solo",
    pjDeTitle4: "DURATION",
    pjDeContent4: "2 Months",
    pjDef:
      "부동산계산기를 웹페이지에서도 모바일에서도 편리하게 사용할 수 있도록 깔끔한 디자인으로 기획하고 구상하여 제작하였다.",
    pjPrototype: "/images/projectImg/project1_1.jpg",
    pjPrototypeAlt: "부동산 계산기 화면",
    pjVideo: "https://www.youtube.com/embed/5CEzAd3kDtg",
  },
  {
    id: 2,
    pjType: "App Develop",
    pjImage: "/images/projectImg/project1.jpg",
    pjTitle: "부동산 계산기App Develop",
    pjSubTitle: "케이페이스 인턴(개발팀)",
    pjDuration: "DECEMBER 2019 - FEBRUARY 2020",
    pjDeTitle1: "LANGUAGE & TOOL",
    pjDeContent1_1: "Vue.js",
    pjDeContent1_2: "Nuxt.js",
    pjDeContent1_3: "Daum 도로명주소 API",
    pjDeContent1_4: "HTML",
    pjDeTitle2: "ROLE",
    pjDeContent2: "기획 및 제작",
    pjDeTitle3: "INDUSTRY",
    pjDeContent3: "Solo",
    pjDeTitle4: "DURATION",
    pjDeContent4: "2 Months",
    pjDef:
      "부동산계산기를 웹페이지에서도 모바일에서도 편리하게 사용할 수 있도록 깔끔한 디자인으로 기획하고 구상하여 제작하였다.",
    pjPrototype: "/images/projectImg/project1_1.jpg",
    pjPrototypeAlt: "부동산 계산기 화면",
    pjVideo: "https://www.youtube.com/embed/5CEzAd3kDtg",
  },
  {
    id: 3,
    pjType: "Design",
    pjImage: "/images/projectImg/project1.jpg",
    pjTitle: "부동산 계산기 Design",
    pjSubTitle: "케이페이스 인턴(개발팀)",
    pjDuration: "DECEMBER 2019 - FEBRUARY 2020",
    pjDeTitle1: "LANGUAGE & TOOL",
    pjDeContent1_1: "Vue.js",
    pjDeContent1_2: "Nuxt.js",
    pjDeContent1_3: "Daum 도로명주소 API",
    pjDeContent1_4: "HTML",
    pjDeTitle2: "ROLE",
    pjDeContent2: "기획 및 제작",
    pjDeTitle3: "INDUSTRY",
    pjDeContent3: "Solo",
    pjDeTitle4: "DURATION",
    pjDeContent4: "2 Months",
    pjDef:
      "부동산계산기를 웹페이지에서도 모바일에서도 편리하게 사용할 수 있도록 깔끔한 디자인으로 기획하고 구상하여 제작하였다.",
    pjPrototype: "/images/projectImg/project1_1.jpg",
    pjPrototypeAlt: "부동산 계산기 화면",
    pjVideo: "https://www.youtube.com/embed/5CEzAd3kDtg",
  },
  {
    id: 4,
    pjType: "App Develop",
    pjImage: "/images/projectImg/project1.jpg",
    pjTitle: "부동산 계산기App Develop",
    pjSubTitle: "케이페이스 인턴(개발팀)",
    pjDuration: "DECEMBER 2019 - FEBRUARY 2020",
    pjDeTitle1: "LANGUAGE & TOOL",
    pjDeContent1_1: "Vue.js",
    pjDeContent1_2: "Nuxt.js",
    pjDeContent1_3: "Daum 도로명주소 API",
    pjDeContent1_4: "HTML",
    pjDeTitle2: "ROLE",
    pjDeContent2: "기획 및 제작",
    pjDeTitle3: "INDUSTRY",
    pjDeContent3: "Solo",
    pjDeTitle4: "DURATION",
    pjDeContent4: "2 Months",
    pjDef:
      "부동산계산기를 웹페이지에서도 모바일에서도 편리하게 사용할 수 있도록 깔끔한 디자인으로 기획하고 구상하여 제작하였다.",
    pjPrototype: "/images/projectImg/project1_1.jpg",
    pjPrototypeAlt: "부동산 계산기 화면",
    pjVideo: "https://www.youtube.com/embed/5CEzAd3kDtg",
  },
  {
    id: 5,
    pjType: "Design",
    pjImage: "/images/projectImg/project1.jpg",
    pjTitle: "부동산 계산기Design",
    pjSubTitle: "케이페이스 인턴(개발팀)",
    pjDuration: "DECEMBER 2019 - FEBRUARY 2020",
    pjDeTitle1: "LANGUAGE & TOOL",
    pjDeContent1_1: "Vue.js",
    pjDeContent1_2: "Nuxt.js",
    pjDeContent1_3: "Daum 도로명주소 API",
    pjDeContent1_4: "",
    pjDeTitle2: "ROLE",
    pjDeContent2: "기획 및 제작",
    pjDeTitle3: "INDUSTRY",
    pjDeContent3: "Solo",
    pjDeTitle4: "DURATION",
    pjDeContent4: "2 Months",
    pjDef:
      "부동산계산기를 웹페이지에서도 모바일에서도 편리하게 사용할 수 있도록 깔끔한 디자인으로 기획하고 구상하여 제작하였다.",
    pjPrototype: "/images/projectImg/project1_1.jpg",
    pjPrototypeAlt: "부동산 계산기 화면",
    pjVideo: "https://www.youtube.com/embed/5CEzAd3kDtg",
  },
];

function Projects() {
  return (
    <Box
      sx={{
        pt: { sm: "50px", xs: "20px" },
        pb: { sm: "100px", xs: "80px" },
      }}
    >
      <Container>
        <TopTitle subTitle="MY PORTFOLIO" realTitle="PROJECTS" />
        <ProjectTabs projectList={projectData} />
      </Container>
    </Box>
  );
}

export default Projects;
