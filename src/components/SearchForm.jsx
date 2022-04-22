import '../App.css';
import React from 'react';
import {
  TextField, IconButton, InputAdornment, Container, Grid, useMediaQuery, Tooltip,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import { useDispatch, useSelector } from 'react-redux';
import NotFoundCard from './NotFoundCard';
import CardList from './CardList';
import { filterUsers } from '../redux/actions/filterUsersAction';
import { handleDialog } from '../redux/actions/handleDialogAction';
import logo from '../assets/logo.svg';
import miniLogo from '../assets/icon_logo.svg';
import UserIcons from './UserIcons';
import UserMenuMobile from './icons menu/UserMenuMobile';
import Credits from './Credits';

function SearchForm() {
  const dispatch = useDispatch();
  const peopleList = useSelector((state) => state.peopleArr.filteredPeople);

  const isMobile = useMediaQuery('(max-width:820px)');

  return (
    <Container direction="column">
      <AppBar>
        <Container>
          <Grid
            container
            sx={{ flexWrap: 'nowrap' }}
            justifyContent="space-between"
            direction="row"
            padding={2}
          >
            <Grid item alignSelf="center">
              <Tooltip title="Credits">
                {isMobile
                  ? (
                    <input
                      type="image"
                      src={miniLogo}
                      width="28"
                      height="27"
                      alt="logo"
                      className="logo"
                      onClick={() => dispatch(handleDialog())}
                    />
                  )
                  : (
                    <input
                      type="image"
                      src={logo}
                      width="134"
                      height="54"
                      alt="logo"
                      className="logo"
                      onClick={() => dispatch(handleDialog())}
                    />
                  )}
              </Tooltip>
            </Grid>
            <Grid item xs={8}>
              <form>
                <TextField
                  onChange={(e) => {
                    dispatch(filterUsers(e.target.value.trim()));
                    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
                  }}
                  label="Search"
                  className="searchInput"
                  variant="outlined"
                  autoComplete="off"
                  color="secondary"
                  focused
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton
                          onClick={(e) => dispatch(filterUsers(e.target.value.trim()))}
                          aria-label="Search Icon"
                        >
                          <SearchIcon color="secondary" />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </form>
            </Grid>
            {isMobile
              ? <UserMenuMobile />
              : <UserIcons />}
          </Grid>
        </Container>
      </AppBar>
      <Credits />
      {peopleList.length > 0 ? <CardList /> : <NotFoundCard />}

    </Container>
  );
}

export default SearchForm;
