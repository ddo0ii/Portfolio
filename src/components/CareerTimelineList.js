import React from "react";
import { Box } from "@mui/material";
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
