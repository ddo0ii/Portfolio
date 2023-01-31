import React from "react";
import { Box, Divider, Typography } from "@mui/material";

function TopTitle({ subTitle, realTitle }) {
  return (
    <Box
      className="sa sa-right title"
      sx={{
        p: { sm: 0, xs: 2 },
        mb: { sm: 5, xs: 0 },
      }}
    >
      <Box className="smallTitle">
        <Divider
          sx={{
            borderBottomWidth: { sm: 3, xs: 1.5 },
            width: { sm: 30, xs: 20 },
            mr: { sm: 3, xs: 2 },
            backgroundColor: "#6750a4",
          }}
        />
        <Typography
          sx={{ color: "primary", fontSize: 10, letterSpacing: "5px" }}
        >
          <span>{subTitle}</span>
        </Typography>
      </Box>
      <Typography
        color="#1C1B1F"
        sx={{ typography: { sm: "h3", xs: "h4" } }}
        gutterBottom
      >
        <span>{realTitle}</span>
      </Typography>
    </Box>
  );
}

export default TopTitle;
