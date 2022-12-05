import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  ImageListItem,
  ImageListItemBar,
  Paper,
} from "@mui/material";
import ActivitiesDialog from "./ActivitiesDialog";

function ActivitiesContent({
  id,
  actImage,
  actTitle,
  atcSite,
  actSubTitle,
  actOrganizer,
  actDate,
  actDeTitle1,
  actDeContent1_1,
  actDeContent1_2,
  actDeContent1_3,
  actDeContent1_4,
  actDeTitle2,
  actDeContent2,
  actDeTitle3,
  actDeContent3,
  actDeTitle4,
  actDeContent4,
  actDef,
  actPrototype1,
  actPrototype2,
}) {
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
    <Box
      key={id}
      sx={{
        cursor: "pointer",
      }}
    >
      <ImageListItem onClick={handleClickOpen("body")}>
        <Box
          sx={{
            width: "100%",
            filter: "brightness(70%)",
            "&:hover": { filter: "brightness(100%)" },
          }}
        >
          <img
            src={actImage}
            alt={actTitle}
            loading="lazy"
            style={{
              width: "100%",
              height: "350px",
            }}
          />
        </Box>
        <ImageListItemBar
          title={actTitle}
          subtitle={actSubTitle}
          sx={{
            backgroundColor: "transparent",
          }}
        />
      </ImageListItem>
      <Paper elevation={10}>
        <Dialog
          // fullWidth={true}
          maxWidth="xl"
          open={open}
          onClose={handleClose}
          scroll={scroll}
        >
          <ActivitiesDialog
            id={id}
            actImage={actImage}
            actTitle={actTitle}
            actSubTitle={actSubTitle}
            atcSite={atcSite}
            actOrganizer={actOrganizer}
            actDate={actDate}
            actDeTitle1={actDeTitle1}
            actDeContent1_1={actDeContent1_1}
            actDeContent1_2={actDeContent1_2}
            actDeContent1_3={actDeContent1_3}
            actDeContent1_4={actDeContent1_4}
            actDeTitle2={actDeTitle2}
            actDeContent2={actDeContent2}
            actDeTitle3={actDeTitle3}
            actDeContent3={actDeContent3}
            actDeTitle4={actDeTitle4}
            actDeContent4={actDeContent4}
            actDef={actDef}
            actPrototype1={actPrototype1}
            actPrototype2={actPrototype2}
          />
          <DialogActions sx={{ backgroundColor: "#0F0F0F" }}>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </Box>
  );
}

export default ActivitiesContent;
