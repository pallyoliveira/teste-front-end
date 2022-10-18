import React, { useContext, useEffect } from 'react';
import AppContext from '../context/context';
import { useNavigate } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {
  createTheme, ThemeProvider, makeStyles, AppBar,
  Button, Toolbar, Box
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Input from '../components/input';
import "../style/index.css";
import Videos from './videos';
import { requestVideos } from '../services/api';

const theme = createTheme({
  palette: {
    primary: {
      main: "#90CAF9",
    },
    secondary: {
      main: "#f44336",
    },
  },
});

function Search() {
  const navigate = useNavigate();
  document.title = "ICasei - Search";
  const { search, setClassAnimation,
    classAnimation, videoBoolean, setVideoBoolean,
    data, setData } = useContext(AppContext);
  const storage = localStorage.getItem("user");
  const user = JSON.parse(storage);


  const padding = videoBoolean ? "0px" : "320px 640px"
  const useStyles = makeStyles({
    root: {
     
      // height: '150vh',
      // width: "100%",
      display: "flex",
      padding: padding
    },
    grow: {
      flexGrow: 1,
    },
    button: {
      margin: theme.spacing(1),
      color: "green",
      marginLeft: "42vh",
      marginTop: "-80px"
    },
  })
  const classes = useStyles();
  async function fetchData() {
    const response = await requestVideos(search);
    localStorage.setItem("videos", JSON.stringify(response));
    setData(response);
  }
  useEffect(() => {
  }, [search]);

  function handleClick() {
    setClassAnimation("animation");
    setVideoBoolean(true);
    fetchData()
  }

  function backLogin() {
    navigate("/");
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <AppBar color="inherit" className={classes.appBar} >
            <Toolbar className={classes.toolBar} >
              <Button color="primary" variant="outlined" >
                {user.email}
              </Button>
              <div className={classes.grow} />
              <Button startIcon={<ExitToAppIcon />} title="Voltar para a página de Login" onClick={backLogin}></Button>
            </Toolbar>
          </AppBar>
          <div className={classAnimation} >
            <Input />
            <Button
              variant="contained"
              disabled={!search}
              onClick={handleClick}
              className={classes.button}
              endIcon={<SendIcon></SendIcon>}
            >
              Buscar
            </Button>
          </div>
          <Box className={classes.videos}>
            <Videos data={data} />
          </Box>
        </div>
      </ThemeProvider>
    </>
  );
}

export default Search;




