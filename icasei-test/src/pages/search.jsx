import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/context';
import { useNavigate } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {
  createTheme, ThemeProvider, makeStyles, AppBar,
  Button, Toolbar, IconButton,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Input from '../components/input';
import "../style/index.css";
import Videos from './videos';


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

const useStyles = makeStyles({
  root: {
    background: theme.palette.primary.main,
    height: "100vh",
    padding: theme.spacing(50, 80),
  },
  grow: {
    flexGrow: 1,
  },
  toolBar: {
    paddingLeft: theme.spacing(5),  
  },
  button: {
    margin: theme.spacing(1),
    color: "green",
    marginLeft: "25vh",
  },
  videos: {
    position: "absolute"
  },
  menuButton: {
   
  }
})

function Search() {
  const navigate = useNavigate();
  document.title = "ICasei - Search";
  const { search } = useContext(AppContext);
  const storage = localStorage.getItem("user");
  const [classAnimation, setClassAnimation] = useState("");
  const [videosOk, setStartVideosOk]  = useState(false);
  const user = JSON.parse(storage);

  function handleClick(e) {
    setClassAnimation("animation");
    // navigate("/videos");
  }
  function backLogin() {   
    navigate("/");
  }


  useEffect(() => {
  }, [search]);

  const classes = useStyles();





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
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <Button startIcon={<ExitToAppIcon />} title="Voltar para a página de Login" onClick={backLogin}></Button>
              </IconButton>
            </Toolbar>
          </AppBar>   
          <div className={classAnimation} >
          <Input/>
          <Button
          variant="contained"
          disabled={!search}
          onClick={(e) => handleClick(e)}
          className={classes.button}
          endIcon={<SendIcon></SendIcon>}
        >
          Buscar
        </Button>
        

        </div>

     
        </div>
      </ThemeProvider>

    </>
  );
}

export default Search;




