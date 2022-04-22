import '../App.css';
import {
  Card, CardContent, Grid, Stack, useMediaQuery,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { deleteUser } from '../redux/actions/deleteUserAction';
import location from '../assets/icon_location.svg';
import email from '../assets/icon_email.svg';
import deleteIcon from '../assets/icon_delete.svg';

function UserCard(props) {
  const dispatch = useDispatch();
  const user = props;
  const id = user.person.registered.date;
  const [cardClass, setCardClass] = useState('userCard');
  const [btnClass, setBtnClass] = useState('btnDelete');

  const cardAnimation = () => {
    setCardClass('cardRemove');
    setBtnClass('deleteIcon');
    setInterval(() => {
      dispatch(deleteUser(id));
    }, 300);
  };

  const isMobile = useMediaQuery('(max-width:819px)');

  return (
    <Card variant="outlined" style={{ borderRadius: '20px' }} className={cardClass}>
      <CardContent sx={{ '&:last-child': { pb: 1.5 } }}>
        <Grid container justifyContent="space-between" direction="row" sx={{ flexWrap: 'nowrap' }}>
          <Grid item>
            <Grid
              container
              sx={{ flexWrap: 'nowrap' }}
              spacing={1}
            >
              <Grid item alignSelf="center">
                <img src={user.person.picture.large} className="userPicture" alt="Profile-pic" />
              </Grid>
              <Grid item alignSelf="center">
                <Stack direction="column" spacing={1}>
                  <Grid className="userName">
                    {user.person.name.first}
                    {' '}
                    {user.person.name.last}
                  </Grid>
                  <Grid>
                    <Stack direction="row" spacing={1}>
                      <img src={location} width="16" height="17" className="locationIcon" alt="Country" />
                      <Grid className="userData">
                        {user.person.location.country}
                      </Grid>
                    </Stack>
                  </Grid>
                  <Grid>
                    <Stack direction="row" spacing={1}>
                      <img src={email} width="16" height="17" className="emailIcon" alt="Email" />
                      <Grid className="userData">
                        {user.person.email}
                      </Grid>
                    </Stack>
                  </Grid>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Grid item alignSelf="center" sx={isMobile ? { pr: 0 } : { pr: 2 }}>
            <input
              type="image"
              width="40"
              height="40"
              className={btnClass}
              src={deleteIcon}
              onClick={(e) => { e.preventDefault(); cardAnimation(); }}
              alt="deleteIcon"
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default UserCard;
