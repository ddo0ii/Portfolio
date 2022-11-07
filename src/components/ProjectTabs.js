import React from "react";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import ProjectBox from "./ProjectBox";
import { Grid } from "@mui/material";

const colors = {
  1: "#C27D5B",
  2: "#DEDEDE",
  3: "#959595",
  4: "#3F3F3F",
  5: "#f7ad88",
  100: "#C2E0FF",
  200: "#80BFFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: ${colors[2]};
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  /* width: 100%; */
  padding: 10px 15px;
  margin: 6px 6px;
  border: none;
  border-radius: 20px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${colors[5]};
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${colors[4]};
    color: ${colors[1]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)(
  ({ theme }) => `
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  padding: 20px 12px;
//   background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  // border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
//   border-radius: 12px;
//   opacity: 0.6;
  `
);

const TabsList = styled(TabsListUnstyled)(
  ({ theme }) => `
//   min-width: 400px;
//   background-color: ${colors[500]};
//   border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  `
);

function ProjectTabs() {
  return (
    <TabsUnstyled defaultValue={0}>
      <TabsList>
        <Tab>All</Tab>
        <Tab>Web Develop</Tab>
        <Tab>App Develop</Tab>
        <Tab>Design</Tab>
      </TabsList>
      <TabPanel
        value={0}
        sx={
          {
            /*
          display: "flex",
          flexWrap: "wrap",
           justifyContent: "space-around",
          */
          }
        }
      >
        <Grid container spacing={3}>
          <ProjectBox />
          <ProjectBox />
          <ProjectBox />
          <ProjectBox />
          <ProjectBox />
        </Grid>
      </TabPanel>
      <TabPanel value={1}>Profile page</TabPanel>
      <TabPanel value={2}>Language page</TabPanel>
      <TabPanel value={3}>Design page</TabPanel>
    </TabsUnstyled>
  );
}

export default ProjectTabs;
