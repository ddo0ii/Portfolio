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
    id: 8,
    pjType: "Web Develop",
    pjImage: "/images/projectImg/project1.jpg",
    pjTitle: "부동산 계산기itemData1",
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
    id: 9,
    pjType: "App Develop",
    pjImage: "/images/projectImg/project1.jpg",
    pjTitle: "부동산 계산기App Develop2222itemData1",
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
    id: 10,
    pjType: "Design",
    pjImage: "/images/projectImg/project1.jpg",
    pjTitle: "부동산 계산기 Design333itemData1",
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
];
const itemData2 = [
  {
    id: 6,
    pjType: "Web Develop",
    pjImage: "/images/projectImg/project1.jpg",
    pjTitle: "부동산 계산기Web Develop111itemData2",
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
    id: 7,
    pjType: "App Develop",
    pjImage: "/images/projectImg/project1.jpg",
    pjTitle: "부동산 계산기App Develop2222itemData2",
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
];
const itemData3 = [
  {
    id: 1,
    pjType: "Web Develop",
    pjImage: "/images/projectImg/project1.jpg",
    pjTitle: "부동산 계산기Web Develop111itemData3",
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
    pjTitle: "부동산 계산기App Develop2222itemData3",
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
    pjTitle: "부동산 계산기 Design333itemData3",
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
    pjTitle: "부동산 계산기App Develop444itemData3",
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
    pjTitle: "부동산 계산기Design5555itemData3",
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
