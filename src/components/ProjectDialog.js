import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const TopImage = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${process.env.PUBLIC_URL + "/images/projectImg/project1.jpg"});
`;

function ProjectDialog() {
  return (
    <div style={{ backgroundColor: "#0F0F0F" }}>
      <TopImage className="projectDialogTop">
        <Container>
          <Typography
            align="center"
            color="#989796"
            sx={{
              fontSize: { sm: "14px", xs: "7px" },
              letterSpacing: "4px",
              mt: { sm: 20, xs: 0 },
            }}
          >
            PROJECT
          </Typography>
          <Typography
            align="center"
            color="secondary"
            sx={{
              // typography: { sm: "h2", xs: "h5" },
              fontSize: { sm: "80px", xs: "30px" },
              letterSpacing: { sm: "5px", xs: "2px" },
              mt: { sm: 2, xs: 1 },
            }}
          >
            <b>부동산 계산기</b>
          </Typography>
          <Typography
            align="center"
            color="#989796"
            sx={{
              typography: { sm: "h5", xs: "body2" },
              mt: { sm: 3, xs: 2 },
            }}
          >
            케이페이스 인턴(개발팀)
          </Typography>
          <Typography
            align="center"
            color="#989796"
            sx={{
              typography: { sm: "h6", xs: "overline" },
              mb: { sm: 15, xs: 0 },
            }}
          >
            DECEMBER 2019 - FEBRUARY 2020
          </Typography>
        </Container>
      </TopImage>
      <Box
        sx={{
          pt: { sm: "100px", xs: "80px" },
          pb: { sm: "100px", xs: "0px" },
        }}
      >
        <Container>
          <Grid container spacing={3}>
            <Grid item sm={3} xs={6}>
              <Typography
                className="pjDetail"
                sx={{
                  typography: { sm: "body2", xs: "overline" },
                  pb: { sm: "10px", xs: "5px" },
                }}
              >
                LANGUAGE & TOOL
              </Typography>
              <Typography
                className="pjDetailContent"
                sx={{
                  typography: { sm: "subtitle1", xs: "body2" },
                }}
              >
                Vue.js, Nuxt.js, <br />
                Daum 도로명주소 API
              </Typography>
            </Grid>
            <Grid item sm={3} xs={6}>
              <Typography
                className="pjDetail"
                sx={{
                  typography: { sm: "body2", xs: "overline" },
                  pb: { sm: "10px", xs: "5px" },
                }}
              >
                ROLE
              </Typography>
              <Typography
                className="pjDetailContent"
                sx={{
                  typography: { sm: "subtitle1", xs: "body2" },
                }}
              >
                기획 및 제작
              </Typography>
            </Grid>
            <Grid item sm={3} xs={6}>
              <Typography
                className="pjDetail"
                sx={{
                  typography: { sm: "body2", xs: "overline" },
                  pb: { sm: "10px", xs: "5px" },
                }}
              >
                INDUSTRY
              </Typography>
              <Typography
                className="pjDetailContent"
                sx={{
                  typography: { sm: "subtitle1", xs: "body2" },
                }}
              >
                Solo
              </Typography>
            </Grid>
            <Grid item sm={3} xs={6}>
              <Typography
                className="pjDetail"
                sx={{
                  typography: { sm: "body2", xs: "overline" },
                  pb: { sm: "10px", xs: "5px" },
                }}
              >
                DURATION
              </Typography>
              <Typography
                className="pjDetailContent"
                sx={{
                  typography: { sm: "subtitle1", xs: "body2" },
                }}
              >
                2 Months
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          pt: { sm: "100px", xs: "80px" },
          pb: { sm: "100px", xs: "0px" },
        }}
      >
        <Container>
          <Typography
            className="pjDetail"
            sx={{
              typography: { sm: "body2", xs: "overline" },
              pb: { sm: "10px", xs: "5px" },
            }}
          >
            DEFINING THE PROBLEM
          </Typography>
          <Typography
            className="pjDetailContent"
            sx={{
              typography: { sm: "subtitle1", xs: "body2" },
            }}
          >
            부동산계산기를 웹페이지에서도 모바일에서도 편리하게 사용할 수 있도록
            깔끔한 디자인으로 기획하고 구상하여 제작하였다.
          </Typography>
        </Container>
      </Box>
      <Box
        sx={{
          pt: { sm: "100px", xs: "80px" },
          pb: { sm: "50px", xs: "0px" },
        }}
      >
        <Container>
          <Typography
            className="pjDetail"
            sx={{
              typography: { sm: "body2", xs: "overline" },
              pb: { sm: "10px", xs: "5px" },
            }}
          >
            LAUNCH PROTOTYPE
          </Typography>
          <Box
            component="img"
            sx={{
              width: "100%",
            }}
            alt="The house from the offer."
            src={`${process.env.PUBLIC_URL}/images/projectImg/project1_1.jpg`}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pt: { sm: 2, xs: 1 },
            }}
          >
            <ReactPlayer
              className="player"
              url={"https://www.youtube.com/embed/5CEzAd3kDtg"}
              // width="100%"
              width="700px"
              heigth="700px"
              // playing={true}
              // muted={true}
              controls={true}
            />
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default ProjectDialog;
