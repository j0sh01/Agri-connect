// import axios from 'axios';

// export default async function handler(req, res) {
//   const { lat, lon, city } = req.query;
//   const apiKey = process.env.OPENWEATHERMAP_API_KEY;

//   if (!apiKey) {
//     return res.status(500).json({ message: 'Server configuration error: Missing API key.' });
//   }

//   const params = {
//     units: 'metric',
//     appid: apiKey,
//   };

//   if (city) {
//     params.q = city;
//   } else if (lat && lon) {
//     params.lat = lat;
//     params.lon = lon;
//   } else {
//     return res.status(400).json({ message: 'Location parameters are required.' });
//   }

//   try {
//     const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, { params });
//     res.status(200).json(response.data);
//   } catch (error) {
//     console.error('Weather API error:', error.response?.data || error.message);
//     const errorMessage =
//       error.response?.data?.message || 'Failed to fetch weather data.';
//     res.status(500).json({ message: errorMessage });
//   }
// }


// pages/api/weather.js
import axios from 'axios';

export default async function handler(req, res) {
  const { lat, lon, city } = req.query;
  const apiKey = process.env.OPENWEATHERMAP_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ message: 'Server configuration error: Missing API key.' });
  }

  try {
    let params = {
      units: 'metric',
      appid: apiKey,
    };

    if (city) {
      params.q = city;
    } else if (lat && lon) {
      params.lat = lat;
      params.lon = lon;
    } else {
      return res.status(400).json({ message: 'Location parameters are required.' });
    }

    // Fetch 5-day forecast using the free API endpoint
    const response = await axios.get(
      'https://api.openweathermap.org/data/2.5/forecast',
      { params }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Weather API error:', error.response?.data || error.message);
    const errorMessage = error.response?.data?.message || 'Failed to fetch weather data.';
    res.status(500).json({ message: errorMessage });
  }
}