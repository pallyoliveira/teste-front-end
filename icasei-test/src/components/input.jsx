import { ThemeProvider, makeStyles, createTheme, } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';
import React, { useContext, useEffect } from 'react';
import AppContext from '../context/context';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing(0.5),
    width: "40vh",
  },
}));

const theme = createTheme({
  palette: {
    primary: green,
  },
});

function Input() {
  document.title = "ICasei - Search";
  const { search, setSearchVideos } = useContext(AppContext);

  function doNothing(e) {
    if (e.keyCode === 13) {
      e.stopPropagation();
      e.preventDefault();
    }
  }
  useEffect(() => {
  }, [search]);
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <TextField
        className={classes.input}
        label="Pesquisar"
        id="mui-theme-provider-standard-input"
        onKeyDown={(e) => doNothing(e)}
        value={search}
        onChange={({ target }) => setSearchVideos(target.value)}
        defaultValue="Pesquisar"
        required
        variant="outlined"
      />
    </ThemeProvider>
  );
}
export default Input;