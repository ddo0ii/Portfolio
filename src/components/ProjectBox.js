import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

function ProjectBox() {
  return (
    <Grid item xs={4}>
      <Card elevation={8} sx={{ maxWidth: 300, mb: 5, borderRadius: 0 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
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
    </Grid>
  );
}

export default ProjectBox;
