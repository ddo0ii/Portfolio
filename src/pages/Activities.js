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
        <Box sx={{ p: { sm: 0, xs: 2 } }}>
          <TopTitle subTitle="MY PRACTICAL EXPERIENCE" realTitle="ACTIVITIES" />
        </Box>
      </Container>
    </Box>
  );
}

export default Activities;
