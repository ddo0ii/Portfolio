import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  Paper,
  Typography,
} from "@mui/material";
import ProjectDialog from "./ProjectDialog";
import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

function ProjectContent({
  id,
  pjType,
  pjSImage,
  pjImage,
  pjTitle,
  pjSubTitle,
  pjDuration,
  pjLecSite,
  pjSite,
  pjGithub,
  pjBlog,
  pjYouTube,
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

  const animatedItem = {
    0: useScrollFadeIn("right", 1),
    1: useScrollFadeIn("right", 1, 0.2),
    2: useScrollFadeIn("right", 1, 0.4),
  };

  return (
    <Box>
      <Box
        className="sizingUpBox"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Card
          {...animatedItem[2]}
          className="cardContent"
          elevation={10}
          onClick={handleClickOpen("body")}
          sx={{
            //maxWidth: 300,
            borderRadius: 0,
            //backgroundColor: "rgba( 255, 255, 255, 0.1 )",
            backgroundColor: "transparent",
            width: "95%",
            mb: 3,
            boxShadow: 20,
          }}
        >
          <CardActionArea>
            <CardMedia className="sizingUpImg" height="300">
              <LazyLoadImage
                src={pjSImage}
                alt={`${pjTitle} Image`}
                effect="blur"
                width="100%"
                height="250"
                style={{ margin: 0, padding: 0 }}
              />
            </CardMedia>
            <CardContent sx={{ height: "200px" }}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  color: "#E8E8E8",
                  mt: 1,
                  mb: 2,
                }}
              >
                {pjDeContent1_1 ? (
                  <Typography variant="caption" sx={{ mr: 1 }}>
                    {pjDeContent1_1}
                  </Typography>
                ) : (
                  ""
                )}
                {pjDeContent1_2 ? (
                  <Typography variant="caption" sx={{ mr: 1 }}>
                    {pjDeContent1_2}
                  </Typography>
                ) : (
                  ""
                )}
                {pjDeContent1_3 ? (
                  <Typography variant="caption" sx={{ mr: 1 }}>
                    {pjDeContent1_3}
                  </Typography>
                ) : (
                  ""
                )}
                {pjDeContent1_4 ? (
                  <Typography variant="caption" sx={{ mr: 1 }}>
                    {pjDeContent1_4}
                  </Typography>
                ) : (
                  ""
                )}
              </Box>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  color: "white",

                  fontWeight: "bold",
                  mb: 3,
                }}
              >
                {pjTitle}
              </Typography>
              <Box
                sx={{
                  color: "#C27D5B",
                  position: "absolute",
                  bottom: "30px",
                }}
              >
                <Typography sx={{ display: "inline", mr: 2 }}>
                  Read More
                </Typography>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  sx={{ display: "inline" }}
                />
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
      <Paper elevation={10}>
        <Dialog
          //fullWidth={true}
          maxWidth="xl"
          open={open}
          onClose={handleClose}
          scroll={scroll}
        >
          <ProjectDialog
            id={id}
            pjType={pjType}
            pjSImage={pjSImage}
            pjImage={pjImage}
            pjTitle={pjTitle}
            pjSubTitle={pjSubTitle}
            pjDuration={pjDuration}
            pjLecSite={pjLecSite}
            pjSite={pjSite}
            pjGithub={pjGithub}
            pjBlog={pjBlog}
            pjYouTube={pjYouTube}
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

export default ProjectContent;
