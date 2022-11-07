import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

function ProjectBox() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="./images/projectImg/project1.jpg"
          alt="green iguana"
          sx={{
            filter: "brightness(50%)",
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Land Transfer Tax Calculator
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              border: 1,
              borderColor: "#E8E8E8",
              p: "2px",
              pl: 1,
              pr: 1,
              mr: 1,
            }}
          >
            Vue.js
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              border: 1,
              borderColor: "#E8E8E8",
              p: "2px",
              pl: 1,
              pr: 1,
              mr: 1,
            }}
          >
            Nuxt.js
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProjectBox;
