import React from "react";
import { Box, Container } from "@mui/material";
import TopTitle from "../components/TopTitle";
import ProjectTabs from "../components/ProjectTabs";

function Projects() {
  return (
    <Box
      sx={{
        pt: { sm: "50px", xs: "20px" },
        pb: { sm: "100px", xs: "80px" },
      }}
    >
      <Container>
        <TopTitle subTitle="MY PORTFOLIO" realTitle="PROJECTS" />
        <ProjectTabs />
      </Container>
    </Box>
  );
}

export default Projects;
