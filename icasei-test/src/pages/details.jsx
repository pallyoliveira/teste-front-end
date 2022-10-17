import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/context';
import ReactPlayer from 'react-player';
import { API_KEY } from '../services/api';
import Header from '../components/header';

function Details() {
  document.title = 'Icasei - Details';
  const { startVideo } = useContext(AppContext);
  const [videoById, setVideoById] = useState([]);
  const { description, title } = videoById.items[0].snippet.localized;
  const { viewCount, likeCount, favoriteCount } = videoById.items[0].statistics;

  useEffect(() => {
    async function fetchData() {
      await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${startVideo.id.videoId}&part=snippet,statistics&key=${API_KEY}`,
        { method: 'GET', }).then(response => response.json())
        .then(data => { setVideoById(data); })
    }
    fetchData();
  }, [startVideo.id.videoId]);

  return (
    <>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${startVideo.id.videoId}`}
      >
      </ReactPlayer>
      <h1>{viewCount}</h1>
      <p>{title}</p>
      <p>{description}</p>
      <p>{likeCount}</p>
      <p>{favoriteCount}</p>
    </>
  );
}

export default Details;

