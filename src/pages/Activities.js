import React from "react";
import { Box, Container } from "@mui/material";
import TopTitle from "../components/TopTitle";

function Activities() {
  return (
    <Box
      sx={{
        pt: { sm: "50px", xs: "20px" },
        pb: { sm: "100px", xs: "80px" },
      }}
    >
      <Container>
        <TopTitle subTitle="MY PRACTICAL EXPERIENCE" realTitle="ACTIVITIES" />
      </Container>
    </Box>
  );
}

export default Activities;
