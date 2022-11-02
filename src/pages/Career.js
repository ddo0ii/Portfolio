import React from "react";
import CareerTabs from "../components/CareerTabs";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";

function Career() {
  return (
    <Box
      sx={{
        backgroundColor: "#161617",
        pt: { sm: "100px", xs: "80px" },
        pb: { sm: "100px", xs: "80px" },
      }}
    >
      <Container>
        <Box>
          <Grid className="title" container>
            <Grid
              item
              xs={1}
              sm={1}
              sx={{
                pr: { sm: "20px", xs: "10px" },
                pl: { sm: "45px", xs: "0px" },
              }}
            >
              <Divider
                color="#C27D5B"
                sx={{
                  borderBottomWidth: { sm: 3, xs: 1.5 },
                }}
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <Typography
                color="#C27D5B"
                sx={{
                  fontSize: 10,
                  letterSpacing: "5px",
                }}
              >
                CAREER PATH
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Typography>CAREER PATH</Typography>
        <Typography>EDUCATION & WORK EXPERIENCE</Typography>
        <CareerTabs />
      </Container>
    </Box>
  );
}

export default Career;
