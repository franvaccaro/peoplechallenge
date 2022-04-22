import React, { useState } from 'react';
import {
  Avatar, Badge, Grid, IconButton, Menu, MenuItem, Stack, Tooltip,
} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import '../../App.css';
import { useSelector } from 'react-redux';

function InboxMenu() {
  const userNotifications = useSelector((state) => state.peopleArr.userNotifications);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const [badgeSum, setBadgeSum] = useState(5);
  const handleClose = () => {
    setAnchorEl(null);
    setBadgeSum(null);
  };

  return (
    <Grid>
      <Tooltip title="Inbox">
        <IconButton color="inherit" onClick={handleClick}>
          <Badge badgeContent={badgeSum} color="secondary">
            <MailIcon />
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
          <Grid container direction="row">
            <Avatar src={userNotifications[0] ? userNotifications[0].picture.medium : null} alt="Profile-pic" />
            <Stack direction="column">
              <div className="inboxUser">
                <b>
                  {userNotifications[0] ? userNotifications[0].name.first.concat(' ', userNotifications[0].name.last) : null}
                </b>
              </div>
              <div className="inboxMessage">5 new messages</div>
            </Stack>
          </Grid>
        </MenuItem>
      </Menu>
    </Grid>

  );
}

export default InboxMenu;
