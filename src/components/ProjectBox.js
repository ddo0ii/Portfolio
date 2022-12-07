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
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

function ProjectBox({
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

  const AnimationBox = () => {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);

    return (
      <motion.div
        className="box"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <Card
          className="cardContent"
          elevation={10}
          onClick={handleClickOpen("body")}
          sx={{
            //maxWidth: 300,
            borderRadius: 0,
            filter: "brightness(50%)",
          }}
        >
          <CardActionArea>
            <CardMedia className="sizingUpImg" height="300">
              <LazyLoadImage
                src={pjSImage}
                alt={`${pjTitle} Image`}
                effect="blur"
                width="100%"
                height="300"
                style={{ margin: 0, padding: 0 }}
              />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {pjTitle}
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {pjDeContent1_1 ? (
                  <Box
                    color="text.secondary"
                    sx={{
                      border: 1,
                      borderColor: "#E8E8E8",
                      p: "2px",
                      pl: 1,
                      pr: 1,
                      mr: 1,
                      mb: 1,
                    }}
                  >
                    {pjDeContent1_1}
                  </Box>
                ) : (
                  ""
                )}
                {pjDeContent1_2 ? (
                  <Box
                    color="text.secondary"
                    sx={{
                      border: 1,
                      borderColor: "#E8E8E8",
                      p: "2px",
                      pl: 1,
                      pr: 1,
                      mr: 1,
                      mb: 1,
                    }}
                  >
                    {pjDeContent1_2}
                  </Box>
                ) : (
                  ""
                )}
                {pjDeContent1_3 ? (
                  <Box
                    color="text.secondary"
                    sx={{
                      border: 1,
                      borderColor: "#E8E8E8",
                      p: "2px",
                      pl: 1,
                      pr: 1,
                      mr: 1,
                      mb: 1,
                    }}
                  >
                    {pjDeContent1_3}
                  </Box>
                ) : (
                  ""
                )}
                {pjDeContent1_4 ? (
                  <Box
                    color="text.secondary"
                    sx={{
                      border: 1,
                      borderColor: "#E8E8E8",
                      p: "2px",
                      pl: 1,
                      pr: 1,
                      mr: 1,
                      mb: 1,
                    }}
                  >
                    {pjDeContent1_4}
                  </Box>
                ) : (
                  ""
                )}
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </motion.div>
    );
  };

  return (
    <Box>
      <AnimationBox></AnimationBox>
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

export default ProjectBox;
