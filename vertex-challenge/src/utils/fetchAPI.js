import axios from 'axios';

export const BASE_URL = 'https://www.googleapis.com/youtube/v3/';

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}${url}&key=${API_KEY}`);

  return data;
};

// https://www.googleapis.com/youtube/v3/search?part=id,snippet&q={termo_de_busca}&key={API_KEY}

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewCount&q=skateboarding%20dog&type=video&key=[YOUR_API_KEY]

// export const BASE_URL = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=';

// const API_KEY = process.env.REACT_APP_API_KEY;
// const options = {
//   params: {
//     maxResults: 10,
//   },
//   headers: {
//     'Authorization':'Bearer'+ API_KEY,
//     'Accept': 'application/json',
//   },
// };

// export const BASE_URL = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=';
