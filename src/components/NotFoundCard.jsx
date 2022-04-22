import React from 'react';
import '../App.css';
import { Grid, useMediaQuery } from '@mui/material';
import notFound from '../assets/image_404.svg';

function NotFoundCard() {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <Grid
      container
      sx={{ pt: 20 }}
      direction="column"
      alignItems="center"
      spacing={isMobile ? 2 : 4}
    >
      <Grid item className="errorTitle">
        Sorry, we cannot find that person :(
      </Grid>
      <Grid item className="errorSubtitle">
        Please try again.
      </Grid>
      <Grid item>
        <img
          src={notFound}
          className="errorIcon"
          width="500"
          height="500"
          alt="Not found"
        />
      </Grid>
    </Grid>
  );
}

export default NotFoundCard;
