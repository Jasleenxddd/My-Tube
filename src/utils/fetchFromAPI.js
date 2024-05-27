import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 100,
  },
  headers: {
    'X-RapidAPI-Key':  'a6f5a13a57mshdfd0e903b201e04p185467jsn8fe135f8a37d',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

// async function fetchFromAPI(url, options) {
//     try {
//       const response = await fetch(url, options);
//       if (!response.ok) {
//         if (response.status === 403) {
//           throw new Error('Forbidden: You do not have permission to access this resource.');
//         } else {
//           throw new Error(`Request failed with status ${response.status}`);
//         }
//       }
//       return await response.json();
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       // Display a user-friendly message or handle the error appropriately
//     }
//   }
  
//   // Usage example
//   fetchFromAPI('https://youtube-v31.p.rapidapi.com', {
//     method: 'GET',
//     headers: {
//       'Authorization': 'Bearer your-token-here',
//       'Content-Type': 'application/json'
//     }
//   })
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));
  
//     export const fetchFromAPI = async (url) => {
//   const { data } = await axios.get(`${BASE_URL}/${url}`, options);

//   return data;
// };