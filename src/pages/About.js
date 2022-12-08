import React from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
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
  createData(
    "Address",
    "55-5 Bihwajung-ro 1-gil, Angang-eup, Gyeongju-si, Gyeongsangbuk-do"
  ),
  createData("Phone Number", "010 - 2667 - 5857"),
  createData("Email", "soyeong5857@gmail.com"),
];

function About() {
  // Scroll Animation (sa, 스크롤 애니메이션)
  const saTriggerMargin = 300;
  const saElementList = document.querySelectorAll(".sa");

  const saFunc = function () {
    for (const element of saElementList) {
      if (!element.classList.contains("show")) {
        if (
          window.innerHeight >
          element.getBoundingClientRect().top + saTriggerMargin
        ) {
          element.classList.add("show");
        }
      }
    }
  };

  window.addEventListener("load", saFunc);
  window.addEventListener("scroll", saFunc);

  return (
    <Box
      className="aboutPage"
      sx={{
        pt: { sm: "50px", xs: "20px" },
        pb: { sm: "100px", xs: "80px" },
      }}
    >
      <Container>
        <Grid container spacing={1} className="sa">
          <Grid item xs={12} sm={5}>
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
                color="secondary"
                gutterBottom
                sx={{
                  typography: { sm: "h3", xs: "h4" },
                }}
              >
                <b>
                  Hello, I Am
                  <span style={{ color: "#C27D5B" }}> Soyoeng Kwon</span>
                </b>
              </Typography>
              <Typography
                color="secondary"
                gutterBottom
                sx={{ typography: { sm: "h5", xs: "h6" }, mb: 2 }}
              >
                <b>A Front-end Web Developer</b>
              </Typography>
              <Typography
                color="#959595"
                gutterBottom
                sx={{
                  mb: 4,
                }}
              >
                I help businesses and companies reach their goals by designing
                user-centric digital products & interactive experiences.
              </Typography>
              <TableContainer sx={{ mb: 5 }}>
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About;
