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

  return (
    <Box
    // className="sa sa-right"
    >
      <Box
        className="sizingUpBox"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Card
          className="cardContent"
          elevation={2}
          onClick={handleClickOpen("body")}
          sx={{
            borderRadius: 2,
            backgroundColor: "#EADDFF",
            width: "95%",
            mb: 3,
          }}
        >
          <CardActionArea>
            <CardMedia className="sizingUpImg" height="300">
              <LazyLoadImage
                src={pjSImage}
                alt={`${pjTitle} Image`}
                effect="blur"
                width="100%"
                height="200"
                style={{ margin: 0, padding: 0, borderRadius: 10 }}
              />
            </CardMedia>
            <CardContent sx={{ height: "180px" }}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  mb: 1,
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
                color="background"
                sx={{
                  fontWeight: "bold",
                }}
              >
                {pjTitle}
              </Typography>
              <Box
                sx={{
                  position: "absolute",
                  bottom: "20px",
                }}
              >
                <Typography
                  variant="subtitle2"
                  color="primary"
                  sx={{ display: "inline", mr: 2 }}
                >
                  Read More
                </Typography>
                <FontAwesomeIcon
                  color="#6750a4"
                  icon={faArrowRight}
                  sx={{ display: "inline" }}
                />
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
      <Paper>
        <Dialog
          //fullWidth={true}
          maxWidth="md"
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
