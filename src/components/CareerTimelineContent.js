import React from "react";
import TimelineContent from "@mui/lab/TimelineContent";
import { Box, Chip, Typography } from "@mui/material";
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
  timeSubTitle,
  content1,
  content1Date,
  content2,
  content2Date,
}) {
  return (
    <Timeline
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
            <WorkOutline sx={{ p: 0.6, color: "white" }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Box sx={{ mb: 2 }}>
            <Chip
              label={timeDate}
              size="small"
              sx={{
                backgroundColor: "#252525",
                color: "#DEDEDE",
                fontSize: "10px",
                fontWeight: "bold",
              }}
            />
          </Box>
          <Typography
            sx={{ typography: { sm: "h6", xs: "subtitle1" } }}
            component="span"
          >
            {timeTitle}
          </Typography>
          <Typography
            color="#959595"
            sx={{ typography: { sm: "body1", xs: "body2" } }}
          >
            {timeSubTitle}
          </Typography>
          <Box color="#959595" sx={{ mt: 2, ml: 1 }}>
            <Typography sx={{ fontSize: { sm: "14px", xs: "11px" } }}>
              {content1}
            </Typography>
            <Typography
              sx={{
                fontWeight: "100",
                fontSize: { sm: "11px", xs: "10px" },
                mb: 1,
              }}
            >
              {content1Date}
            </Typography>
            <Typography sx={{ fontSize: { sm: "14px", xs: "11px" } }}>
              {content2}
            </Typography>
            <Typography
              sx={{
                fontWeight: "100",
                fontSize: { sm: "11px", xs: "10px" },
                mb: 1,
              }}
            >
              {content2Date}
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
export default CareerTimelineContent;