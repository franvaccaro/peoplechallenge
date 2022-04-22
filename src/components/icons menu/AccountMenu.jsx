import React, { useState } from 'react';
import {
  Avatar, Divider, Grid, IconButton, ListItemIcon, Menu, MenuItem, Tooltip,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import '../../App.css';

function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid>
      <Tooltip title="Profile">
        <IconButton color="inherit" onClick={handleClick}>
          <AccountCircle />
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
          <Avatar />
          <div className="accountText">
            Profile
          </div>
        </MenuItem>
        <MenuItem>
          <Avatar />
          <div className="accountText">
            My account
          </div>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" color="secondary" />
          </ListItemIcon>
          <div className="accountText">
            Add another account
          </div>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" color="secondary" />
          </ListItemIcon>
          <div className="accountText">
            Settings
          </div>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" color="secondary" />
          </ListItemIcon>
          <div className="accountText">
            Logout
          </div>
        </MenuItem>
      </Menu>
    </Grid>
  );
}

export default AccountMenu;
