import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/context';
import { Divider, Box, Typography, Grid } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "5vh",
    margin: "0",
    background: theme.palette.primary.main,
  },
  movieRow: {
    marginBottom: '',
    margin: "50px 30px 40px 40px",
    display: "inline-block",
    maxWidth: "300px"
  },
  titleImg: {
    color: "white"
  },
  image: {
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.2)",
      transition: "all 0.5s",
    },
  }, 
}));

function Videos({ data }) {
  document.title = 'Icasei - Videos';
  const navigate = useNavigate();
  const { setStartVideo } = useContext(AppContext);
  const [videos, setVideos] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    if (data !== []) {
      setVideos(data);
    }
  }, [data]);

  function startVideo(video) {
    navigate(`/search/${video.id.videoId}`);
    setStartVideo(video);
  }

  return (
    <Box className={classes.root}>
      {videos.map((video, index) => {
        const { title, thumbnails, description, } = video.snippet;
        return (
          <Grid key={index} className={classes.movieRow}>
            <Typography
              style={{ fontWeight: 600 }}
              gutterBottom
              className={classes.titleImg}
            >
              {title}
            </Typography>
            <img
              className={classes.image}
              alt={title}
              onClick={() => startVideo(video)} src={thumbnails.medium.url} title="Clique para reproduzir" />
            <small>{description}</small>
            <Divider />
          </Grid>
        );
      })}
    </Box>
  );
}

export default Videos;

