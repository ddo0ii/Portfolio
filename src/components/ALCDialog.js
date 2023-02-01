import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBloggerB,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPalette, faSitemap } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player";

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
  alcPrototypeVideo,
  alcPrototype1,
  alcPrototype2,
}) {
  return (
    <div style={{ backgroundColor: "#1c1b1e" }}>
      <Box
        className="dialogTop"
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)), url(${alcSImage})`,
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
            AWARD & LICENSE & CERTIFICATE
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
            <b>{alcTitle}</b>
          </Typography>
          {alcSubTitle ? (
            <Typography
              align="center"
              color="#7a757f"
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
              color="#7a757f"
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
              color="#7a757f"
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
                typography: { sm: "h6", xs: "body1" },
                mb: { sm: 15, xs: 0 },
              }}
            >
              {alcLecSite ? (
                <Box className="dialogContactIcon" sx={{ mr: 3, ml: 3 }}>
                  <a href={alcLecSite} target="_blank">
                    <FontAwesomeIcon icon={faSitemap} />
                  </a>
                </Box>
              ) : (
                ""
              )}
              {alcSite ? (
                <Box className="dialogContactIcon" sx={{ mr: 3, ml: 3 }}>
                  <a href={alcSite} target="_blank">
                    <FontAwesomeIcon icon={faPalette} />
                  </a>
                </Box>
              ) : (
                ""
              )}
              {alcGithub ? (
                <Box className="dialogContactIcon" sx={{ mr: 3, ml: 3 }}>
                  <a href={alcGithub} target="_blank">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </Box>
              ) : (
                ""
              )}
              {alcBlog ? (
                <Box className="dialogContactIcon" sx={{ mr: 3, ml: 3 }}>
                  <a href={alcBlog} target="_blank">
                    <FontAwesomeIcon icon={faBloggerB} />
                  </a>
                </Box>
              ) : (
                ""
              )}
              {alcYouTube ? (
                <Box className="dialogContactIcon" sx={{ mr: 3, ml: 3 }}>
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
      {alcDeTitle1 ||
      alcDeContent1_1 ||
      alcDeContent1_2 ||
      alcDeContent1_3 ||
      alcDeContent1_4 ||
      alcDeTitle2 ||
      alcDeContent2 ||
      alcDeTitle3 ||
      alcDeContent3 ||
      alcDeTitle4 ||
      alcDeContent4 ? (
        <Box
          sx={{
            pt: { sm: "100px", xs: "80px" },
            pb: { sm: "100px", xs: "0px" },
          }}
        >
          <Container>
            <Grid container spacing={3}>
              {alcDeTitle1 ||
              alcDeContent1_1 ||
              alcDeContent1_2 ||
              alcDeContent1_3 ||
              alcDeContent1_4 ? (
                <Grid item sm={3} xs={6}>
                  <Typography
                    className="dialogDetail"
                    sx={{
                      typography: { sm: "body2", xs: "overline" },
                      pb: { sm: "10px", xs: "5px" },
                    }}
                  >
                    {alcDeTitle1}
                  </Typography>
                  <Typography
                    className="dialogDetailContent"
                    sx={{
                      typography: { sm: "subtitle1", xs: "body2" },
                    }}
                  >
                    {alcDeContent1_1} {alcDeContent1_2} <br />
                    {alcDeContent1_3} {alcDeContent1_4}
                  </Typography>
                </Grid>
              ) : (
                ""
              )}
              {alcDeTitle2 || alcDeContent2 ? (
                <Grid item sm={3} xs={6}>
                  <Typography
                    className="dialogDetail"
                    sx={{
                      typography: { sm: "body2", xs: "overline" },
                      pb: { sm: "10px", xs: "5px" },
                    }}
                  >
                    {alcDeTitle2}
                  </Typography>
                  <Typography
                    className="dialogDetailContent"
                    sx={{
                      typography: { sm: "subtitle1", xs: "body2" },
                    }}
                  >
                    {alcDeContent2}
                  </Typography>
                </Grid>
              ) : (
                ""
              )}
              {alcDeTitle3 || alcDeContent3 ? (
                <Grid item sm={3} xs={6}>
                  <Typography
                    className="dialogDetail"
                    sx={{
                      typography: { sm: "body2", xs: "overline" },
                      pb: { sm: "10px", xs: "5px" },
                    }}
                  >
                    {alcDeTitle3}
                  </Typography>
                  <Typography
                    className="dialogDetailContent"
                    sx={{
                      typography: { sm: "subtitle1", xs: "body2" },
                    }}
                  >
                    {alcDeContent3}
                  </Typography>
                </Grid>
              ) : (
                ""
              )}
              {alcDeTitle4 || alcDeContent4 ? (
                <Grid item sm={3} xs={6}>
                  <Typography
                    className="dialogDetail"
                    sx={{
                      typography: { sm: "body2", xs: "overline" },
                      pb: { sm: "10px", xs: "5px" },
                    }}
                  >
                    {alcDeTitle4}
                  </Typography>
                  <Typography
                    className="dialogDetailContent"
                    sx={{
                      typography: { sm: "subtitle1", xs: "body2" },
                    }}
                  >
                    {alcDeContent4}
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
      {alcDef ? (
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
              {alcDef}
            </Typography>
          </Container>
        </Box>
      ) : (
        ""
      )}
      {alcPrototypeVideo || alcPrototype1 || alcPrototype2 ? (
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
              DETAIL
            </Typography>
            {alcPrototypeVideo ? (
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
                  url={alcPrototypeVideo}
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
            {id == 1 ? (
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
                  url="https://www.youtube.com/embed/Cf-SD33nqWo"
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
            {alcPrototype1 ? (
              <Box
                component="img"
                sx={{
                  width: "100%",
                  pt: { sm: 2, xs: 1 },
                }}
                alt={alcTitle}
                src={alcPrototype1}
              />
            ) : (
              ""
            )}
            {alcPrototype2 ? (
              <Box
                component="img"
                sx={{
                  width: "100%",
                }}
                alt={alcTitle}
                src={alcPrototype2}
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

export default ALCDialog;
