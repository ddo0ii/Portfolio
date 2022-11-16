import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  Grid,
  ImageListItem,
  ImageListItemBar,
  Paper,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ProjectDialog from "./ProjectDialog";

function ProjectBox({
  id,
  pjType,
  pjImage,
  pjTitle,
  pjSubTitle,
  pjDuration,
  pjDeTitle1,
  pjDeContent1_1,
  pjDeContent1_2,
  pjDeContent1_3,
  pjDeContent1_4,
  pjDeTitle2,
  pjDeContent2,
  pjDeTitle3,
  pjDeContent3,
  pjDeTitle4,
  pjDeContent4,
  pjDef,
  pjPrototype,
  pjPrototypeAlt,
  pjVideo,
}) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

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
    <Box>
      <ImageListItem onClick={handleClickOpen("body")}>
        <img
          src={process.env.PUBLIC_URL + pjImage}
          alt={pjTitle}
          loading="lazy"
          style={{ filter: "brightness(30%)" }}
        />
        <ImageListItemBar
          title={pjTitle}
          subtitle={pjSubTitle}
          position="below"
          sx={{ color: "black", backgroundColor: "white" }}
        />
      </ImageListItem>
      <Paper elevation={10}>
        <Dialog
          fullWidth={true}
          maxWidth="xl"
          open={open}
          onClose={handleClose}
          scroll={scroll}
        >
          <ProjectDialog
            id={id}
            pjType={pjType}
            pjImage={pjImage}
            pjTitle={pjTitle}
            pjSubTitle={pjSubTitle}
            pjDuration={pjDuration}
            pjDeTitle1={pjDeTitle1}
            pjDeContent1_1={pjDeContent1_1}
            pjDeContent1_2={pjDeContent1_2}
            pjDeContent1_3={pjDeContent1_3}
            pjDeContent1_4={pjDeContent1_4}
            pjDeTitle2={pjDeTitle2}
            pjDeContent2={pjDeContent2}
            pjDeTitle3={pjDeTitle3}
            pjDeContent3={pjDeContent3}
            pjDeTitle4={pjDeTitle4}
            pjDeContent4={pjDeContent4}
            pjDef={pjDef}
            pjPrototype={pjPrototype}
            pjPrototypeAlt={pjPrototypeAlt}
            pjVideo={pjVideo}
          />
          <DialogActions sx={{ backgroundColor: "#0F0F0F" }}>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </Box>
  );
}

export default ProjectBox;
