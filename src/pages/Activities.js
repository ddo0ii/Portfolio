import React from "react";
import { Box, Container } from "@mui/material";
import TopTitle from "../components/TopTitle";
import ActivitiesList from "../components/ActivitiesList";

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
        <ActivitiesList />
      </Container>
    </Box>
  );
}

export default Activities;
