import '../App.css';
import React, { useEffect, useState } from 'react';
import { Grid, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import UserCard from './UserCard';

function CardsList() {
  const peopleList = useSelector((state) => state.peopleArr.filteredPeople);
  const [dayTime, setDayTime] = useState('');

  useEffect(() => {
    const currentTime = new Date().getHours();
    if (currentTime >= 0 && currentTime < 6) {
      setDayTime('night');
    } if (currentTime >= 6 && currentTime < 12) {
      setDayTime('morning');
    } if (currentTime >= 12 && currentTime < 17) {
      setDayTime('afternoon');
    } if (currentTime >= 17 && currentTime < 20) {
      setDayTime('evening');
    } if (currentTime >= 20 && currentTime < 24) {
      setDayTime('night');
    }
  }, [dayTime]);

  return (
    <Grid container justifyContent="center" direction="column" sx={{ pt: 12, pb: 2 }}>
      <Grid item sx={{ pt: '30px', pb: '30px', pl: '18px' }}>
        <Stack direction="column" spacing={1}>
          <div className="greetings">
            Good
            {' '}
            {dayTime}
            !
          </div>
          <div className="greetingsSubtitle">
            Manage your contacts
          </div>
        </Stack>
      </Grid>
      <Stack direction="column" spacing={2}>
        {peopleList.map((person, index) => (
          <UserCard
            person={person}
            key={person.phone}
            index={index}
          />
        ))}
      </Stack>
    </Grid>
  );
}

export default CardsList;
