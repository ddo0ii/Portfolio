import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

function ALCDialog({
  id,
  alcImage,
  alcTitle,
  alcSubTitle,
  alcOrganizer,
  alcDate,
  alcDeTitle1,
  alcDeContent1_1,
  alcDeContent1_2,
  alcDeContent1_3,
  alcDeContent1_4,
  alcDeTitle2,
  alcDeContent2,
  alcDeTitle3,
  alcDeContent3,
  alcDeTitle4,
  alcDeContent4,
  alcDef,
  alcPrototypeAlt,
  alcPrototype,
}) {
  const TopImage = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
      url(${process.env.PUBLIC_URL + alcImage});
  `;

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
            AWARD & LICENSE & CERTIFICATE
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
            <b>{alcTitle}</b>
          </Typography>
          <Typography
            align="center"
            color="#989796"
            sx={{
              typography: { sm: "h5", xs: "body2" },
              mt: { sm: 3, xs: 2 },
            }}
          >
            {alcSubTitle}
          </Typography>
          <Typography
            align="center"
            color="#989796"
            sx={{
              typography: { sm: "h5", xs: "body2" },
              mt: { sm: 3, xs: 2 },
            }}
          >
            {alcOrganizer}
          </Typography>
          <Typography
            align="center"
            color="#989796"
            sx={{
              typography: { sm: "h6", xs: "overline" },
              mb: { sm: 15, xs: 0 },
            }}
          >
            {alcDate}
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
                {alcDeTitle1}
              </Typography>
              <Typography
                className="pjDetailContent"
                sx={{
                  typography: { sm: "subtitle1", xs: "body2" },
                }}
              >
                {alcDeContent1_1} {alcDeContent1_2} <br />
                {alcDeContent1_3} {alcDeContent1_4}
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
                {alcDeTitle2}
              </Typography>
              <Typography
                className="pjDetailContent"
                sx={{
                  typography: { sm: "subtitle1", xs: "body2" },
                }}
              >
                {alcDeContent2}
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
                {alcDeTitle3}
              </Typography>
              <Typography
                className="pjDetailContent"
                sx={{
                  typography: { sm: "subtitle1", xs: "body2" },
                }}
              >
                {alcDeContent3}
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
                {alcDeTitle4}
              </Typography>
              <Typography
                className="pjDetailContent"
                sx={{
                  typography: { sm: "subtitle1", xs: "body2" },
                }}
              >
                {alcDeContent4}
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
            {alcDef}
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
            alt={alcPrototypeAlt}
            src={`${process.env.PUBLIC_URL + alcPrototype}`}
          />
        </Container>
      </Box>
    </div>
  );
}

export default ALCDialog;
