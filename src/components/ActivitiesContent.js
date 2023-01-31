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
    <Box className="sa sa-left" key={id} sx={{ cursor: "pointer" }}>
      <ImageListItem className="sizingUpImg" onClick={handleClickOpen("body")}>
        <img
          src={actImage}
          alt={actTitle}
          loading="lazy"
          style={{ filter: "brightness(30%)", height: "350px" }}
        />
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
          maxWidth="md"
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
          <DialogActions sx={{ backgroundColor: "#1c1b1e" }}>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </Box>
  );
}

export default ActivitiesContent;
