import React, { lazy, useRef, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  Fab,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Home from "../pages/Home";
import Career from "../pages/Career";
import Projects from "../pages/Projects";
import Activities from "../pages/Activities";
import ALC from "../pages/ALC";
import ContactIcons from "../components/ContactIcons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  // Scroll Animation (sa, 스크롤 애니메이션)
  const saTriggerMargin = 300;
  const saElementList = document.querySelectorAll(".sa");

  const saFunc = function () {
    for (const element of saElementList) {
      if (!element.classList.contains("show")) {
        if (
          window.innerHeight >
          element.getBoundingClientRect().top + saTriggerMargin
        ) {
          element.classList.add("show");
        }
      }
    }
  };

  window.addEventListener("load", saFunc);
  window.addEventListener("scroll", saFunc);

  const homeRef = useRef();
  const careerRef = useRef();
  const projectsRef = useRef();
  const activitiesRef = useRef();
  const alcRef = useRef();
  const homeClick = () => {
    window.scrollTo({ behavior: "smooth", top: homeRef.current.offsetTop });
  };
  const careerClick = () => {
    window.scrollTo({ behavior: "smooth", top: careerRef.current.offsetTop });
  };
  const projectsClick = () => {
    window.scrollTo({ behavior: "smooth", top: projectsRef.current.offsetTop });
  };
  const activitiesClick = () => {
    window.scrollTo({
      behavior: "smooth",
      top: activitiesRef.current.offsetTop,
    });
  };
  const alcClick = () => {
    window.scrollTo({
      behavior: "smooth",
      top: alcRef.current.offsetTop,
    });
  };

  // Scroll시 App bar color 변경
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  // drawer
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawerWidth = 240;
  const navItems = [
    { id: 1, name: "Home", to: homeClick },
    { id: 2, name: "Career", to: careerClick },
    { id: 3, name: "Projects", to: projectsClick },
    { id: 4, name: "Activities", to: activitiesClick },
    { id: 5, name: "ALC", to: alcClick },
  ];
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        onClick={homeClick}
        variant="h6"
        sx={{ my: 2, cursor: "pointer" }}
      >
        DDO0II
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton onClick={item.to} sx={{ textAlign: "center" }}>
              <ListItemText>{item.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        className={colorChange ? "navbar colorChange" : "navbar"}
        sx={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Container>
          <Toolbar>
            <Typography
              onClick={homeClick}
              variant="h6"
              component="div"
              color="primary"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                cursor: "pointer",
              }}
            >
              DDO0II
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button onClick={item.to} key={item.id} color="secondary">
                  {item.name}
                </Button>
              ))}
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box>
        <Box ref={homeRef}>
          <Home />
        </Box>
        <Box ref={careerRef}>
          <Toolbar />
          <Career />
        </Box>
        <Box ref={projectsRef}>
          <Toolbar />
          <Projects />
        </Box>
        <Box ref={activitiesRef}>
          <Toolbar />
          <Activities />
        </Box>
        <Box ref={alcRef}>
          <Toolbar />
          <ALC />
        </Box>
        <Box
          sx={{
            display: { sm: "inline", xs: "none" },
          }}
        >
          <Box
            sx={{
              pt: { sm: "50px", xs: "80px" },
              pb: { sm: "100px", xs: "80px" },
              backgroundColor: "#e8def8",
            }}
          >
            <Container>
              <Typography
                onClick={homeClick}
                variant="h6"
                component="div"
                align="center"
                color="primary"
                sx={{ mb: 3, cursor: "pointer" }}
              >
                DDO0II
              </Typography>
              <Box align="center" sx={{ display: "block" }}>
                {navItems.map((item) => (
                  <Button
                    onClick={item.to}
                    key={item.id}
                    size="large"
                    color="secondary"
                    sx={{
                      pl: 3,
                      pr: 3,
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>
              <Divider color="#DEDEDE" sx={{ mt: 5, mb: 3 }} />
              <Grid container spacing={1}>
                <Grid item sm={8}>
                  <Typography color="#1e192b" sx={{ fontSize: "13px" }}>
                    Copyright @ Soyeong Kwon 2022, All rights reserved
                  </Typography>
                </Grid>
                <Grid item sm={4}>
                  <ContactIcons />
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
      </Box>
      <Fab
        onClick={homeClick}
        color="primary"
        aria-label="arrowUp"
        sx={{ position: "fixed", bottom: 20, right: 20 }}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </Fab>
    </Box>
  );
}

export default Navigation;
