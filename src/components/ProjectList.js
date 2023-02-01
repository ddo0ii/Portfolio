import React, { useEffect, useRef, useState } from "react";
import { Box, Grid, ImageList } from "@mui/material";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ProjectContent from "./ProjectContent";

const colors = {
  1: "#FFFFFF",
  2: "#21005D",
  3: "#959595",
  4: "#6750A4",
  5: "#EADDFF",
  100: "#C2E0FF",
  200: "#80BFFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: ${colors[2]};
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  /* width: 100%; */
  padding: 10px 15px;
  margin: 6px 6px;
  border: none;
  border-radius: 20px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${colors[5]};
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${colors[4]};
    color: ${colors[1]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)(
  ({ theme }) => `
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  padding: 20px 12px;
  // background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  // border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  // border-radius: 12px;
  // opacity: 0.6;
  `
);

const TabsList = styled(TabsListUnstyled)(
  ({ theme }) => `
  // min-width: 400px;
  // background-color: ${colors[500]};
  // border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  `
);

function ProjectList() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const [open, setOpen] = useState(false);

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <TabsUnstyled defaultValue={0}>
      <TabsList>
        <Tab>All</Tab>
        <Tab>Web Develop</Tab>
        <Tab>App Develop</Tab>
        <Tab>Design</Tab>
      </TabsList>
      <Box className="sa sa-right">
        <TabPanel className="letterEffectLeft" value={0}>
          <Grid container spacing={1}>
            {itemData1.map((item) => (
              <Grid item sm={4} xs={12} key={item.id}>
                <ProjectContent {...item} />
              </Grid>
            ))}

            {itemData2.map((item) => (
              <Grid item sm={4} xs={12} key={item.id}>
                <ProjectContent {...item} />
              </Grid>
            ))}
            {itemData3.map((item) => (
              <Grid item sm={4} xs={12} key={item.id}>
                <ProjectContent {...item} />
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel className="letterEffectLeft" value={1}>
          <Grid container spacing={1}>
            {itemData1.map((item) => (
              <Grid item sm={4} xs={12} key={item.id}>
                <ProjectContent {...item} />
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel className="letterEffectLeft" value={2}>
          <Grid container spacing={1}>
            {itemData2.map((item) => (
              <Grid item sm={4} xs={12} key={item.id}>
                <ProjectContent {...item} />
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel className="letterEffectLeft" value={3}>
          <Grid container spacing={1}>
            {itemData3.map((item) => (
              <Grid item sm={4} xs={12} key={item.id}>
                <ProjectContent {...item} />
              </Grid>
            ))}
          </Grid>
        </TabPanel>
      </Box>
    </TabsUnstyled>
  );
}

export default ProjectList;

const itemData1 = [
  {
    id: 1,
    pjType: "Web Develop",
    pjSImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fweb%2Fportfolio%2FpotfoliofirstScreen.jpg?alt=media&token=461eaab7-4009-4260-8445-73154d5519ab",
    pjImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fweb%2Fportfolio%2FpotfoliofirstScreen.jpg?alt=media&token=461eaab7-4009-4260-8445-73154d5519ab",
    pjTitle: "Portfolio",
    pjSubTitle: "",
    pjDuration: "OCTOBER 2022 - DECEMBER 2022",
    pjLecSite: "",
    pjSite: "https://ddo0ii.github.io/Portfolio/",
    pjGithub: "https://github.com/ddo0ii/Portfolio",
    pjBlog: "",
    pjYouTube: "https://youtu.be/O43uHwiimIk",
    pjDeTitle1: "LANGUAGE & TOOL",
    pjDeContent1_1: "React.js",
    pjDeContent1_2: "MUI System",
    pjDeContent1_3: "",
    pjDeContent1_4: "",
    pjDeTitle2: "ROLE",
    pjDeContent2: "기획 및 제작",
    pjDeTitle3: "INDUSTRY",
    pjDeContent3: "Solo",
    pjDeTitle4: "DURATION",
    pjDeContent4: "2 Months",
    pjDef:
      "React.js를 이용하여 제작했던 프로젝트, 활동 내역, 수상 내역, 자격 내역 등을 한눈에 보기 쉽게 포트폴리오로 작성하였다.",
    pjPrototype:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fweb%2Fportfolio%2FpotfolioScreen.jpg?alt=media&token=a086bd0a-6c92-45d2-98cf-5cd5e85bf6fb",
    pjPrototypeAlt: "",
    pjVideo: "https://www.youtube.com/embed/O43uHwiimIk",
  },
  {
    id: 2,
    pjType: "Web Develop",
    pjSImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fweb%2Fbric%2FbricIntroS.jpg?alt=media&token=4c0bf0f2-f131-4f7c-99b7-ff44926ac073",
    pjImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fweb%2Fbric%2FbricIntro.jpg?alt=media&token=6d96708c-edec-42e1-affe-bf15ce012c9a",
    pjTitle: "Biological Research Information Center",
    pjSubTitle: "포항공과대학교 산학협력단 소속(Front-End Web 개발)",
    pjDuration: "DECEMBER 2019 - FEBRUARY 2020",
    pjLecSite: "https://www.ibric.org/",
    pjSite: "",
    pjGithub: "",
    pjBlog: "",
    pjYouTube: "https://youtu.be/WjjAXr7XZkE",
    pjDeTitle1: "LANGUAGE & TOOL",
    pjDeContent1_1: "HTML JavaScript CSS",
    pjDeContent1_2: "Chart.js",
    pjDeContent1_3: "Bootstrap",
    pjDeContent1_4: "",
    pjDeTitle2: "ROLE",
    pjDeContent2: "기획 및 제작",
    pjDeTitle3: "INDUSTRY",
    pjDeContent3: "Solo",
    pjDeTitle4: "",
    pjDeContent4: "",
    pjDef:
      "10만 유저, 4700여개 기업과 함께하며 한국과학재단과 포항공과대학교의 지원으로 생물학계 연구자들에게 전문적인 정보 서비스를 제공하는 센터",
    pjPrototype:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fweb%2Fbric%2FbricPrototype.jpg?alt=media&token=613e6c52-6e55-4eac-87a5-cbd08d987956",
    pjPrototypeAlt: "",
    pjVideo: "https://www.youtube.com/embed/WjjAXr7XZkE",
  },
  {
    id: 3,
    pjType: "Web Develop",
    pjSImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fweb%2Fcalculator%2Fcal0_s.jpg?alt=media&token=8e6bce92-6d56-4041-ba9c-6e5e3b26d1c9",
    pjImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fweb%2Fcalculator%2Fcal0.jpg?alt=media&token=0e3d7823-bccd-46ab-94f0-7d0e1c0c392d",
    pjTitle: "부동산 계산기",
    pjSubTitle: "케이페이스 인턴(개발팀)",
    pjDuration: "DECEMBER 2019 - FEBRUARY 2020",
    pjLecSite: "",
    pjSite: "https://stoic-liskov-ec1c11.netlify.app/",
    pjGithub: "https://github.com/ddo0ii/dapp",
    pjBlog: "",
    pjYouTube: "https://youtu.be/XYXbrhirUIw",
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
      "부동산계산기를 웹페이지에서도 모바일에서도 편리하게 사용할 수 있도록 기획하고 구상하여 제작하였다.",
    pjPrototype:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fweb%2Fcalculator%2Fcal0.jpg?alt=media&token=0e3d7823-bccd-46ab-94f0-7d0e1c0c392d",
    pjPrototypeAlt: "부동산 계산기 화면",
    pjVideo: "https://www.youtube.com/embed/XYXbrhirUIw",
  },
  {
    id: 4,
    pjType: "Web Develop",
    pjSImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fweb%2Flisten%2Flisten0_s.jpg?alt=media&token=e34b9a3e-5567-4fd2-9510-8717274f0167",
    pjImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fweb%2Flisten%2Flisten0.jpg?alt=media&token=9ddcfe00-498c-49c3-ba8d-576037a2edbd",
    pjTitle: "진동벨이 필요 없는 카페 알림 시스템",
    pjSubTitle: "청각장애인을 위한 카페 시스템",
    pjDuration: "JULY 2017 - JULY 2018",
    pjLecSite: "",
    pjSite: "",
    pjGithub: "https://github.com/ddo0ii/capstone",
    pjBlog: "",
    pjYouTube: "https://youtu.be/5CEzAd3kDtg",
    pjDeTitle1: "LANGUAGE & TOOL",
    pjDeContent1_1: "PWA",
    pjDeContent1_2: "Node.js",
    pjDeContent1_3: "MongoDB",
    pjDeContent1_4: "",
    pjDeTitle2: "ROLE",
    pjDeContent2: "기획 및 제작",
    pjDeTitle3: "INDUSTRY",
    pjDeContent3: "Developer 3",
    pjDeTitle4: "DURATION",
    pjDeContent4: "1 Year",
    pjDef:
      "청각장애인은 물론 비장애인도 카페에서 음료 제조의 완료 알림을 받을 수 있고, 카페 매장 측은 마케팅 플랫폼으로 활용할 수 있는 시스템을 개발하였다.",
    pjPrototype:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fweb%2Flisten%2Flisten1.jpg?alt=media&token=3fe74a94-bbab-45b1-9a36-b2f3d7093a8b",
    pjPrototypeAlt: "진동벨이 필요 없는 카페 주문 완료 알림 시스템 제작 상세",
    pjVideo: "https://www.youtube.com/embed/5CEzAd3kDtg",
  },
  {
    id: 5,
    pjType: "Web Develop",
    pjSImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fweb%2Fpwa%2Fpwa0_s.jpg?alt=media&token=7a02d2b0-4c15-4412-923d-6ec27a0ed849",
    pjImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fweb%2Fpwa%2Fpwa0.jpg?alt=media&token=3f9f3ab8-8882-47c3-bb17-9f6bc8663e7f",
    pjTitle: "PWA를 활용한 웹 푸시 알림 시스템",
    pjSubTitle: "진동벨이 필요 없는 카페 주문 완료 알림 시스템 제작",
    pjDuration: "JULY 2017 - JULY 2018",
    pjLecSite: "",
    pjSite: "",
    pjGithub: "https://github.com/ddo0ii/capstone",
    pjBlog: "",
    pjYouTube: "https://youtu.be/5CEzAd3kDtg",
    pjDeTitle1: "LANGUAGE & TOOL",
    pjDeContent1_1: "PWA",
    pjDeContent1_2: "Node.js",
    pjDeContent1_3: "MongoDB",
    pjDeContent1_4: "",
    pjDeTitle2: "ROLE",
    pjDeContent2: "기획 및 제작",
    pjDeTitle3: "INDUSTRY",
    pjDeContent3: "Developer 3",
    pjDeTitle4: "DURATION",
    pjDeContent4: "1 Year",
    pjDef:
      "모바일 어플리케이션을 통해 지원되는 기존의 푸시 알림 서비스는 사용자가 관심 분야의 정보를 받아볼 수 있기 때문에 유용하다. 그러나, 기존의 푸시 알림 서비스는 사용 측면에서 명확한 한계를 가진다. 이에 개선된 형태의 푸시 알림 시스템이 요구된다.",
    pjPrototype:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fweb%2Fpwa%2Fpwa1_s.jpg?alt=media&token=27371e10-88ee-447f-9596-1990ad69341f",
    pjPrototypeAlt: "PWA를 활용한 웹 푸시 알림 시스템 상세",
    pjVideo: "https://www.youtube.com/embed/5CEzAd3kDtg",
  },

  {
    id: 6,
    pjType: "Web Develop",
    pjSImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fweb%2Fdiary%2Fdiary0_s.jpg?alt=media&token=f70d5048-cc69-4f03-a94d-bf937dcb11ba",
    pjImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fweb%2Fdiary%2Fdiary0.jpg?alt=media&token=e24c915e-ca03-4e7e-ae0d-c7f586c74ff4",
    pjTitle: "감정일기장",
    pjSubTitle: "한입 크기로 잘라 먹는 리액트 수강 및 이수",
    pjDuration: "Inflearn",
    pjLecSite:
      "https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%EB%A6%AC%EC%95%A1%ED%8A%B8#",
    pjSite: "https://ddo0ii-udemy-project.web.app/",
    pjGithub:
      "https://github.com/ddo0ii/inflearn_react/tree/main/emotion-diary",
    pjBlog:
      "https://ddo-development.tistory.com/category/React/%ED%95%9C%EC%9E%85%20%ED%81%AC%EA%B8%B0%EB%A1%9C%20%EC%9E%98%EB%9D%BC%20%EB%A8%B9%EB%8A%94%20%EB%A6%AC%EC%95%A1%ED%8A%B8%28React.js%29",
    pjYouTube: "https://youtu.be/hE4qm1l6Da4",
    pjDeTitle1: "LANGUAGE & TOOL",
    pjDeContent1_1: "React.js",
    pjDeContent1_2: "JavaScript",
    pjDeContent1_3: "Node.js",
    pjDeContent1_4: "Firebase",
    pjDeTitle2: "TRAINING TIME",
    pjDeContent2: "16 Hours 57 Minutes",
    pjDeTitle3: "",
    pjDeContent3: "",
    pjDeTitle4: "",
    pjDeContent4: "",
    pjDef:
      "Inflearn의 '한입 크기로 잘라 먹는 리액트(React.js) : 기초부터 실전까지'강의를 수강하여 JavaScript와 React의 기초적인 개념을 Blog에 기록하며 학습하였다. 최종적으로 React.js를 이용하여 감정일기장을 제작하고 Firebase를 이용하여 프로젝트를 배포하였다.",
    pjPrototype:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fweb%2Fdiary%2Fdiary1_s.png?alt=media&token=16957c73-9239-4021-9b64-cb7cf4598cf2",
    pjPrototypeAlt: "",
    pjVideo: "https://www.youtube.com/embed/hE4qm1l6Da4",
  },
  {
    id: 7,
    pjType: "Web Develop",
    pjSImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fweb%2Fmovie%2Fmovie_intro.JPG?alt=media&token=c3f962c3-29e5-48f7-8ea7-4b2fe4bd54af",
    pjImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fweb%2Fmovie%2Fmovie_intro.JPG?alt=media&token=c3f962c3-29e5-48f7-8ea7-4b2fe4bd54af",
    pjTitle: "영화 웹 서비스",
    pjSubTitle: "ReactJS로 영화 웹 서비스 만들기",
    pjDuration: "Nomad Coders",
    pjLecSite: "https://nomadcoders.co/react-for-beginners",
    pjSite: "https://ddo0ii.github.io/NomadCoders_React",
    pjGithub:
      "https://github.com/ddo0ii/NomadCoders_React/tree/main/react-for-begginners",
    pjBlog:
      "https://ddo-development.tistory.com/category/React/ReactJS%EB%A1%9C%20%EC%98%81%ED%99%94%20%EC%9B%B9%20%EC%84%9C%EB%B9%84%EC%8A%A4%20%EB%A7%8C%EB%93%A4%EA%B8%B0",
    pjYouTube: "https://youtu.be/jT91qmaHXIo",
    pjDeTitle1: "LANGUAGE & TOOL",
    pjDeContent1_1: "React.js",
    pjDeContent1_2: "Node.js",
    pjDeContent1_3: "CSS",
    pjDeContent1_4: "",
    pjDeTitle2: "FUNCTION",
    pjDeContent2: "JSX, State, Props, Class Components, Data Fetching, Routing",
    pjDeTitle3: "",
    pjDeContent3: "",
    pjDeTitle4: "",
    pjDeContent4: "",
    pjDef:
      "Nomad Coders의 'ReactJS로 영화 웹 서비스 만들기'를 수강하며 React의 기초적인 개념을 Blog에 기록하며 학습하였다. 최종적으로 React.js를 이용하여 영화 웹 서비스 페이지를 제작하고 Github를 이용하여 프로젝트를 배포하였다.",
    pjPrototype:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fweb%2Fmovie%2FMovie_w.png?alt=media&token=ef83d022-6f48-4f03-875b-fc18758fea26",
    pjPrototypeAlt: "",
    pjVideo: "https://www.youtube.com/embed/jT91qmaHXIo",
  },
  {
    id: 8,
    pjType: "Web Develop",
    pjSImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fweb%2Ftwitter%2Ftwitter_intro.JPG?alt=media&token=72ee8489-fce4-4ecc-b409-9319b25a5c93",
    pjImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fweb%2Ftwitter%2Ftwitter_intro.JPG?alt=media&token=72ee8489-fce4-4ecc-b409-9319b25a5c93",
    pjTitle: "Twitter Service",
    pjSubTitle: "트위터 클론코딩",
    pjDuration: "Nomad Coders",
    pjLecSite: "https://nomadcoders.co/nwitter",
    pjSite: "https://ddo0ii.github.io/Twitter_React_NomadCoders",
    pjGithub: "https://github.com/ddo0ii/Twitter_React_NomadCoders",
    pjBlog: "",
    pjYouTube: "https://youtu.be/IvrnrHmEoBo",
    pjDeTitle1: "LANGUAGE & TOOL",
    pjDeContent1_1: "React.js",
    pjDeContent1_2: "JavaScript",
    pjDeContent1_3: "Node.js",
    pjDeContent1_4: "Firebase",
    pjDeTitle2: "TOOL",
    pjDeContent2:
      "Firebase, Cloud Firestore, NoSQL Realtime, Query, Filter, Firebase Authentication, Google Cloud Storage",
    pjDeTitle3: "FUNCTION",
    pjDeContent3:
      "Email, Google, Github, Social Authentication, Tweet CRUD, Protected Pages, Profile Page, File Upload, Deploy, API Key Security",
    pjDeTitle4: "",
    pjDeContent4: "",
    pjDef:
      "Nomad Coders의 '트위터 클론코딩'을 수강하였다. 최종적으로 React.js와 Firebase를 이용하여 백엔드 코딩없이 인증 및 리얼타임 DB를 구현하여 로그인, 트윗작성, 수정 삭제 등의 기본적인 트위터 웹 페이지를 제작하고 Github를 이용하여 프로젝트를 배포하였다.",
    pjPrototype:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fweb%2Ftwitter%2Fnwitter_w.png?alt=media&token=e16cfd22-f06e-4fdd-8605-8409ea9bd43a",
    pjPrototypeAlt: "",
    pjVideo: "https://www.youtube.com/embed/IvrnrHmEoBo",
  },
];
const itemData2 = [
  {
    id: 1,
    pjType: "App Develop",
    pjSImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fapp%2Fitda%2Fitda0_s.jpg?alt=media&token=9dfc1b44-7242-464b-aa82-ca2e0f5f42fd",
    pjImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fapp%2Fitda%2Fitda0_s.jpg?alt=media&token=9dfc1b44-7242-464b-aa82-ca2e0f5f42fd",
    pjTitle: "잇다",
    pjSubTitle: "초등학생들을 위한 어플리케이션 제작",
    pjDuration: "MARCH 2020 - JULY 2020",
    pjLecSite: "",
    pjSite: "",
    pjGithub: "https://github.com/ddo0ii/Itda_flutter",
    pjBlog: "",
    pjYouTube: "",
    pjDeTitle1: "LANGUAGE & TOOL",
    pjDeContent1_1: "Flutter",
    pjDeContent1_2: "Firebase",
    pjDeContent1_3: "",
    pjDeContent1_4: "",
    pjDeTitle2: "ROLE",
    pjDeContent2: "제작",
    pjDeTitle3: "INDUSTRY",
    pjDeContent3: "Develpoer 2, Designer 1",
    pjDeTitle4: "DURATION",
    pjDeContent4: "5 Months",
    pjDef:
      "초등학생들이 자기주도적으로 마음을 다스리고 목표, 식사를 계획하여 가정과 학교를 이을 수 있게 어플리케이션을 제작하였다.",
    pjPrototype:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fapp%2Fitda%2Fitda0_s.jpg?alt=media&token=9dfc1b44-7242-464b-aa82-ca2e0f5f42fd",
    pjPrototypeAlt: "",
    pjVideo: "",
  },
  {
    id: 2,
    pjType: "App Develop",
    pjSImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fapp%2Fe2e%2Fe2e0_s.jpg?alt=media&token=7ef60f5a-1c40-4a14-8c90-c0479c56f692",
    pjImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fapp%2Fe2e%2Fe2e0_s.png?alt=media&token=072d1b08-eb46-4e4e-aa0d-254bfe0e2471",
    pjTitle: "Eyes2Ears",
    pjSubTitle: "노인들을 위한 어플리케이션 기획 및 제작",
    pjDuration: "MARCH 2017 - JULY 2017",
    pjLecSite: "",
    pjSite: "",
    pjGithub: "https://github.com/ddo0ii/Eyes2Ears_flutter",
    pjBlog: "",
    pjYouTube: "https://www.youtube.com/watch?v=s5NPzhmp7OU",
    pjDeTitle1: "LANGUAGE & TOOL",
    pjDeContent1_1: "Flutter",
    pjDeContent1_2: "Firebase",
    pjDeContent1_3: "Figma",
    pjDeContent1_4: "",
    pjDeTitle2: "ROLE",
    pjDeContent2: "기획 및 제작",
    pjDeTitle3: "INDUSTRY",
    pjDeContent3: "Develpoer 2",
    pjDeTitle4: "DURATION",
    pjDeContent4: "5 Months",
    pjDef:
      "노인들의 스마트폰 사용량이 증가함에 반해 노인들이 사용하기에 적합한 어플리케이션들이 많지 않고 편리하지도 않다. 노인들이 일상생활에서 필요한 기능들과 오락도 즐길 수 있는 어플리케이션을 구상하고 구현하였다.",
    pjPrototype:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fapp%2Fe2e%2Fe2e1_s.png?alt=media&token=e7fe5a79-d987-4806-bfc7-d807a84c36c6",
    pjPrototypeAlt: "",
    pjVideo: "https://www.youtube.com/embed/s5NPzhmp7OU",
  },
  {
    id: 3,
    pjType: "App Develop",
    pjSImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fapp%2Fsiren%2Fshh0_s.jpg?alt=media&token=be41c883-13c7-42f0-b07b-2dd975cccf76",
    pjImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fapp%2Fsiren%2Fshh0_s2.jpg?alt=media&token=f8afea49-87e0-4d2e-b82b-37cffafb0c37",
    pjTitle: "SIREN + SHH",
    pjSubTitle: "기숙사 내 침묵시간 소음 방지기 기획 및 제작",
    pjDuration: "MARCH 2017 - JULY 2017",
    pjLecSite: "",
    pjSite: "",
    pjGithub: "",
    pjBlog: "",
    pjYouTube: "https://www.youtube.com/watch?v=ZYuGDom_te4",
    pjDeTitle1: "LANGUAGE & TOOL",
    pjDeContent1_1: "Arduino",
    pjDeContent1_2: "",
    pjDeContent1_3: "",
    pjDeContent1_4: "",
    pjDeTitle2: "ROLE",
    pjDeContent2: "기획 및 제작",
    pjDeTitle3: "INDUSTRY",
    pjDeContent3: "Develpoer 3",
    pjDeTitle4: "DURATION",
    pjDeContent4: "5 Months",
    pjDef:
      "취침시간임에도 불구하고 기숙사내에서는 많은 소음들이 발생하는데, 소음 발생 자제 요청을 직접적으로 하기 어려움과 어느 방에서 소음을 내는지 알 수 없는 어려움을 해결하기위해 소음방지기를 제작",
    pjPrototype:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fapp%2Fsiren%2Fshh1_s.jpg?alt=media&token=f7734dc7-9a77-4fc0-ad9b-c78956b28e75",
    pjPrototypeAlt: "",
    pjVideo: "https://www.youtube.com/embed/ZYuGDom_te4",
  },
];
const itemData3 = [
  {
    id: 1,
    pjType: "Design",
    pjSImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fdesign%2Fbestep%2Fbestep1_s.jpg?alt=media&token=a323dacb-0446-4677-84e8-9aefcd70c369",
    pjImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fdesign%2Fbestep%2Fbestep1_s.jpg?alt=media&token=a323dacb-0446-4677-84e8-9aefcd70c369",
    pjTitle: "Bestep Center",
    pjSubTitle: "코딩 테스트 웹 페이지 기획 및 구상",
    pjDuration: "AUGUST 2019 - DECEMBER 2019",
    pjLecSite: "",
    pjSite: "",
    pjGithub: "",
    pjBlog: "",
    pjYouTube: "https://www.youtube.com/watch?v=JQCWEL09i4c",
    pjDeTitle1: "LANGUAGE & TOOL",
    pjDeContent1_1: "Figma",
    pjDeContent1_2: "",
    pjDeContent1_3: "",
    pjDeContent1_4: "",
    pjDeTitle2: "ROLE",
    pjDeContent2: "기획",
    pjDeTitle3: "INDUSTRY",
    pjDeContent3: "Develpoer 4",
    pjDeTitle4: "DURATION",
    pjDeContent4: "5 Months",
    pjDef:
      "코딩 테스트를 개최 및 진행할 수 있도록 웹 페이지를 기획 및 구상하였다.",
    pjPrototype:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fdesign%2Fbestep%2Fbestep0_s.png?alt=media&token=9001c607-0c53-40df-9ee1-4992e2fd71dc",
    pjPrototypeAlt: "",
    pjVideo: "https://www.youtube.com/embed/JQCWEL09i4c",
  },
];
