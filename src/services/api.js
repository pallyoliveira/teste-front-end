import youtubeSearch from 'youtube-api-v3-search';
export const API_KEY = "AIzaSyC-Oy4fAQne3LQ6ttWeW2bDLo_ROQczvMA";

export const requestVideos = async (search) => {
  try {
    var response = youtubeSearch(API_KEY, { part: 'snippet', q: search, maxResults: 30 })
      .then((data) => (data.items));
    await fetch('https://www.googleapis.com/youtube/v3', {
      method: 'GET',
      mode: 'no-cors',
      body: JSON.stringify(),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const requestVideoByID = async (startVideo) => {
  try {
   const response =  await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${startVideo.id.videoId}&part=snippet,statistics&key=${API_KEY}`, {
      method: 'GET',
      mode: 'no-cors',
   
      headers: {
        'Content-Type': 'application/json',
      },
    });   
    return response.json();    
  } catch (error) {
    return error;
  }
};


