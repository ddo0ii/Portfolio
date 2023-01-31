import React from "react";
import { Box, Chip, Typography } from "@mui/material";
import TimelineContent from "@mui/lab/TimelineContent";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import { WorkOutline } from "@mui/icons-material";

function CareerTimelineContent({
  id,
  timeDate,
  timeTitle,
  timeTitleLink,
  timeSubTitle,
  content1,
  content1Date,
  content1Link,
  content2,
  content2Date,
  content2Link,
}) {
  return (
    <Timeline
      // className="sa sa-left"
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <WorkOutline sx={{ p: 0.6 }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2, color: "secondary" }}>
          <Box sx={{ mb: 2 }}>
            <Chip
              label={timeDate}
              size="small"
              sx={{
                fontSize: "10px",
                fontWeight: "bold",
              }}
            />
          </Box>
          <a className="CareerLink" href={timeTitleLink} target="_blank">
            <Typography
              sx={{
                typography: { sm: "h6", xs: "subtitle1" },
              }}
              component="span"
            >
              {timeTitle}
            </Typography>
            <Typography sx={{ typography: { sm: "body1", xs: "body2" } }}>
              {timeSubTitle}
            </Typography>
          </a>
          {content1 || content1Date || content2 || content2Date ? (
            <Box sx={{ mt: 2, ml: 1 }}>
              <a className="CareerLink" href={content1Link} target="_blank">
                <Typography sx={{ fontSize: { sm: "14px", xs: "11px" } }}>
                  {content1}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "300",
                    fontSize: { sm: "11px", xs: "10px" },
                    mb: 1,
                  }}
                >
                  {content1Date}
                </Typography>
              </a>
              <a className="CareerLink" href={content2Link} target="_blank">
                <Typography sx={{ fontSize: { sm: "14px", xs: "11px" } }}>
                  {content2}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "300",
                    fontSize: { sm: "11px", xs: "10px" },
                    mb: 1,
                  }}
                >
                  {content2Date}
                </Typography>
              </a>
            </Box>
          ) : (
            ""
          )}
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
export default CareerTimelineContent;
