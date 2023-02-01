import React, { useEffect, useRef, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-regular-svg-icons";
import { faMedal, faTrophy } from "@fortawesome/free-solid-svg-icons";
import ALCDialog from "./ALCDialog";

function ALCContent({
  id,
  alcSImage,
  alcImage,
  alcIcon,
  alcTitle,
  alcSubTitle,
  alcOrganizer,
  alcDate,
  alcLecSite,
  alcSite,
  alcGithub,
  alcBlog,
  alcYouTube,
  alcDeTitle1,
  alcDeContent1_1,
  alcDeContent1_2,
  alcDeContent1_3,
  alcDeContent1_4,
  alcDeTitle2,
  alcDeContent2,
  alcDeTitle3,
  alcDeContent3,
  alcDeTitle4,
  alcDeContent4,
  alcDef,
  alcPrototypeVideo,
  alcPrototype1,
  alcPrototype2,
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
    <Grid
      className="sa sa-up"
      item
      sm={6}
      xs={12}
      sx={{
        "&:hover": { backgroundColor: "#E7E0EC", cursor: "pointer" },
      }}
    >
      <Box className="sizingUpBox ALCContent" onClick={handleClickOpen("body")}>
        <Grid container>
          <Grid className="ALCContentLogo" item sm={3} xs={3}>
            <Stack direction="row">
              <Avatar
                sx={{
                  bgcolor: "#e9ddff",
                  width: { sm: 70, xs: 35 },
                  height: { sm: 70, xs: 35 },
                }}
              >
                <Typography sx={{ fontSize: { sm: "30px", xs: "15px" } }}>
                  {alcIcon == "faTrophy" ? (
                    <FontAwesomeIcon
                      icon={faTrophy}
                      style={{ color: "#22005d" }}
                    />
                  ) : alcIcon == "faAward" ? (
                    <FontAwesomeIcon
                      icon={faTrophy}
                      style={{ color: "#22005d" }}
                    />
                  ) : alcIcon == "faMedal" ? (
                    <FontAwesomeIcon
                      icon={faMedal}
                      style={{ color: "#22005d" }}
                    />
                  ) : alcIcon == "faIdCard" ? (
                    <FontAwesomeIcon
                      icon={faIdCard}
                      style={{ color: "#22005d" }}
                    />
                  ) : (
                    ""
                  )}
                </Typography>
              </Avatar>
            </Stack>
          </Grid>
          <Grid item sm={9} xs={9}>
            <Box pr={3}>
              <Typography
                color="background"
                sx={{
                  fontSize: { sm: "18px", xs: "13px" },
                  mb: { sm: 1, xs: 0.5 },
                  fontWeight: "bold",
                }}
              >
                {alcTitle}
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography
                  color="secondary"
                  sx={{ fontSize: { sm: "13px", xs: "10px" } }}
                >
                  {alcSubTitle}
                </Typography>
                <Typography
                  color="secondary"
                  sx={{ fontSize: { sm: "13px", xs: "10px" } }}
                >
                  {alcOrganizer}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Paper>
        <Dialog
          // fullWidth={true}
          maxWidth="md"
          open={open}
          onClose={handleClose}
          scroll={scroll}
        >
          <ALCDialog
            id={id}
            alcSImage={alcSImage}
            alcImage={alcImage}
            alcTitle={alcTitle}
            alcIcon={alcIcon}
            alcSubTitle={alcSubTitle}
            alcOrganizer={alcOrganizer}
            alcDate={alcDate}
            alcLecSite={alcLecSite}
            alcSite={alcSite}
            alcGithub={alcGithub}
            alcBlog={alcBlog}
            alcYouTube={alcYouTube}
            alcDeTitle1={alcDeTitle1}
            alcDeContent1_1={alcDeContent1_1}
            alcDeContent1_2={alcDeContent1_2}
            alcDeContent1_3={alcDeContent1_3}
            alcDeContent1_4={alcDeContent1_4}
            alcDeTitle2={alcDeTitle2}
            alcDeContent2={alcDeContent2}
            alcDeTitle3={alcDeTitle3}
            alcDeContent3={alcDeContent3}
            alcDeTitle4={alcDeTitle4}
            alcDeContent4={alcDeContent4}
            alcDef={alcDef}
            alcPrototypeVideo={alcPrototypeVideo}
            alcPrototype1={alcPrototype1}
            alcPrototype2={alcPrototype2}
          />
          <DialogActions sx={{ backgroundColor: "#1c1b1e" }}>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </Grid>
  );
}

export default ALCContent;
