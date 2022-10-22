import React, { useRef, useState } from "react";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Certificates from "../pages/Certificates";
import Contact from "../pages/Contact";

function Navigation() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const certificatesRef = useRef();
  const contactRef = useRef();

  const homeClick = () => {
    window.scrollTo({ behavior: "smooth", top: homeRef.current.offsetTop });
  };
  const aboutClick = () => {
    window.scrollTo({ behavior: "smooth", top: aboutRef.current.offsetTop });
  };
  const projectsClick = () => {
    window.scrollTo({ behavior: "smooth", top: projectsRef.current.offsetTop });
  };
  const certificatesClick = () => {
    window.scrollTo({
      behavior: "smooth",
      top: certificatesRef.current.offsetTop,
    });
  };
  const contactClick = () => {
    window.scrollTo({ behavior: "smooth", top: contactRef.current.offsetTop });
  };

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerWidth = 240;
  const navItems = [
    { id: 1, name: "Home", to: homeClick },
    { id: 2, name: "About", to: aboutClick },
    { id: 3, name: "Projects", to: projectsClick },
    { id: 4, name: "Certificates", to: certificatesClick },
    { id: 5, name: "Contact", to: contactClick },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        DDO_0II
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
      <AppBar component="nav">
        <Container>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              DDO_0II
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button onClick={item.to} key={item.id} sx={{ color: "#fff" }}>
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
        <div ref={homeRef}>
          <Toolbar />
          <Home />
        </div>
        <div ref={aboutRef}>
          <Toolbar />
          <About />
        </div>
        <div ref={projectsRef}>
          <Toolbar />
          <Projects />
        </div>
        <div ref={certificatesRef}>
          <Toolbar />
          <Certificates />
        </div>
        <div ref={contactRef}>
          <Toolbar />
          <Contact />
        </div>
      </Box>
    </Box>
  );
}

export default Navigation;
