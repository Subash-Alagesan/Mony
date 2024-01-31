import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ProfileDetails from "./ProfileDetails";
import Geanology from "./Geanology";
import MyEarnings from "./MyEarnings";
import AllProducts from "./AllProducts";
import AddProduct from "./AddProduct";
import "./SellerDashboard.css";
import { useUser } from "../Context/UserContext";
import { Menu, MenuItem } from '@mui/material';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SellerDashboard({ onSearch }) {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [menudata, setMenudata] = useState("ProfileDetails");
  const { logout, user } = useUser();
  const { userName } = user;
  const [memberId, setMemberId] = useState("");
 
  const navigate = useNavigate();

  console.log("User object:", user);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  

  const handleMemberIdChange = (event) => {
    setMemberId(event.target.value);
  };

  // const handleNameChange = (event) => {
  //   setName(event.target.value);
  // };

  const [anchorEl, setAnchorEl] = useState(null);
  const [menuData, setMenuData] = useState('');

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuData('Products');
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };




  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          elevation={4}
          sx={{ backgroundColor: "black", color: "white" }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => {
                setOpen(!open);
              }}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              MONY
            </Typography>
            <div className="search-bar">
              <input
                className="input-search"
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchInput}
              />
              <button onClick={handleSearch} className="Serach-btn">
                Search
              </button>
            </div>

            <div className="label-name">
              <label htmlFor="name">Seller Name:</label>
              <input
                className="input-text"
                type="text"
                id="name"
                value={userName}
                // onChange={handleNameChange}
                readOnly // Set the input field as readOnly
                placeholder="Enter Name"
              />
            </div>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setMenudata("ProfileDetails")}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 6.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Profiledetails" />
              </ListItemButton>
            </ListItem>
        
        

            <ListItem
        disablePadding
        sx={{ display: 'block' }}
        onClick={handleMenuClick}
      >
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: 'center',
            px: 6.5,
          }}
        >
          <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : "auto", justifyContent: 'center' }}>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItemButton>
      </ListItem>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => setMenudata("Products")}>
          {/* Submenu content goes here */}
          AllProducts
        </MenuItem>
        <MenuItem onClick={() => setMenudata("Product")}>
          {/* Submenu content goes here */}
          AddProducts
        </MenuItem>
        
      </Menu>
          </List>
          
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {menudata === "ProfileDetails" && <ProfileDetails />}
          {menudata === "Geanology" && <Geanology />}
          {menudata === "MyEarnings" && <MyEarnings />}
          {menudata === "Products" && <AllProducts />}
          {menudata === "Product" && <AddProduct />}
        </Box>
      </Box>
    </>
  );
}
