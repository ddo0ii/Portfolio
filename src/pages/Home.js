import React from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Hidden,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import ContactIcons from "../components/ContactIcons";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

// function createData(subject, content) {
//   return { subject, content };
// }

// const rows = [
//   // createData("Birth", "1996 . 05 . 13"),
//   // createData(
//   //   "Address",
//   //   "55-5 Bihwajung-ro 1-gil, Angang-eup, Gyeongju-si, Gyeongsangbuk-do"
//   // ),
//   // createData("Phone Number", "010 - 0000 - 0000"),
//   createData("Email", "soyeong5857@gmail.com"),
// ];

function Home() {
  const animatedItem = {
    0: useScrollFadeIn("down", 1, 0),
    1: useScrollFadeIn("down", 1, 0.2),
    2: useScrollFadeIn("down", 1, 0.3),
    3: useScrollFadeIn("down", 1, 0.4),
  };
  return (
    <Box className="homePage">
      <Box
        sx={{
          position: "absolute",
          backgroundColor: "#e8def8",
          width: "100%",
          height: "75%",
        }}
      ></Box>
      <Box
        sx={{
          pt: { sm: "50px", xs: "20px" },
          pb: { sm: "50px", xs: "80px" },
          position: "relative",
          width: "100%",
        }}
      >
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <Box p={2}>
                <Typography
                  pt={10}
                  color="secondary"
                  sx={{
                    typography: { sm: "subtitle1", xs: "h6" },
                    mb: 2,
                  }}
                >
                  <span style={{ letterSpacing: -0.5 }}>
                    FRONT-END WEB DEVELOPER 💻
                  </span>
                </Typography>
                <Typography
                  mb={1}
                  color="primary"
                  sx={{
                    typography: { sm: "h3", xs: "h4" },

                    mb: 4,
                  }}
                >
                  <span>
                    <b>SOYEONG KWON</b>
                  </span>
                </Typography>
                <Typography
                  color="background"
                  sx={{
                    mb: 5,
                    fontSize: "14px",
                  }}
                >
                  일단 시작해보는 프론트엔드 웹 개발자입니다.
                  <br />
                  새로운 도전은 누구에게나 두렵고 어렵지만, 한 발걸음이 불안보다
                  작은 변화와 성장을 선물해주기 때문입니다. 태그 하나하나로
                  채워지는 웹 페이지가 나도 할 수 있다는 도전을 저에게 불어넣어
                  주었기에 프론트엔드 개발자의 삶을 선택하였습니다.
                  <br />
                  완벽한 것을 상상하고 첫 발을 내딛지 못하는 이들에게 첫
                  발걸음을 내딛게 하여 자신의 페이지를 완성해가도록 돕는
                  프론트엔드 웹 개발자가 되고자 합니다.
                </Typography>
                <Grid className="aboutContact" container>
                  <Grid item xs={8} sm={6}>
                    <Box
                      sx={{
                        fontSize: { sm: "20px", xs: "13px" },
                      }}
                    >
                      <ContactIcons />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box p={2}>
                <Typography align="center" p={3} pt={5}>
                  <img
                    className="homeImg"
                    src={`${process.env.PUBLIC_URL}/images/homeImg.jpg`}
                    alt="Profile Image"
                    style={{ borderRadius: 30 }}
                  />
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
