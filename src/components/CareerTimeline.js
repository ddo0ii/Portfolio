import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { DevicesOutlined } from "@mui/icons-material";
import { Box, Chip, Typography } from "@mui/material";

function CareerTimeline() {
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
          <TimelineDot>
            <DevicesOutlined sx={{ p: 0.6 }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Box sx={{ mb: 2 }}>
            <Chip
              label="March 2015 - February 2020"
              size="small"
              sx={{
                backgroundColor: "#252525",
                color: "#DEDEDE",
                fontSize: "10px",
                fontWeight: "bold",
              }}
            />
          </Box>
          <Typography variant="h6" component="span">
            Handong Global Univ.
          </Typography>
          <Typography>
            Computer Engineering (Science and Electrical Engineering)
          </Typography>
          <Box sx={{ mt: 2, ml: 1 }}>
            <Typography sx={{ fontSize: "14px" }}>
              시선 (소외된 이웃을 위한 IT 솔루션 연구 학회)
            </Typography>
            <Typography sx={{ fontWeight: "100", fontSize: "11px", mb: 1 }}>
              March 2017 - July 2018
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>
              Student for Christ(학생신앙운동) 동아리
            </Typography>
            <Typography sx={{ fontWeight: "100", fontSize: "11px", mb: 1 }}>
              March 2015 - February 2020
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
export default CareerTimeline;
