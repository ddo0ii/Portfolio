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
import useScrollClipPath from "../hooks/useScrollClipPath";

function createData(subject, content) {
  return { subject, content };
}

const rows = [
  createData("Birth", "1996 . 05 . 13"),
  // createData(
  //   "Address",
  //   "55-5 Bihwajung-ro 1-gil, Angang-eup, Gyeongju-si, Gyeongsangbuk-do"
  // ),
  createData("Phone Number", "010 - 0000 - 0000"),
  createData("Email", "soyeong5857@gmail.com"),
];

function About() {
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
          <Grid item xs={12} sm={5} className="sa sa-right">
            <Box p={2}>
              <Typography align="center">
                <img
                  className="profileImg"
                  src={`${process.env.PUBLIC_URL}/images/ProfileImg.jpg`}
                  alt="Profile Image"
                />
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Box p={2}>
              <Typography
                className="sa sa-down"
                color="secondary"
                gutterBottom
                sx={{
                  typography: { sm: "h3", xs: "h4" },
                }}
              >
                <b>
                  Hello, I Am
                  <Hidden only={["sm", "md", "lg", "xl"]}>
                    <br />
                  </Hidden>
                  <Hidden only={["xs"]}>
                    <span style={{ marginLeft: "15px" }}></span>
                  </Hidden>
                  <span
                    style={{
                      color: "#C27D5B",
                      fontFamily: "lightsFont",
                    }}
                  >
                    Soyoeng Kwon
                  </span>
                </b>
              </Typography>
              <Box className="sa sa-left">
                <Typography
                  color="secondary"
                  gutterBottom
                  sx={{ typography: { sm: "h5", xs: "h6" }, mb: 3 }}
                >
                  <b>A Front-end Web Developer</b>
                </Typography>
                <Typography
                  color="#959595"
                  gutterBottom
                  sx={{
                    mb: 3,
                    fontSize: "14px",
                  }}
                >
                  ?????? ??????????????? ??????????????? ??? ??????????????????.
                  <br />
                  ????????? ????????? ??????????????? ????????? ????????????, ??? ???????????? ????????????
                  ?????? ????????? ????????? ??????????????? ???????????????. ?????? ???????????????
                  ???????????? ??? ???????????? ?????? ??? ??? ????????? ????????? ????????? ????????????
                  ???????????? ??????????????? ???????????? ?????? ?????????????????????.
                  <br />
                  ????????? ?????? ???????????? ??? ?????? ????????? ????????? ???????????? ???
                  ???????????? ????????? ?????? ????????? ???????????? ?????????????????? ??????
                  ??????????????? ??? ???????????? ?????? ????????????.
                </Typography>
                <TableContainer sx={{ mb: 3 }}>
                  <Table
                    sx={{
                      [`& .${tableCellClasses.root}`]: {
                        borderBottom: "none",
                      },
                    }}
                  >
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.subject}>
                          <TableCell
                            size="medium"
                            sx={{ color: "#959595", fontWeight: "bold" }}
                          >
                            {row.subject}
                          </TableCell>
                          <TableCell
                            size="medium"
                            align="left"
                            sx={{ color: "#959595" }}
                          >
                            {row.content}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
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
        </Grid>
      </Container>
    </Box>
  );
}

export default About;
