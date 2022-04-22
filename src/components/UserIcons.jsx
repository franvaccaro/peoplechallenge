import React from 'react';
import '../App.css';
import { Grid, Stack } from '@mui/material';
import AccountMenu from './icons menu/AccountMenu';
import NotificationsMenu from './icons menu/NotificationsMenu';
import InboxMenu from './icons menu/InboxMenu';

function UserIcons() {
  return (
    <Grid item alignSelf="center">
      <Stack direction="row">
        <InboxMenu />
        <NotificationsMenu />
        <AccountMenu />
      </Stack>
    </Grid>
  );
}

export default UserIcons;
