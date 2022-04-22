import React, { useState } from 'react';
import {
  Badge,
  Divider, Grid, IconButton, Menu, MenuItem, Tooltip,
} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AccountCircle } from '@mui/icons-material';
import '../../App.css';
import iconMenu from '../../assets/icon_menu.svg';

function UserMenuMobile() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notifBadge, setNotifBadge] = useState(4);
  const [messageBadge, setMessageBadge] = useState(5);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setNotifBadge(null);
    setMessageBadge(null);
  };

  return (
    <Grid alignSelf="center">
      <Tooltip title="Profile">
        <IconButton color="inherit" onClick={handleClick}>
          <img src={iconMenu} width="24" height="24" alt="logo" className="logo" />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            borderRadius: '20px',
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <IconButton color="inherit">
            <Badge badgeContent={messageBadge} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <div className="accountText">
            Messages
          </div>
        </MenuItem>
        <Divider />
        <MenuItem>
          <IconButton color="inherit">
            <Badge badgeContent={notifBadge} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <div className="accountText">
            Notifications
          </div>
        </MenuItem>
        <Divider />
        <MenuItem>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <div className="accountText">
            Profile
          </div>
        </MenuItem>
      </Menu>
    </Grid>
  );
}

export default UserMenuMobile;
