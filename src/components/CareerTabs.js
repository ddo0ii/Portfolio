import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function CareerTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        // bgcolor: "background.paper",
        display: "flex",
        // height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        // variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={
          {
            //borderRight: 1,
            //borderColor: "divider",
          }
        }
      >
        <Tab label="Work" {...a11yProps(0)} />
        <Tab label="Intership" {...a11yProps(1)} />
        <Tab label="Education" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item Onesdfsdf
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography>Handong Global Univ.</Typography>
        <Typography>
          Computer Engineering (Science and Electrical Engineering)
        </Typography>
        <Typography>March 2015 - February 2020</Typography>
        <Typography>시선 (소외된 이웃을 위한 IT 솔루션 연구 학회)</Typography>
        <Typography>March 2017 - July 2018</Typography>
        <Typography>Student for Christ(학생신앙운동) 동아리</Typography>
        <Typography>March 2015 - February 2020</Typography>
        <Typography>Angang Girls' High School </Typography>
        <Typography>Natural Sciences</Typography>
        <Typography>March 2012 - February 2015</Typography>
      </TabPanel>
    </Box>
  );
}
export default CareerTabs;
