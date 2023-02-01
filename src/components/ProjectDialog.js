import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBloggerB,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPalette, faSitemap } from "@fortawesome/free-solid-svg-icons";

function ProjectDialog({
  id,
  pjType,
  pjImage,
  pjTitle,
  pjSubTitle,
  pjDuration,
  pjLecSite,
  pjSite,
  pjGithub,
  pjBlog,
  pjYouTube,
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
    <div style={{ backgroundColor: "#1c1b1e" }}>
      <Box
        className="dialogTop"
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)), url(${pjImage})`,
        }}
      >
        <Container>
          <Typography
            align="center"
            color="secondary"
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
            color="primary"
            sx={{
              // typography: { sm: "h2", xs: "h5" },
              fontSize: { sm: "40px", xs: "25px" },
              letterSpacing: { sm: "5px", xs: "2px" },
              mt: { sm: 2, xs: 1 },
            }}
          >
            <b>{pjTitle}</b>
          </Typography>
          {pjSubTitle ? (
            <Typography
              align="center"
              color="#7a757f"
              sx={{
                typography: { sm: "h6", xs: "body2" },
                mt: { sm: 2, xs: 1 },
              }}
            >
              {pjSubTitle}
            </Typography>
          ) : (
            ""
          )}
          {pjDuration ? (
            <Typography
              align="center"
              color="#7a757f"
              sx={{
                typography: { sm: "h6", xs: "overline" },
                mb: { sm: 4, xs: 1 },
              }}
            >
              {pjDuration}
            </Typography>
          ) : (
            ""
          )}
          {pjLecSite || pjSite || pjGithub || pjBlog || pjYouTube ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                typography: { sm: "h6", xs: "body1" },
                mb: { sm: 15, xs: 0 },
              }}
            >
              {pjLecSite ? (
                <Box className="dialogContactIcon" sx={{ mr: 3, ml: 3 }}>
                  <a href={pjLecSite} target="_blank">
                    <FontAwesomeIcon icon={faSitemap} />
                  </a>
                </Box>
              ) : (
                ""
              )}
              {pjSite ? (
                <Box className="dialogContactIcon" sx={{ mr: 3, ml: 3 }}>
                  <a href={pjSite} target="_blank">
                    <FontAwesomeIcon icon={faPalette} />
                  </a>
                </Box>
              ) : (
                ""
              )}
              {pjGithub ? (
                <Box className="dialogContactIcon" sx={{ mr: 3, ml: 3 }}>
                  <a href={pjGithub} target="_blank">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </Box>
              ) : (
                ""
              )}
              {pjBlog ? (
                <Box className="dialogContactIcon" sx={{ mr: 3, ml: 3 }}>
                  <a href={pjBlog} target="_blank">
                    <FontAwesomeIcon icon={faBloggerB} />
                  </a>
                </Box>
              ) : (
                ""
              )}
              {pjYouTube ? (
                <Box className="dialogContactIcon" sx={{ mr: 3, ml: 3 }}>
                  <a href={pjYouTube} target="_blank">
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
      {pjDeTitle1 ||
      pjDeContent1_1 ||
      pjDeContent1_2 ||
      pjDeContent1_3 ||
      pjDeContent1_4 ||
      pjDeTitle2 ||
      pjDeContent2 ||
      pjDeTitle3 ||
      pjDeContent3 ||
      pjDeTitle4 ||
      pjDeContent4 ? (
        <Box
          sx={{
            pt: { sm: "100px", xs: "80px" },
            pb: { sm: "100px", xs: "0px" },
          }}
        >
          <Container>
            <Grid container spacing={3}>
              {pjDeTitle1 ||
              pjDeContent1_1 ||
              pjDeContent1_2 ||
              pjDeContent1_3 ||
              pjDeContent1_4 ? (
                <Grid item sm={3} xs={6}>
                  <Typography
                    className="dialogDetail"
                    sx={{
                      typography: { sm: "body2", xs: "overline" },
                      pb: { sm: "10px", xs: "5px" },
                    }}
                  >
                    {pjDeTitle1}
                  </Typography>
                  <Typography
                    className="dialogDetailContent"
                    sx={{
                      typography: { sm: "subtitle1", xs: "body2" },
                    }}
                  >
                    {pjDeContent1_1} {pjDeContent1_2} <br />
                    {pjDeContent1_3} {pjDeContent1_4}
                  </Typography>
                </Grid>
              ) : (
                ""
              )}
              {pjDeTitle2 || pjDeContent2 ? (
                <Grid item sm={3} xs={6}>
                  <Typography
                    className="dialogDetail"
                    sx={{
                      typography: { sm: "body2", xs: "overline" },
                      pb: { sm: "10px", xs: "5px" },
                    }}
                  >
                    {pjDeTitle2}
                  </Typography>
                  <Typography
                    className="dialogDetailContent"
                    sx={{
                      typography: { sm: "subtitle1", xs: "body2" },
                    }}
                  >
                    {pjDeContent2}
                  </Typography>
                </Grid>
              ) : (
                ""
              )}
              {pjDeTitle3 || pjDeContent3 ? (
                <Grid item sm={3} xs={6}>
                  <Typography
                    className="dialogDetail"
                    sx={{
                      typography: { sm: "body2", xs: "overline" },
                      pb: { sm: "10px", xs: "5px" },
                    }}
                  >
                    {pjDeTitle3}
                  </Typography>
                  <Typography
                    className="dialogDetailContent"
                    sx={{
                      typography: { sm: "subtitle1", xs: "body2" },
                    }}
                  >
                    {pjDeContent3}
                  </Typography>
                </Grid>
              ) : (
                ""
              )}
              {pjDeTitle4 || pjDeContent4 ? (
                <Grid item sm={3} xs={6}>
                  <Typography
                    className="dialogDetail"
                    sx={{
                      typography: { sm: "body2", xs: "overline" },
                      pb: { sm: "10px", xs: "5px" },
                    }}
                  >
                    {pjDeTitle4}
                  </Typography>
                  <Typography
                    className="dialogDetailContent"
                    sx={{
                      typography: { sm: "subtitle1", xs: "body2" },
                    }}
                  >
                    {pjDeContent4}
                  </Typography>
                </Grid>
              ) : (
                ""
              )}
            </Grid>
          </Container>
        </Box>
      ) : (
        ""
      )}
      {pjDef ? (
        <Box
          sx={{
            pt: { sm: "100px", xs: "80px" },
            pb: { sm: "100px", xs: "0px" },
          }}
        >
          <Container>
            <Typography
              className="dialogDetail"
              sx={{
                typography: { sm: "body2", xs: "overline" },
                pb: { sm: "10px", xs: "5px" },
              }}
            >
              DEFINING THE PROBLEM
            </Typography>
            <Typography
              className="dialogDetailContent"
              sx={{
                typography: { sm: "subtitle1", xs: "body2" },
              }}
            >
              {pjDef}
            </Typography>
          </Container>
        </Box>
      ) : (
        ""
      )}
      {pjPrototype || pjVideo ? (
        <Box
          sx={{
            pt: { sm: "100px", xs: "80px" },
            pb: { sm: "50px", xs: "0px" },
          }}
        >
          <Container>
            <Typography
              className="dialogDetail"
              sx={{
                typography: { sm: "body2", xs: "overline" },
                pb: { sm: "10px", xs: "5px" },
              }}
            >
              LAUNCH PROTOTYPE
            </Typography>
            {pjVideo ? (
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
            ) : (
              ""
            )}
            {pjPrototype ? (
              <Box
                component="img"
                sx={{
                  width: "100%",
                  pt: { sm: 2, xs: 1 },
                }}
                alt={pjPrototypeAlt}
                src={pjPrototype}
              />
            ) : (
              ""
            )}
          </Container>
        </Box>
      ) : (
        ""
      )}
    </div>
  );
}

export default ProjectDialog;
