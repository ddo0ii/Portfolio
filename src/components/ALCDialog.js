import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBloggerB,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPalette, faSitemap } from "@fortawesome/free-solid-svg-icons";

function ALCDialog({
  id,
  alcSImage,
  alcImage,
  alcIcon,
  alcTitle,
  alcSubTitle,
  alcOrganizer,
  alcDate,
  alcLecSite,
  alcSite,
  alcGithub,
  alcBlog,
  alcYouTube,
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
  return (
    <div style={{ backgroundColor: "#0F0F0F" }}>
      <Box
        className="projectDialogTop"
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)), url(${alcSImage})`,
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
            AWARD & LICENSE & CERTIFICATE
          </Typography>
          <Typography
            align="center"
            color="secondary"
            sx={{
              // typography: { sm: "h2", xs: "h5" },
              fontSize: { sm: "50px", xs: "18px" },
              letterSpacing: { sm: "5px", xs: "2px" },
              mt: { sm: 2, xs: 1 },
            }}
          >
            <b>{alcTitle}</b>
          </Typography>
          {alcSubTitle ? (
            <Typography
              align="center"
              color="#989796"
              sx={{
                typography: { sm: "h6", xs: "body2" },
                mt: { sm: 2, xs: 1 },
              }}
            >
              {alcSubTitle}
            </Typography>
          ) : (
            ""
          )}
          {alcOrganizer ? (
            <Typography
              align="center"
              color="#989796"
              sx={{
                typography: { sm: "h6", xs: "body2" },
                mt: { sm: 1, xs: 1 },
              }}
            >
              {alcOrganizer}
            </Typography>
          ) : (
            ""
          )}
          {alcDate ? (
            <Typography
              align="center"
              color="#989796"
              sx={{
                typography: { sm: "h6", xs: "overline" },
                mb: { sm: 4, xs: 0 },
              }}
            >
              {alcDate}
            </Typography>
          ) : (
            ""
          )}
          {alcLecSite || alcSite || alcGithub || alcBlog || alcYouTube ? (
            <Box
              color="#989796"
              sx={{
                display: "flex",
                justifyContent: "center",
                typography: { sm: "h6", xs: "overline" },
                mb: { sm: 15, xs: 0 },
              }}
            >
              {alcLecSite ? (
                <Box className="contactIcon" sx={{ mr: 3, ml: 3 }}>
                  <a href={alcLecSite} target="_blank">
                    <FontAwesomeIcon icon={faSitemap} />
                  </a>
                </Box>
              ) : (
                ""
              )}
              {alcSite ? (
                <Box className="contactIcon" sx={{ mr: 3, ml: 3 }}>
                  <a href={alcSite} target="_blank">
                    <FontAwesomeIcon icon={faPalette} />
                  </a>
                </Box>
              ) : (
                ""
              )}
              {alcGithub ? (
                <Box className="contactIcon" sx={{ mr: 3, ml: 3 }}>
                  <a href={alcGithub} target="_blank">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </Box>
              ) : (
                ""
              )}
              {alcBlog ? (
                <Box className="contactIcon" sx={{ mr: 3, ml: 3 }}>
                  <a href={alcBlog} target="_blank">
                    <FontAwesomeIcon icon={faBloggerB} />
                  </a>
                </Box>
              ) : (
                ""
              )}
              {alcYouTube ? (
                <Box className="contactIcon" sx={{ mr: 3, ml: 3 }}>
                  <a href={alcYouTube} target="_blank">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </Box>
              ) : (
                ""
              )}
            </Box>
          ) : (
            ""
          )}
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
