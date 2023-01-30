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

function createData(subject, content) {
  return { subject, content };
}

const rows = [
  // createData("Birth", "1996 . 05 . 13"),
  // createData(
  //   "Address",
  //   "55-5 Bihwajung-ro 1-gil, Angang-eup, Gyeongju-si, Gyeongsangbuk-do"
  // ),
  // createData("Phone Number", "010 - 0000 - 0000"),
  createData("Email", "soyeong5857@gmail.com"),
];

function Home() {
  const animatedItem = {
    0: useScrollFadeIn("down", 1, 0),
    1: useScrollFadeIn("down", 1, 0.2),
    2: useScrollFadeIn("down", 1, 0.3),
    3: useScrollFadeIn("down", 1, 0.4),
  };
  return (
    <Box
      className="aboutPage"
      sx={{
        pt: { sm: "50px", xs: "20px" },
        pb: { sm: "100px", xs: "80px" },
      }}
    >
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <Box p={2} className="homeLetter">
              <Typography
                pt={13}
                mb={3}
                color="primary"
                sx={{
                  typography: { sm: "h2", xs: "h4" },
                  // color: "#ffb3b2",
                }}
              >
                <span>
                  <b>SOYEONG KWON</b>
                </span>
              </Typography>
              <Box className="sa sa-left">
                <Typography
                  color="secondary"
                  gutterBottom
                  sx={{ typography: { sm: "h5", xs: "h6" }, mb: 3 }}
                >
                  <b>Front-end Web Developer</b>
                </Typography>
                <Typography
                  color="#959595"
                  gutterBottom
                  sx={{
                    mb: 3,
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
                  프론트엔드 웹 개발자가 되고 싶습니다.
                </Typography>

                <Typography color="primary" mb={2}>
                  <span>
                    <b>Email</b> soyeong5857@gmail.com
                  </span>
                </Typography>
                <Grid className="aboutContact" container>
                  <Grid item xs={4} sm={2}>
                    <Box>
                      <Typography color="primary" sx={{ fontWeight: "bold" }}>
                        Contact Me
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    sm={2}
                    sx={{
                      pr: { sm: "30px", xs: "20px" },
                      pl: { sm: "5px", xs: "0px" },
                    }}
                  >
                    <Divider
                      color="#C27D5B"
                      // sx={{ borderBottomWidth: 2 }}
                    />
                  </Grid>
                  <Grid item xs={6} sm={4}>
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
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} className="sa sa-right">
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
  );
}

export default Home;
