import { useDispatch, useSelector } from 'react-redux';
import { Backdrop, CssBaseline } from '@mui/material';
import './App.css';
import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import SearchForm from './components/SearchForm';
import Loader from './components/Loaders/Loader';
import theme from './components/theme';
import { getPeople } from './redux/actions/getPeopleAction';

function App() {
  const dispatch = useDispatch();
  const isLoaded = useSelector((state) => state.loaderState.loader);

  useEffect(() => {
    dispatch(getPeople());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {isLoaded ? <SearchForm />
        : (
          <Backdrop
            // eslint-disable-next-line no-shadow
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={!isLoaded}
          >
            <Loader />
          </Backdrop>
        )}
    </ThemeProvider>
  );
}

export default App;
