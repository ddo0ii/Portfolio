import React, { Suspense, lazy, useRef, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  Drawer,
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
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Career = lazy(() => import("../pages/Career"));
const Projects = lazy(() => import("../pages/Projects"));
const Activities = lazy(() => import("../pages/Activities"));
const ALC = lazy(() => import("../pages/ALC"));
import ContactIcons from "../components/ContactIcons";

function Navigation() {
  // Navigation 클릭 시 이동
  const homeRef = useRef();
  const aboutRef = useRef();
  const careerRef = useRef();
  const projectsRef = useRef();
  const activitiesRef = useRef();
  const alcRef = useRef();
  const homeClick = () => {
    window.scrollTo({ behavior: "smooth", top: homeRef.current.offsetTop });
  };
  const aboutClick = () => {
    window.scrollTo({ behavior: "smooth", top: aboutRef.current.offsetTop });
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
    { id: 2, name: "About", to: aboutClick },
    { id: 3, name: "Career", to: careerClick },
    { id: 4, name: "Projects", to: projectsClick },
    { id: 5, name: "Activities", to: activitiesClick },
    { id: 6, name: "ALC", to: alcClick },
  ];
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
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
    <Suspense
      fallback={
        <Box className="loading" sx={{ display: "flex" }}>
          <CircularProgress color="inherit" />
        </Box>
      }
    >
      <Box sx={{ display: "flex" }}>
        <AppBar
          component="nav"
          className={colorChange ? "navbar colorChange" : "navbar"}
          sx={{ backgroundColor: "transparent", boxShadow: "none" }}
        >
          <Container>
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
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
          <Box ref={aboutRef}>
            <Toolbar />
            <About />
          </Box>
          <Box ref={careerRef} sx={{ backgroundColor: "#161617" }}>
            <Toolbar />
            <Career />
          </Box>
          <Box ref={projectsRef} sx={{ backgroundColor: "#0F0F0F" }}>
            <Toolbar />
            <Projects />
          </Box>
          <Box ref={activitiesRef}>
            <Toolbar />
            <Activities />
          </Box>
          <Box ref={alcRef} sx={{ backgroundColor: "#161617" }}>
            <Toolbar />
            <ALC />
          </Box>
          <Box sx={{ display: { sm: "inline", xs: "none" } }}>
            <Box
              sx={{
                pt: { sm: "100px", xs: "80px" },
                pb: { sm: "100px", xs: "80px" },
              }}
            >
              <Container>
                <Typography
                  variant="h6"
                  component="div"
                  align="center"
                  color="primary"
                  sx={{ mb: 3 }}
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
                    <Typography color="#959595" sx={{ fontSize: "13px" }}>
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
      </Box>
    </Suspense>
  );
}

export default Navigation;
