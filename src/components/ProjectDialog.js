import { Box, Container, Typography } from "@mui/material";
import React from "react";

function ProjectDialog() {
  return (
    <div>
      <Box className="projectDialogTop">
        <Container>
          <Typography
            align="center"
            gutterBottom
            color="primary"
            sx={{ typography: { sm: "h1", xs: "h4" } }}
          >
            <b>부동산 계산기</b>
          </Typography>
          <Typography
            align="center"
            gutterBottom
            color="secondary"
            sx={{
              typography: { sm: "h4", xs: "body1" },
            }}
          >
            케이페이스 인턴(개발팀)
          </Typography>
          <Typography
            align="center"
            gutterBottom
            color="secondary"
            sx={{
              typography: { sm: "h4", xs: "body1" },
            }}
          >
            DECEMBER 2019 - February 2020
          </Typography>
        </Container>
      </Box>
    </div>
  );
}

export default ProjectDialog;
