import React from "react";
import { Box, Chip, Typography } from "@mui/material";
import CareerTimelineContent from "./CareerTimelineContent";

const CareerTimelineList = ({ careerList }) => {
  return (
    <Box>
      {careerList.map((it) => (
        <CareerTimelineContent key={it.id} {...it} />
      ))}
    </Box>
  );
};
export default CareerTimelineList;
