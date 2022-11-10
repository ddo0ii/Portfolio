import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import ProjectDialog from "./ProjectDialog";

function ProjectBox() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <Grid
      item
      xs={12}
      sm={4}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Card
        elevation={10}
        onClick={handleClickOpen("body")}
        sx={{ maxWidth: 300, mb: { sm: 5, xs: 0 }, borderRadius: 0 }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={`${process.env.PUBLIC_URL}/images/projectImg/project1.jpg`}
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
      <Paper elevation={10}>
        <Dialog
          fullWidth={true}
          maxWidth="xl"
          open={open}
          onClose={handleClose}
          scroll={scroll}
          // aria-labelledby="scroll-dialog-title"
          // aria-describedby="scroll-dialog-description"
        >
          <ProjectDialog />
          <DialogActions sx={{ backgroundColor: "#0F0F0F" }}>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
          {/* hello */}
          {/* <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle> */}
          {/* <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Box>Hello</Box>
          </DialogContentText>
        </DialogContent> */}
        </Dialog>
      </Paper>
    </Grid>
  );
}

export default ProjectBox;
