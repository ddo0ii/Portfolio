import React from "react";
import { Box, Container } from "@mui/material";
import TopTitle from "../components/TopTitle";

function ALC() {
  return (
    <Box
      sx={{
        pt: { sm: "50px", xs: "20px" },
        pb: { sm: "100px", xs: "80px" },
      }}
    >
      <Container>
        <TopTitle
          subTitle="QUALIFICATION"
          realTitle="AWARD & LICENSE & CERTIFICATE"
        />
      </Container>
    </Box>
  );
}

export default ALC;
