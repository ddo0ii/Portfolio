import React from "react";
import { Box, Container, Divider, Typography } from "@mui/material";
import CareerTimeline from "../components/CareerTimeline";

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
        <Box sx={{ p: { sm: 0, xs: 2 } }}>
          <Box className="title">
            <Box className="smallTitle">
              <Divider
                color="#C27D5B"
                sx={{
                  borderBottomWidth: { sm: 3, xs: 1.5 },
                  width: { sm: 30, xs: 20 },
                  mr: { sm: 3, xs: 2 },
                }}
              />
              <Typography
                color="#C27D5B"
                sx={{
                  fontSize: 10,
                  letterSpacing: "5px",
                }}
              >
                CAREER PATH
              </Typography>
            </Box>
            <Typography
              sx={{ typography: { sm: "h3", xs: "h4" } }}
              gutterBottom
            >
              <b>EXPERIENCE & EDUCATION</b>
            </Typography>
          </Box>
        </Box>
        <CareerTimeline />
      </Container>
    </Box>
  );
}

export default Career;
