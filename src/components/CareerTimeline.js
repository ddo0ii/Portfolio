import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { DevicesOutlined } from "@mui/icons-material";
import CareerTimelineContent from "./CareerTimelineContent";

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
          <TimelineDot color="primary">
            <DevicesOutlined sx={{ p: 0.6, color: "white" }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <CareerTimelineContent
          timeDate="March 2015 - February 2020"
          timeTitle="Handong Global Univ."
          timeSubTitle=" Computer Engineering (Science and Electrical Engineering)"
          content1="시선 (소외된 이웃을 위한 IT 솔루션 연구 학회)"
          content1Date="March 2017 - July 2018"
          content2="Student for Christ(학생신앙운동) 동아리"
          content2Date="March 2015 - February 2020"
        />
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
