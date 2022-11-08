import React from "react";
import { Box, Grid, Paper, styled } from "@mui/material";
import {
  BadgeOutlined,
  EmojiEventsOutlined,
  MilitaryTechOutlined,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-regular-svg-icons";
import { faAward, faMedal, faTrophy } from "@fortawesome/free-solid-svg-icons";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function ALCList() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={0.5}>
        <Grid item sm={4} xs={12}>
          <Item>1</Item>
          <MilitaryTechOutlined />
          <EmojiEventsOutlined />
          <WorkspacePremiumOutlined />
          <BadgeOutlined />
          <FontAwesomeIcon icon={faIdCard} />
          <FontAwesomeIcon icon={faMedal} />
          <FontAwesomeIcon icon={faAward} />
          <FontAwesomeIcon icon={faTrophy} />
        </Grid>
        <Grid item sm={4} xs={12}>
          <Item>2</Item>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Item>3</Item>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ALCList;
