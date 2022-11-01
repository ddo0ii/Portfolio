import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import ContactIcons from "../components/ContactIcons";
import Divider from "@mui/material/Divider";

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
  return (
    <Box className="aboutPage">
      <Container>
        <Grid
          container
          spacing={1}
          sx={{
            mt: { sm: 4, xs: 0 },
            mb: { sm: 5, xs: 3 },
          }}
        >
          <Grid item xs={12} sm={5}>
            <Box p={2}>
              <Typography align="center">
                <img
                  className="profileImg"
                  src={"./images/ProfileImg.jpg"}
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
                sx={{ typography: { sm: "h3", xs: "h4" } }}
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
              <Typography color="#959595" gutterBottom sx={{ mb: 4 }}>
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
