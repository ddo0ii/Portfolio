import React from "react";
import { ImageList } from "@mui/material";
import ActivitiesContent from "./ActivitiesContent";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const ActivitiesList = ({ actiData }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <ImageList cols={matches ? 3 : 1}>
      {actiData.map((it) => (
        <ActivitiesContent key={it.id} {...it} />
      ))}
    </ImageList>
  );
};

export default ActivitiesList;
