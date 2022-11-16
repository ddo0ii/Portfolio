import React from "react";
import { Box, Container } from "@mui/material";
import TopTitle from "../components/TopTitle";
import ProjectList from "../components/ProjectList";

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
        <ProjectList />
      </Container>
    </Box>
  );
}

export default Projects;
