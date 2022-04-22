import React from 'react';
import '../App.css';
import {
  Dialog, Grid, Link, useMediaQuery,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

function Credits() {
  const dispatch = useDispatch();
  const openDialog = useSelector((state) => state.dialogState.openDialog);
  const isMobile = useMediaQuery('(max-width:820px)');

  return (
    <Dialog
      onClose={() => dispatch({
        type: 'SET_DIALOG',
        payload: {
          openDialog: false,
        },
      })}
      open={openDialog}
      PaperProps={{
        style: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
      }}
    >
      <Grid
        container
        direction="column"
        className="creditsContainer"
        gap={1}
        sx={{
          p: isMobile ? 4 : 6,
          pl: isMobile ? 4 : 12,
          pr: isMobile ? 4 : 12,
          border: 'secondary',
        }}
      >
        <Grid item className="creditsTitle">
          CREDITS
        </Grid>
        <Grid item>
          {'Developer '}
          <Link
            href="https://github.com/franvaccaro"
            underline="hover"
            color="secondary"
            sx={{ fontWeight: 'bold' }}
          >
            Franco Vaccaro
          </Link>
        </Grid>
        <Grid item>
          {'Designer '}
          <Link
            href="https://www.behance.net/bqad"
            underline="hover"
            color="secondary"
            sx={{ fontWeight: 'bold' }}
          >
            Adrián Vaccaro
          </Link>
        </Grid>
      </Grid>
    </Dialog>
  );
}

export default Credits;
