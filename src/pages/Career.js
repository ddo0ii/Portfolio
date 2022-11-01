import React from "react";
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";
import CareerTabs from "../components/CareerTabs";

function Career() {
  return (
    <Box sx={{ backgroundColor: "#161617" }}>
      <Container>
        <Typography>CAREER PATH</Typography>
        <Typography>EDUCATION & WORK EXPERIENCE</Typography>
        <CareerTabs />
      </Container>
    </Box>
  );
}

export default Career;
