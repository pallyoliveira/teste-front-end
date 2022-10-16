import youtubeSearch from 'youtube-api-v3-search';
export const API_KEY = "AIzaSyDhD6mq4ltVO4AaGsi4wPrWSulgmL9cuFM";

export const requestVideos = async (search) => {
  try {
    var response = youtubeSearch(API_KEY, { part: 'snippet', q: search, maxResults: 30 })
      .then((data) => (data.items));
    await fetch('/videos/https://www.googleapis.com/youtube/v3', {
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
