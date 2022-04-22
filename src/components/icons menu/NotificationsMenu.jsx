import React, { useState } from 'react';
import {
  Avatar, Badge, Grid, IconButton, Menu, MenuItem, Tooltip,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import '../../App.css';
import { useSelector } from 'react-redux';

function NotificationsMenu() {
  const userNotifications = useSelector((state) => state.peopleArr.userNotifications);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const [badgeSum, setBadgeSum] = useState(4);
  const handleClose = () => {
    setAnchorEl(null);
    setBadgeSum(null);
  };

  return (
    <Grid>
      <Tooltip title="Notifications">
        <IconButton color="inherit" onClick={handleClick}>
          <Badge badgeContent={badgeSum} color="secondary">
            <NotificationsIcon />
          </Badge>
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
          <Avatar src={userNotifications[userNotifications.length - 1].picture.medium} sx={{ width: 50, height: 50 }} alt="Profile-pic" />
          <div className="notifications">
            {userNotifications[userNotifications.length - 1].name.first.concat(' ', userNotifications[userNotifications.length - 1].name.last)}
            {' '}
            likes your new post.
          </div>
        </MenuItem>
        <MenuItem>
          <Avatar src={userNotifications[userNotifications.length - 5].picture.medium} sx={{ width: 50, height: 50 }} alt="Profile-pic" />
          <div className="notifications">
            {userNotifications[userNotifications.length - 5].name.first.concat(' ', userNotifications[userNotifications.length - 5].name.last)}
            {' '}
            commented on your last post.
          </div>
        </MenuItem>
        <MenuItem>
          <Avatar src={userNotifications[userNotifications.length - 3].picture.medium} sx={{ width: 50, height: 50 }} alt="Profile-pic" />
          <div className="notifications">
            {userNotifications[userNotifications.length - 3].name.first.concat(' ', userNotifications[userNotifications.length - 3].name.last)}
            {' '}
            likes your profile picture.
          </div>
        </MenuItem>
        <MenuItem>
          <Avatar src={userNotifications[userNotifications.length - 2].picture.medium} sx={{ width: 50, height: 50 }} alt="Profile-pic" />
          <div className="notifications">
            {userNotifications[userNotifications.length - 2].name.first.concat(' ', userNotifications[userNotifications.length - 2].name.last)}
            {' '}
            invited you to like
            {' '}
            <b>Cute Dogs</b>
            {' '}
            page.
          </div>
        </MenuItem>
      </Menu>
    </Grid>
  );
}

export default NotificationsMenu;
