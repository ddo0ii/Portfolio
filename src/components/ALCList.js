import React from "react";
import { Grid } from "@mui/material";
import ALCContent from "./ALCContent";

const ALCList = ({ alcList }) => {
  return (
    <Grid container rowSpacing={1} columnSpacing={0.5}>
      {alcList.map((it) => (
        <ALCContent key={it.id} {...it} />
      ))}
    </Grid>
  );
};
export default ALCList;
