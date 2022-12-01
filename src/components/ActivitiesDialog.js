import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

function ActivitiesDialog({
  id,
  actImage,
  actTitle,
  actSubTitle,
  actOrganizer,
  actDate,
  actDeTitle1,
  actDeContent1_1,
  actDeContent1_2,
  actDeContent1_3,
  actDeContent1_4,
  actDeTitle2,
  actDeContent2,
  actDeTitle3,
  actDeContent3,
  actDeTitle4,
  actDeContent4,
  actDef,
  actPrototype,
}) {
  return (
    <div style={{ backgroundColor: "#0F0F0F" }}>
      <Box
        className="projectDialogTop"
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)), url(${
            process.env.PUBLIC_URL + actImage
          })`,
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
            ACTIVITIES
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
            <b>{actTitle}</b>
          </Typography>
          <Typography
            align="center"
            color="#989796"
            sx={{
              typography: { sm: "h5", xs: "body2" },
              mt: { sm: 3, xs: 2 },
            }}
          >
            {actSubTitle}
          </Typography>
          <Typography
            align="center"
            color="#989796"
            sx={{
              typography: { sm: "h5", xs: "body2" },
              mt: { sm: 3, xs: 2 },
            }}
          >
            {actOrganizer}
          </Typography>
          <Typography
            align="center"
            color="#989796"
            sx={{
              typography: { sm: "h6", xs: "overline" },
              mb: { sm: 15, xs: 0 },
            }}
          >
            {actDate}
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
                {actDeTitle1}
              </Typography>
              <Typography
                className="pjDetailContent"
                sx={{
                  typography: { sm: "subtitle1", xs: "body2" },
                }}
              >
                {actDeContent1_1} {actDeContent1_2} <br />
                {actDeContent1_3} {actDeContent1_4}
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
                {actDeTitle2}
              </Typography>
              <Typography
                className="pjDetailContent"
                sx={{
                  typography: { sm: "subtitle1", xs: "body2" },
                }}
              >
                {actDeContent2}
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
                {actDeTitle3}
              </Typography>
              <Typography
                className="pjDetailContent"
                sx={{
                  typography: { sm: "subtitle1", xs: "body2" },
                }}
              >
                {actDeContent3}
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
                {actDeTitle4}
              </Typography>
              <Typography
                className="pjDetailContent"
                sx={{
                  typography: { sm: "subtitle1", xs: "body2" },
                }}
              >
                {actDeContent4}
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
            {actDef}
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
            alt={actTitle}
            src={actPrototype1}
          />
          <Box
            component="img"
            sx={{
              width: "100%",
            }}
            alt={actTitle}
            src={actPrototype2}
          />
        </Container>
      </Box>
    </div>
  );
}

export default ActivitiesDialog;
