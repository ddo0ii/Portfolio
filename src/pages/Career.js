import React from "react";
import { Box, Container } from "@mui/material";
import CareerTimeline from "../components/CareerTimeline";
import TopTitle from "../components/TopTitle";

function Career() {
  return (
    <Box
      sx={{
        pt: { sm: "50px", xs: "20px" },
        pb: { sm: "100px", xs: "50px" },
      }}
    >
      <Container>
        <TopTitle subTitle="CAREER PATH" realTitle="EXPERIENCE & EDUCATION" />
        <CareerTimeline />
      </Container>
    </Box>
  );
}

export default Career;
