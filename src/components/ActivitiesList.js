import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Paper,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ActivitiesDialog from "./ActivitiesDialog";
import { Box } from "@mui/system";

function ActivitiesList() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    <ImageList cols={matches ? 3 : 1}>
      {itemData.map((item) => (
        <Box key={item.id}>
          <ImageListItem onClick={handleClickOpen("body")}>
            <img
              src={process.env.PUBLIC_URL + item.actImage}
              alt={item.actTitle}
              loading="lazy"
              style={{ filter: "brightness(30%)" }}
            />
            <ImageListItemBar
              title={item.actTitle}
              subtitle={item.actSubTitle}
              sx={{ backgroundColor: "transparent" }}
            />
          </ImageListItem>
          <Paper elevation={10}>
            <Dialog
              fullWidth={true}
              maxWidth="xl"
              open={open}
              onClose={handleClose}
              scroll={scroll}
            >
              <ActivitiesDialog
                id={item.id}
                actImage={item.actImage}
                actTitle={item.actTitle}
                actSubTitle={item.actSubTitle}
                actOrganizer={item.actOrganizer}
                actDate={item.actDate}
                actDeTitle1={item.actDeTitle1}
                actDeContent1_1={item.actDeContent1_1}
                actDeContent1_2={item.actDeContent1_2}
                actDeContent1_3={item.actDeContent1_3}
                actDeContent1_4={item.actDeContent1_4}
                actDeTitle2={item.actDeTitle2}
                actDeContent2={item.actDeContent2}
                actDeTitle3={item.actDeTitle3}
                actDeContent3={item.actDeContent3}
                actDeTitle4={item.actDeTitle4}
                actDeContent4={item.actDeContent4}
                actDef={item.actDef}
                actPrototypeAlt={item.actPrototypeAlt}
                actPrototype={item.actPrototype}
              />
              <DialogActions sx={{ backgroundColor: "#0F0F0F" }}>
                <Button onClick={handleClose}>Close</Button>
              </DialogActions>
            </Dialog>
          </Paper>
        </Box>
      ))}
    </ImageList>
  );
}

export default ActivitiesList;

const itemData = [
  {
    id: 1,
    actImage: "/images/projectImg/project1.jpg",
    actTitle: "시선 학회",
    actSubTitle: "소외된 이웃을 위한 IT 솔루션 연구 학회",
    actOrganizer: "과학기술정보통신부",
    actDate: "MARCH 2017 - JULY 2018",
    actDeTitle1: "LANGUAGE & TOOL",
    actDeContent1_1: "Vue.js",
    actDeContent1_2: "Nuxt.js",
    actDeContent1_3: "Daum 도로명주소 API",
    actDeContent1_4: "HTML",
    actDeTitle2: "ROLE",
    actDeContent2: "기획 및 제작",
    actDeTitle3: "INDUSTRY",
    actDeContent3: "Solo",
    actDeTitle4: "DURATION",
    actDeContent4: "2 Months",
    actDef:
      "부동산계산기를 웹페이지에서도 모바일에서도 편리하게 사용할 수 있도록 깔끔한 디자인으로 기획하고 구상하여 제작하였다.",
    actPrototypeAlt: "actPrototypeAlt",
    actPrototype: "/images/projectImg/project1_1.jpg",
  },
  {
    id: 2,
    actImage: "/images/projectImg/project1.jpg",
    actTitle: "Student for Christ 동아리",
    actSubTitle: "학생신앙운동",
    actOrganizer: "과학기술정보통신부",
    actDate: "MARCH 2015 - FEBRUARY 2020",
    actDeTitle1: "LANGUAGE & TOOL",
    actDeContent1_1: "Vue.js",
    actDeContent1_2: "Nuxt.js",
    actDeContent1_3: "Daum 도로명주소 API",
    actDeContent1_4: "HTML",
    actDeTitle2: "ROLE",
    actDeContent2: "기획 및 제작",
    actDeTitle3: "INDUSTRY",
    actDeContent3: "Solo",
    actDeTitle4: "DURATION",
    actDeContent4: "2 Months",
    actDef:
      "개혁주의 신앙인으로서 하나님 중심, 성경 중심, 교회 중심의 삶을 이 땅에서 살아내기위해 힘쓰며 배우고 고민함",
    actPrototypeAlt: "actPrototypeAlt",
    actPrototype: "/images/projectImg/project1_1.jpg",
  },
  {
    id: 3,
    actImage: "/images/projectImg/project1.jpg",
    actTitle: "Student for Christ / 경북동부지방소속",
    actSubTitle: "학생신앙운동",
    actOrganizer: "과학기술정보통신부",
    actDate: "MARCH 2015 - FEBRUARY 2020",
    actDeTitle1: "LANGUAGE & TOOL",
    actDeContent1_1: "Vue.js",
    actDeContent1_2: "Nuxt.js",
    actDeContent1_3: "Daum 도로명주소 API",
    actDeContent1_4: "HTML",
    actDeTitle2: "ROLE",
    actDeContent2: "기획 및 제작",
    actDeTitle3: "INDUSTRY",
    actDeContent3: "Solo",
    actDeTitle4: "DURATION",
    actDeContent4: "2 Months",
    actDef:
      "경북동부지방(경주,영천,울릉,포항)에 있는 청소년들을 대상으로 수련회와 각종 행사들을 담당하여 주최하고 참여. 경북동부지방에 있는 대학생들과 리더로서 자질을 갖추기 위한 교육을 받고 함께 소통함",
    actPrototypeAlt: "actPrototypeAlt",
    actPrototype: "/images/projectImg/project1_1.jpg",
  },
  {
    id: 4,
    actImage: "/images/projectImg/project1.jpg",
    actTitle: "Social Maker Academy 참여",
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
    actDeContent3: "3 Developers",
    actDeTitle4: "",
    actDeContent4: "",
    actDef:
      "휠체어를 사용하는 환자의 신체에 맞게 발판 조정이 가능한 휠체어 3D모델링을 사용하여 프로토타입 제작",
    actPrototypeAlt: "actPrototypeAlt",
    actPrototype: "/images/projectImg/project1_1.jpg",
  },
  {
    id: 5,
    actImage: "/images/projectImg/project1.jpg",
    actTitle: "이방의 빛 차세대 지도자 훈련원",
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
    actDeContent3: "7 Members",
    actDeTitle4: "DURATION",
    actDeContent4: "2 Months",
    actDef:
      "하나님 나라의 백성으로 살아가는데 필요한 영성훈련과 공동체 훈련, 매월 1회 합숙훈련(1박 2일), 국내 비전트립, 미국&멕시코 비전트립",
    actPrototypeAlt: "actPrototypeAlt",
    actPrototype: "/images/projectImg/project1_1.jpg",
  },
];
