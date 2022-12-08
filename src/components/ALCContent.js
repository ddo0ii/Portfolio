import React, { useEffect, useRef, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import {
  BadgeOutlined,
  EmojiEventsOutlined,
  MilitaryTechOutlined,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
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
      item
      sm={4}
      xs={12}
      sx={{
        "&:hover": { backgroundColor: "black", cursor: "pointer" },
      }}
    >
      <Box
        className="sizingUpBox"
        onClick={handleClickOpen("body")}
        ml={{ sm: 4, xs: 2 }}
        mt={{ sm: 8, xs: 2 }}
        sx={{ height: "300px" }}
      >
        <Stack direction="row" mb={{ sm: 8, xs: 3 }}>
          <Avatar
            sx={{
              bgcolor: "#D9D9D9",
              width: { sm: 70, xs: 35 },
              height: { sm: 70, xs: 35 },
            }}
          >
            <Typography sx={{ fontSize: { sm: "30px", xs: "15px" } }}>
              {alcIcon == "faTrophy" ? (
                <FontAwesomeIcon icon={faTrophy} style={{ color: "black" }} />
              ) : alcIcon == "faAward" ? (
                <FontAwesomeIcon icon={faTrophy} style={{ color: "black" }} />
              ) : alcIcon == "faMedal" ? (
                <FontAwesomeIcon icon={faMedal} style={{ color: "black" }} />
              ) : alcIcon == "faIdCard" ? (
                <FontAwesomeIcon icon={faIdCard} style={{ color: "black" }} />
              ) : (
                ""
              )}
            </Typography>
          </Avatar>
        </Stack>
        <Typography
          sx={{
            fontSize: { sm: "20px", xs: "13px" },
            mb: { sm: 1, xs: 0.5 },
          }}
        >
          <b>{alcTitle}</b>
        </Typography>
        <Box color="#959595" sx={{ mb: 2 }}>
          <Typography sx={{ fontSize: { sm: "13px", xs: "10px" } }}>
            {alcSubTitle}
          </Typography>
          <Typography sx={{ fontSize: { sm: "13px", xs: "10px" } }}>
            {alcOrganizer}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Divider
            color="white"
            sx={{
              borderBottomWidth: { sm: 3, xs: 1.5 },
              width: { sm: 30, xs: 20 },
              mr: { sm: 3, xs: 1.5 },
            }}
          />
          <Typography
            color="white"
            sx={{
              fontSize: { sm: "13px", xs: "10px" },
            }}
          >
            더보기
          </Typography>
        </Box>
      </Box>
      <Paper elevation={10}>
        <Dialog
          // fullWidth={true}
          maxWidth="xl"
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
          <DialogActions sx={{ backgroundColor: "#0F0F0F" }}>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </Grid>
  );
}

export default ALCContent;
