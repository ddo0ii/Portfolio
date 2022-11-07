import React from "react";
import { Box, Divider, Typography } from "@mui/material";

function TopTitle({ subTitle, realTitle }) {
  return (
    <Box className="title" sx={{ p: { sm: 0, xs: 2 }, mb: { sm: 5, xs: 0 } }}>
      <Box className="smallTitle">
        <Divider
          color="#C27D5B"
          sx={{
            borderBottomWidth: { sm: 3, xs: 1.5 },
            width: { sm: 30, xs: 20 },
            mr: { sm: 3, xs: 2 },
          }}
        />
        <Typography
          color="#C27D5B"
          sx={{
            fontSize: 10,
            letterSpacing: "5px",
          }}
        >
          {subTitle}
        </Typography>
      </Box>
      <Typography sx={{ typography: { sm: "h3", xs: "h4" } }} gutterBottom>
        <b>{realTitle}</b>
      </Typography>
    </Box>
  );
}

export default TopTitle;
