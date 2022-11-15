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
    actTitle: "국경 없는 과학자 기술자 회장상11",
    actSubTitle: "제 10회 소외된 90%를 위한 창의설계 경진대회",
    actOrganizer: "과학기술정보통신부",
    actDate: "DECEMBER 2019 - FEBRUARY 2020",
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
    actTitle: "국경 없는 과학자 기술자 회장상22",
    actSubTitle: "제 10회 소외된 90%를 위한 창의설계 경진대회",
    actOrganizer: "과학기술정보통신부",
    actDate: "DECEMBER 2019 - FEBRUARY 2020",
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
    id: 3,
    actImage: "/images/projectImg/project1.jpg",
    actTitle: "국경 없는 과학자 기술자 회장상33",
    actSubTitle: "제 10회 소외된 90%를 위한 창의설계 경진대회",
    actOrganizer: "과학기술정보통신부",
    actDate: "DECEMBER 2019 - FEBRUARY 2020",
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
    id: 4,
    actImage: "/images/projectImg/project1.jpg",
    actTitle: "국경 없는 과학자 기술자 회장상44",
    actSubTitle: "제 10회 소외된 90%를 위한 창의설계 경진대회",
    actOrganizer: "과학기술정보통신부",
    actDate: "DECEMBER 2019 - FEBRUARY 2020",
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
];
