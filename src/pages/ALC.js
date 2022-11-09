import React from "react";
import { Box, Container, Grid } from "@mui/material";
import TopTitle from "../components/TopTitle";
import ALCList from "../components/ALCList";

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
        <Grid container rowSpacing={1} columnSpacing={0.5}>
          <ALCList />
          <ALCList />
          <ALCList />
          <ALCList />
          <ALCList />
        </Grid>
      </Container>
    </Box>
  );
}

export default ALC;
