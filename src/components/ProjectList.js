import React, { useEffect, useRef, useState } from "react";
import { Box, Grid, ImageList } from "@mui/material";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ProjectBox from "./ProjectBox";

const colors = {
  1: "#C27D5B",
  2: "#DEDEDE",
  3: "#959595",
  4: "#3F3F3F",
  5: "#f7ad88",
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
//   background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  // border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
//   border-radius: 12px;
//   opacity: 0.6;
  `
);

const TabsList = styled(TabsListUnstyled)(
  ({ theme }) => `
//   min-width: 400px;
//   background-color: ${colors[500]};
//   border-radius: 12px;
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
      <Box>
        <TabPanel value={0}>
          <Grid container spacing={1}>
            {itemData1.map((item) => (
              <Grid item sm={4} xs={12} key={item.id}>
                <ProjectBox {...item} />
              </Grid>
            ))}

            {itemData2.map((item) => (
              <Grid item sm={4} xs={12} key={item.id}>
                <ProjectBox {...item} />
              </Grid>
            ))}
            {itemData3.map((item) => (
              <Grid item sm={4} xs={12} key={item.id}>
                <ProjectBox {...item} />
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value={1}>
          <Grid container spacing={1}>
            {itemData1.map((item) => (
              <Grid item sm={4} xs={12} key={item.id}>
                <ProjectBox {...item} />
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value={2}>
          <Grid container spacing={1}>
            {itemData2.map((item) => (
              <Grid item sm={4} xs={12} key={item.id}>
                <ProjectBox {...item} />
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value={3}>
          <Grid container spacing={1}>
            {itemData3.map((item) => (
              <Grid item sm={4} xs={12} key={item.id}>
                <ProjectBox {...item} />
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
    pjImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fweb%2Fcalculator%2Fcal0.jpg?alt=media&token=0e3d7823-bccd-46ab-94f0-7d0e1c0c392d",
    pjTitle: "부동산 계산기",
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
      "부동산계산기를 웹페이지에서도 모바일에서도 편리하게 사용할 수 있도록 기획하고 구상하여 제작하였다.",
    pjPrototype:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fweb%2Fcalculator%2Fcal0.jpg?alt=media&token=0e3d7823-bccd-46ab-94f0-7d0e1c0c392d",
    pjPrototypeAlt: "부동산 계산기 화면",
    pjVideo: "https://www.youtube.com/embed/XYXbrhirUIw",
  },
  {
    id: 2,
    pjType: "Web Develop",
    pjImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fweb%2Fpwa%2Fpwa0.jpg?alt=media&token=3f9f3ab8-8882-47c3-bb17-9f6bc8663e7f",
    pjTitle: "PWA를 활용한 웹 푸시 알림 시스템",
    pjSubTitle: "진동벨이 필요 없는 카페 주문 완료 알림 시스템 제작",
    pjDuration: "JULY 2017 - JULY 2018",
    pjDeTitle1: "LANGUAGE & TOOL",
    pjDeContent1_1: "PWA",
    pjDeContent1_2: "Node.js",
    pjDeContent1_3: "MongoDB",
    pjDeContent1_4: "",
    pjDeTitle2: "ROLE",
    pjDeContent2: "기획 및 제작",
    pjDeTitle3: "INDUSTRY",
    pjDeContent3: "Developer 4",
    pjDeTitle4: "DURATION",
    pjDeContent4: "1 Year",
    pjDef:
      "모바일 어플리케이션을 통해 지원되는 기존의 푸시 알림 서비스는 사용자가 관심 분야의 정보를 받아볼 수 있기 때문에 유용하다. 그러나, 기존의 푸시 알림 서비스는 사용 측면에서 명확한 한계를 가진다. 이에 개선된 형태의 푸시 알림 시스템이 요구된다.",
    pjPrototype:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fweb%2Fpwa%2Fpwa1.jpg?alt=media&token=c5799406-4b1c-4c10-85c2-d71b74a3086a",
    pjPrototypeAlt: "PWA를 활용한 웹 푸시 알림 시스템 상세",
    pjVideo: "https://www.youtube.com/embed/5CEzAd3kDtg",
  },
  {
    id: 3,
    pjType: "Web Develop",
    pjImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fweb%2Flisten%2Flisten0.jpg?alt=media&token=9ddcfe00-498c-49c3-ba8d-576037a2edbd",
    pjTitle: "진동벨이 필요 없는 카페 알림 시스템",
    pjSubTitle: "청각장애인을 위한카페 시스템",
    pjDuration: "JULY 2017 - JULY 2018",
    pjDeTitle1: "LANGUAGE & TOOL",
    pjDeContent1_1: "PWA",
    pjDeContent1_2: "Node.js",
    pjDeContent1_3: "MongoDB",
    pjDeContent1_4: "",
    pjDeTitle2: "ROLE",
    pjDeContent2: "기획 및 제작",
    pjDeTitle3: "INDUSTRY",
    pjDeContent3: "Developer 4",
    pjDeTitle4: "DURATION",
    pjDeContent4: "1 Year",
    pjDef:
      "청각장애인은 물론 비장애인도 카페에서 음료 제조의 완료 알림을 받을 수 있고, 카페 매장 측은 마케팅 플랫폼으로 활용할 수 있는 시스템을 개발하였다.",
    pjPrototype:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fweb%2Flisten%2Flisten1.jpg?alt=media&token=c80a0fd9-aa0e-4d89-bd44-780d882c772f",
    pjPrototypeAlt: "진동벨이 필요 없는 카페 주문 완료 알림 시스템 제작 상세",
    pjVideo: "https://www.youtube.com/embed/5CEzAd3kDtg",
  },
  {
    id: 4,
    pjType: "Web Develop",
    pjImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fweb%2Fdiary%2Fdiary0.jpg?alt=media&token=e24c915e-ca03-4e7e-ae0d-c7f586c74ff4",
    pjTitle: "감정일기장",
    pjSubTitle: "한입 크기로 잘라 먹는 리액트 수강 및 이수",
    pjDuration: "Inflearn",
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
      "Inflearn의 <b>한입 크기로 잘라 먹는 리액트(React.js) : 기초부터 실전까지(https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%EB%A6%AC%EC%95%A1%ED%8A%B8#)</b>로 JavaScript와 React의 기초적인 개념을 Blog에 기록하며 학습하였다. 최종적으로 React.js를 이용하여 감정일기장을 제작하고 Firebase를 이용하여 프로젝트를 배포하였다.",
    pjPrototype:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fweb%2Fdiary%2Fdiary1.png?alt=media&token=c1144b12-e887-4df9-a6fc-5414d797f09a",
    pjPrototypeAlt: "",
    pjVideo: "https://www.youtube.com/embed/hE4qm1l6Da4",
  },
  {
    id: 5,
    pjType: "Web Develop",
    pjImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fweb%2Fcalculator%2Fcal0.jpg?alt=media&token=0e3d7823-bccd-46ab-94f0-7d0e1c0c392d",
    pjTitle: "영화 웹 서비스",
    pjSubTitle: "ReactJS로 영화 웹 서비스 만들기",
    pjDuration: "Nomad Coders",
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
      "Nomad Coders의 <b>ReactJS로 영화 웹 서비스 만들기(https://nomadcoders.co/react-for-beginners)</b>로 React의 기초적인 개념을 Blog에 기록하며 학습하였다. 최종적으로 React.js를 이용하여 영화 웹 서비스 페이지를 제작하고 Github를 이용하여 프로젝트를 배포하였다.",
    pjPrototype: "",
    pjPrototypeAlt: "",
    pjVideo: "",
  },
  {
    id: 6,
    pjType: "Web Develop",
    pjImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fweb%2Fcalculator%2Fcal0.jpg?alt=media&token=0e3d7823-bccd-46ab-94f0-7d0e1c0c392d",
    pjTitle: "Twitter Service",
    pjSubTitle: "트위터 클론코딩",
    pjDuration: "Nomad Coders",
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
      "Nomad Coders의 <b>트위터 클론코딩(https://nomadcoders.co/nwitter)</b>를 수강하였다. 최종적으로 React.js와 Firebase를 이용하여 백엔드 코딩없이 인증 및 리얼타임 DB를 구현하여 로그인, 트윗작성, 수정 삭제 등의 기본적인 트위터 웹 페이지를 제작하고 Github를 이용하여 프로젝트를 배포하였다.",
    pjPrototype: "",
    pjPrototypeAlt: "",
    pjVideo: "",
  },
];
const itemData2 = [
  {
    id: 1,
    pjType: "App Develop",
    pjImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fapp%2Fitda%2Fitda0.jpg?alt=media&token=c34fd663-bb38-4fdc-9465-d30d7494f01f",
    pjTitle: "잇다",
    pjSubTitle: "초등학생들을 위한 어플리케이션 제작",
    pjDuration: "MARCH 2020 - JULY 2020",
    pjDeTitle1: "LANGUAGE & TOOL",
    pjDeContent1_1: "Flutter",
    pjDeContent1_2: "Firebase",
    pjDeContent1_3: "Zeplin",
    pjDeContent1_4: "",
    pjDeTitle2: "ROLE",
    pjDeContent2: "제작",
    pjDeTitle3: "Member",
    pjDeContent3: "Develpoer 2, Designer 1",
    pjDeTitle4: "DURATION",
    pjDeContent4: "5 Months",
    pjDef:
      "초등학생들이 자기주도적으로 마음을 다스리고 목표, 식사를 계획하여 가정과 학교를 이을 수 있게 어플리케이션을 제작하였다.",
    pjPrototype:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fapp%2Fitda%2Fitda0.jpg?alt=media&token=c34fd663-bb38-4fdc-9465-d30d7494f01f",
    pjPrototypeAlt: "",
    pjVideo: "",
  },
  {
    id: 2,
    pjType: "App Develop",
    pjImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fapp%2Fe2e%2Fe2e0.png?alt=media&token=e8bf0291-207d-4e91-ba77-376b74e51c03",
    pjTitle: "Eyes2Ears",
    pjSubTitle: "노인들을 위한 어플리케이션 기획 및 제작",
    pjDuration: "MARCH 2017 - JULY 2017",
    pjDeTitle1: "LANGUAGE & TOOL",
    pjDeContent1_1: "Flutter",
    pjDeContent1_2: "Firebase",
    pjDeContent1_3: "Figma",
    pjDeContent1_4: "",
    pjDeTitle2: "ROLE",
    pjDeContent2: "기획 및 제작",
    pjDeTitle3: "Member",
    pjDeContent3: "Develpoer 2",
    pjDeTitle4: "DURATION",
    pjDeContent4: "5 Months",
    pjDef:
      "노인들의 스마트폰 사용량이 증가함에 반해 노인들이 사용하기에 적합한 어플리케이션들이 많지 않고 편리하지도 않다. 노인들이 일상생활에서 필요한 기능들과 오락도 즐길 수 있는 어플리케이션을 구상하고 구현하였다.",
    pjPrototype:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fapp%2Fe2e%2Fe2e1.png?alt=media&token=3f864d37-c418-43e0-89cf-67986beb2c99",
    pjPrototypeAlt: "",
    pjVideo: "https://www.youtube.com/embed/s5NPzhmp7OU",
  },
  {
    id: 3,
    pjType: "App Develop",
    pjImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fapp%2Fsiren%2Fshh0.jpg?alt=media&token=cf56f3f8-ac72-4262-9b48-4e77fa09266d",
    pjTitle: "SIREN + SHH",
    pjSubTitle: "기숙사 내 침묵시간 소음 방지기 기획 및 제작",
    pjDuration: "MARCH 2017 - JULY 2017",
    pjDeTitle1: "LANGUAGE & TOOL",
    pjDeContent1_1: "Arduino",
    pjDeContent1_2: "",
    pjDeContent1_3: "",
    pjDeContent1_4: "",
    pjDeTitle2: "ROLE",
    pjDeContent2: "기획 및 제작",
    pjDeTitle3: "Member",
    pjDeContent3: "Develpoer 3",
    pjDeTitle4: "DURATION",
    pjDeContent4: "5 Months",
    pjDef:
      "취침시간임에도 불구하고 기숙사내에서는 많은 소음들이 발생하는데, 소음 발생 자제 요청을 직접적으로 하기 어려움과 어느 방에서 소음을 내는지 알 수 없는 어려움을 해결하기위해 소음방지기를 제작",
    pjPrototype:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fapp%2Fsiren%2Fshh1.png?alt=media&token=b787c9dd-a953-4e8b-8eb6-bd504ea40173",
    pjPrototypeAlt: "",
    pjVideo: "https://www.youtube.com/embed/ZYuGDom_te4",
  },
];
const itemData3 = [
  {
    id: 1,
    pjType: "Design",
    pjImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fdesign%2Fbestep%2Fbestep0.png?alt=media&token=8b227812-cb82-443b-a1ff-47a884d2bef2",
    pjTitle: "Bestep Center",
    pjSubTitle: "코딩 테스트 웹 페이지 기획 및 구상",
    pjDuration: "AUGUST 2019 - DECEMBER 2019",
    pjDeTitle1: "LANGUAGE & TOOL",
    pjDeContent1_1: "Figma",
    pjDeContent1_2: "",
    pjDeContent1_3: "",
    pjDeContent1_4: "",
    pjDeTitle2: "ROLE",
    pjDeContent2: "기획",
    pjDeTitle3: "Member",
    pjDeContent3: "Develpoer 4",
    pjDeTitle4: "DURATION",
    pjDeContent4: "5 Months",
    pjDef:
      "코딩 테스트를 개최 및 진행할 수 있도록 웹 페이지를 기획 및 구상하였다.",
    pjPrototype:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-23686.appspot.com/o/project%2Fdesign%2Fbestep%2Fbestep0.png?alt=media&token=8b227812-cb82-443b-a1ff-47a884d2bef2",
    pjPrototypeAlt: "",
    pjVideo: "https://www.youtube.com/embed/JQCWEL09i4c",
  },
];
