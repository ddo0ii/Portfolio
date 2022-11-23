import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";

function ProjectDialog({
  id,
  pjType,
  pjImage,
  pjTitle,
  pjSubTitle,
  pjDuration,
  pjDeTitle1,
  pjDeContent1_1,
  pjDeContent1_2,
  pjDeContent1_3,
  pjDeContent1_4,
  pjDeTitle2,
  pjDeContent2,
  pjDeTitle3,
  pjDeContent3,
  pjDeTitle4,
  pjDeContent4,
  pjDef,
  pjPrototype,
  pjPrototypeAlt,
  pjVideo,
}) {
  return (
    <div style={{ backgroundColor: "#0F0F0F" }}>
      <Box
        className="projectDialogTop"
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)), url(${pjImage})`,
        }}
      >
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
            <b>{pjTitle}</b>
          </Typography>
          <Typography
            align="center"
            color="#989796"
            sx={{
              typography: { sm: "h5", xs: "body2" },
              mt: { sm: 3, xs: 2 },
            }}
          >
            {pjSubTitle}
          </Typography>
          <Typography
            align="center"
            color="#989796"
            sx={{
              typography: { sm: "h6", xs: "overline" },
              mb: { sm: 15, xs: 0 },
            }}
          >
            {pjDuration}
          </Typography>
        </Container>
      </Box>
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
                {pjDeTitle1}
              </Typography>
              <Typography
                className="pjDetailContent"
                sx={{
                  typography: { sm: "subtitle1", xs: "body2" },
                }}
              >
                {pjDeContent1_1} {pjDeContent1_2} <br />
                {pjDeContent1_3} {pjDeContent1_4}
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
                {pjDeTitle2}
              </Typography>
              <Typography
                className="pjDetailContent"
                sx={{
                  typography: { sm: "subtitle1", xs: "body2" },
                }}
              >
                {pjDeContent2}
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
                {pjDeTitle3}
              </Typography>
              <Typography
                className="pjDetailContent"
                sx={{
                  typography: { sm: "subtitle1", xs: "body2" },
                }}
              >
                {pjDeContent3}
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
                {pjDeTitle4}
              </Typography>
              <Typography
                className="pjDetailContent"
                sx={{
                  typography: { sm: "subtitle1", xs: "body2" },
                }}
              >
                {pjDeContent4}
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
            {pjDef}
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
            alt={pjPrototypeAlt}
            src={`${process.env.PUBLIC_URL + pjPrototype}`}
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
              url={pjVideo}
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
