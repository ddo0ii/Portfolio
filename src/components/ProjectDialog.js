import { Box, Container, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const TopImage = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${process.env.PUBLIC_URL + "/images/projectImg/project1.jpg"});
`;

function ProjectDialog() {
  return (
    <div>
      <TopImage className="projectDialogTop">
        <Container>
          <Typography
            align="center"
            color="#989796"
            sx={{
              fontSize: { sm: "14px", xs: "7px" },
              letterSpacing: "4px",
              mt: { sm: 20, xs: 10 },
            }}
          >
            PROJECT
          </Typography>
          <Typography
            align="center"
            color="secondary"
            sx={{
              // typography: { sm: "h2", xs: "h5" },
              fontSize: { sm: "80px", xs: "30px" },
              letterSpacing: { sm: "5px", xs: "2px" },
              mt: { sm: 2, xs: 1 },
            }}
          >
            <b>부동산 계산기</b>
          </Typography>
          <Typography
            align="center"
            color="#989796"
            sx={{
              typography: { sm: "h5", xs: "body2" },
              mt: { sm: 3, xs: 2 },
            }}
          >
            케이페이스 인턴(개발팀)
          </Typography>
          <Typography
            align="center"
            color="#989796"
            sx={{
              typography: { sm: "h6", xs: "overline" },
              mb: { sm: 15, xs: 8 },
            }}
          >
            DECEMBER 2019 - FEBRUARY 2020
          </Typography>
        </Container>
      </TopImage>
    </div>
  );
}

export default ProjectDialog;
