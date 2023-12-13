import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import './SellerDashboard.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';



const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft({ onSearch }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Pass the search term to the parent component or perform search logic here
    onSearch(searchTerm);
  };

  const [memberId, setMemberId] = useState('');
  const [name, setName] = useState('');

  const handleMemberIdChange = (event) => {
    setMemberId(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const routes = [
    {
      path: '/profile',
      text: 'Profile Details',
      icon: <InboxIcon />,
    },
    {
      path: '/genealogy',
      text: 'Genealogy Tree',
      icon: <MailIcon />,
    },
    {
      path: '/earnings',
      text: 'My Earnings',
      icon: <InboxIcon />,
    },
    
  ];

  return (
    <Box sx={{ display: 'flex' ,width:'85%'}}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
           Mony
          </Typography>
          <div className='search-bar'>
      <input
      className='input-search'
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchInput}
      />
      <button onClick={handleSearch}className='Serach-btn'>Search</button>
    </div>
    
      <div className='label-name'> 
        <label htmlFor="name">Member Name:</label>
        <input
        className='input-text'
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter Name"
        />
      </div>

        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Router>
          <List>
            {routes.map(({ path, text, icon }, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton component={Link} to={path}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Routes>
            {routes.map(({ path, text }, index) => (
              <Route key={text} exact path={path} element={<div>{text} </div>} />
            ))}
          </Routes>
        </Router>
             </Drawer>
      <Main open={open}>
        <DrawerHeader />
     
        
      </Main>
    </Box>
  );
}
