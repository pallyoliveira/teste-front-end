import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/context';
import ReactPlayer from 'react-player';
import { API_KEY } from '../services/api';
import { Typography, Box, Button } from '@material-ui/core';
import PageviewIcon from '@material-ui/icons/Pageview';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "90vh",
    display: "block",
    textAlign: "center"
  },
  buttonExit: {
    width: "40px",
    marginTop: "-5px"
  },
  rodape: {
    textAlign: "center",
  },
  description: {
    marginTop: "20px",
    maxWidth: "100vh",
    display: "inline-block",
    textAlign: "justify"
  }
}));

function Details() {
  document.title = 'Icasei - Details';
  const classes = useStyles();
  const navigate = useNavigate();
  const { startVideo, setVideoBoolean, setData, setClassAnimation } = useContext(AppContext);
  const [_videoById, setVideoById] = useState([]);
  const [snippet, setSnippet] = useState({});
  const [statistics, setStatistics] = useState({});

  useEffect(() => {
    const init = async () => {
      try {
        const link = `https://www.googleapis.com/youtube/v3/videos?id=${startVideo.id.videoId}&part=snippet,statistics&key=${API_KEY}`;
        const response = await fetch(link, {
          method: "GET",
          body: JSON.stringify(),
        });
        const result = await response.json();
        setVideoById(result);
        setSnippet(result.items[0].snippet)
        setStatistics(result.items[0].statistics)
      } catch (e) {
        console.error(e);
      }
    };
    init();
  });

  function backSearch() {
    navigate("/search");
    setClassAnimation("animation");
    const videos = localStorage.getItem("videos");
    const play = JSON.parse(videos);
    setVideoBoolean("0px");
    setData(play);
  }

  return (
    <Box className={classes.root}>
      <ReactPlayer
        width='100%'
        height='80%'
        url={`https://www.youtube.com/watch?v=${startVideo.id.videoId}`}
      >
      </ReactPlayer>
      <h1> {`${statistics.viewCount}`} <VisibilityIcon /></h1>
      <Button className={classes.buttonExit} startIcon={<PageviewIcon fontSize="large" />} title="Voltar para a página de Busca" onClick={backSearch}></Button>
      <Typography
        style={{ fontWeight: 600 }}
        gutterBottom
        variant='body1'
        color='textPrimary'
      >{snippet.title}</Typography>
      <Typography variant='body2' color='textSecondary' className={classes.rodape}>
        &nbsp;<FavoriteIcon style={{ color: "red" }} fontSize="small" />
        {statistics.likeCount}
        &nbsp; • &nbsp;
        <MessageIcon style={{ color: "blue" }} fontSize="small" />
        &nbsp;{`${statistics.commentCount}`}
      </Typography>
      <p className={classes.description}>{snippet.description}</p>
    </Box>
  );
}

export default Details;

