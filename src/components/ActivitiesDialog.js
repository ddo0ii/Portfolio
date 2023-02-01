import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

function ActivitiesDialog({
  id,
  actImage,
  actTitle,
  atcSite,
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
  actPrototype1,
  actPrototype2,
}) {
  return (
    <div style={{ backgroundColor: "#1c1b1e" }}>
      <Box
        className="dialogTop"
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)), url(${actImage})`,
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
            ACTIVITIES
          </Typography>
          <Typography
            align="center"
            color="primary"
            sx={{
              // typography: { sm: "h2", xs: "h5" },
              fontSize: { sm: "50px", xs: "18px" },
              fontWeight: "bold",
              letterSpacing: { sm: "5px", xs: "2px" },
              mt: { sm: 2, xs: 1 },
            }}
          >
            <a className="DialogTitleLink" href={atcSite} target="_blank">
              {actTitle}
            </a>
          </Typography>
          <Typography
            align="center"
            color="#7a757f"
            sx={{
              typography: { sm: "h6", xs: "body2" },
              mt: { sm: 2, xs: 1 },
            }}
          >
            {actSubTitle}
          </Typography>
          <Typography
            align="center"
            color="#7a757f"
            sx={{
              typography: { sm: "h6", xs: "body2" },
              mt: { sm: 2, xs: 1 },
            }}
          >
            {actOrganizer}
          </Typography>
          <Typography
            align="center"
            color="#7a757f"
            sx={{
              typography: { sm: "h6", xs: "overline" },
              mb: { sm: 4, xs: 0 },
            }}
          >
            {actDate}
          </Typography>
        </Container>
      </Box>
      {actDeTitle1 ||
      actDeContent1_1 ||
      actDeContent1_2 ||
      actDeContent1_3 ||
      actDeContent1_4 ||
      actDeTitle2 ||
      actDeContent2 ||
      actDeTitle3 ||
      actDeContent3 ||
      actDeTitle4 ||
      actDeContent4 ? (
        <Box
          sx={{
            pt: { sm: "100px", xs: "80px" },
            pb: { sm: "100px", xs: "0px" },
          }}
        >
          <Container>
            <Grid container spacing={3}>
              {actDeTitle1 ||
              actDeContent1_1 ||
              actDeContent1_2 ||
              actDeContent1_3 ||
              actDeContent1_4 ? (
                <Grid item sm={3} xs={6}>
                  <Typography
                    className="dialogDetail"
                    sx={{
                      typography: { sm: "body2", xs: "overline" },
                      pb: { sm: "10px", xs: "5px" },
                    }}
                  >
                    {actDeTitle1}
                  </Typography>
                  <Typography
                    className="dialogDetailContent"
                    sx={{
                      typography: { sm: "subtitle1", xs: "body2" },
                    }}
                  >
                    {actDeContent1_1} {actDeContent1_2} <br />
                    {actDeContent1_3} {actDeContent1_4}
                  </Typography>
                </Grid>
              ) : (
                ""
              )}
              {actDeTitle2 || actDeContent2 ? (
                <Grid item sm={3} xs={6}>
                  <Typography
                    className="dialogDetail"
                    sx={{
                      typography: { sm: "body2", xs: "overline" },
                      pb: { sm: "10px", xs: "5px" },
                    }}
                  >
                    {actDeTitle2}
                  </Typography>
                  <Typography
                    className="dialogDetailContent"
                    sx={{
                      typography: { sm: "subtitle1", xs: "body2" },
                    }}
                  >
                    {actDeContent2}
                  </Typography>
                </Grid>
              ) : (
                ""
              )}
              {actDeTitle3 || actDeContent3 ? (
                <Grid item sm={3} xs={6}>
                  <Typography
                    className="dialogDetail"
                    sx={{
                      typography: { sm: "body2", xs: "overline" },
                      pb: { sm: "10px", xs: "5px" },
                    }}
                  >
                    {actDeTitle3}
                  </Typography>
                  <Typography
                    className="dialogDetailContent"
                    sx={{
                      typography: { sm: "subtitle1", xs: "body2" },
                    }}
                  >
                    {actDeContent3}
                  </Typography>
                </Grid>
              ) : (
                ""
              )}
              {actDeTitle4 || actDeContent4 ? (
                <Grid item sm={3} xs={6}>
                  <Typography
                    className="dialogDetail"
                    sx={{
                      typography: { sm: "body2", xs: "overline" },
                      pb: { sm: "10px", xs: "5px" },
                    }}
                  >
                    {actDeTitle4}
                  </Typography>
                  <Typography
                    className="dialogDetailContent"
                    sx={{
                      typography: { sm: "subtitle1", xs: "body2" },
                    }}
                  >
                    {actDeContent4}
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
      {actDef ? (
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
              {actDef}
            </Typography>
          </Container>
        </Box>
      ) : (
        ""
      )}
      {actPrototype1 || actPrototype2 ? (
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
            {actPrototype1 ? (
              <Box
                component="img"
                sx={{
                  width: "100%",
                }}
                alt={actTitle}
                src={actPrototype1}
              />
            ) : (
              ""
            )}
            {actPrototype2 ? (
              <Box
                component="img"
                sx={{
                  width: "100%",
                }}
                alt={actTitle}
                src={actPrototype2}
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

export default ActivitiesDialog;
