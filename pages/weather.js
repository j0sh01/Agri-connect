import { useState, useEffect } from 'react';
import Footer from '../components/Footer';

export default function Weather() {
  const [location, setLocation] = useState({ lat: '', lon: '', city: '' });
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
            city: '',
          });
        },
        (err) => {
          console.error('Geolocation error:', err);
          setError('Unable to retrieve your location. Please enter your location manually.');
        }
      );
    } else {
      setError('Geolocation is not supported by your browser. Please enter your location manually.');
    }
  }, []);

  useEffect(() => {
    if ((location.lat && location.lon) || location.city) {
      fetchWeatherData();
    }
  }, [location]);

  const fetchWeatherData = async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      if (location.city) {
        params.append('city', location.city);
      } else {
        params.append('lat', location.lat);
        params.append('lon', location.lon);
      }
      const response = await fetch(`/api/weather?${params.toString()}`);
      const data = await response.json();
      if (response.ok) {
        setWeatherData(data);
      } else {
        setError(data.message || 'Error fetching weather data.');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setError('Error fetching weather data.');
    } finally {
      setLoading(false);
    }
  };

  const handleManualLocationSubmit = (e) => {
    e.preventDefault();
    if (!location.city) {
      setError('Please enter a valid location.');
      return;
    }
    fetchWeatherData();
  };

  const handleLocationChange = (e) => {
    setLocation({ ...location, city: e.target.value, lat: '', lon: '' });
  };

  const getFarmingAdvice = (weather) => {
    const temp = weather.main.temp;
    const humidity = weather.main.humidity;
    const condition = weather.weather[0].main.toLowerCase();

    if (condition.includes('rain')) {
      return 'Rain is expected. Consider drainage for your fields and plan accordingly.';
    } else if (condition.includes('clear')) {
      return 'Clear skies ahead. Ideal time for sowing seeds or applying fertilizers.';
    } else if (condition.includes('clouds')) {
      return 'Cloudy weather. Monitor crops for fungal diseases due to humidity.';
    } else if (condition.includes('snow')) {
      return 'Snowy conditions expected. Protect sensitive crops from cold damage.';
    }
    return 'Stay updated with weather changes to optimize your farming activities.';
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
      hour: 'numeric'
    });
  };

  // Group forecast data by day
  const groupForecastByDay = (list) => {
    const grouped = {};
    list.forEach(item => {
      const date = new Date(item.dt * 1000).toLocaleDateString();
      if (!grouped[date]) {
        grouped[date] = {
          date: item.dt * 1000,
          forecasts: []
        };
      }
      grouped[date].forecasts.push(item);
    });
    return Object.values(grouped);
  };

  // Get daily summary from 3-hour forecasts
  const getDailySummary = (forecasts) => {
    const temps = forecasts.map(f => f.main.temp);
    const maxTemp = Math.max(...temps);
    const minTemp = Math.min(...temps);
    const avgHumidity = forecasts.reduce((sum, f) => sum + f.main.humidity, 0) / forecasts.length;
    const avgWindSpeed = forecasts.reduce((sum, f) => sum + f.wind.speed, 0) / forecasts.length;
    
    return {
      maxTemp: Math.round(maxTemp),
      minTemp: Math.round(minTemp),
      humidity: Math.round(avgHumidity),
      windSpeed: Math.round(avgWindSpeed * 10) / 10,
      weather: forecasts[0].weather[0], // Use the first forecast's weather description
    };
  };

  return (
    <>
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
          5-Day Weather Forecast
        </h1>

        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
            {error}
          </div>
        )}

        {(!weatherData || error) && (
          <div className="mb-6">
            <form onSubmit={handleManualLocationSubmit} className="flex flex-col items-center">
              <label className="mb-2 text-lg font-medium text-gray-700">
                Please enter your city or town
              </label>
              <input
                type="text"
                className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={location.city}
                onChange={handleLocationChange}
                placeholder="e.g., Dodoma"
                required
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Get Weather
              </button>
            </form>
          </div>
        )}

        {loading && (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600"></div>
          </div>
        )}

        {weatherData && !loading && (
          <>
            <h2 className="text-xl font-semibold mb-4 text-center">
              {weatherData.city.name}, {weatherData.city.country}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {groupForecastByDay(weatherData.list).map((day, index) => {
                const summary = getDailySummary(day.forecasts);
                return (
                  <div key={day.date} className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-2">
                      {index === 0 ? 'Today' : formatDate(day.date)}
                    </h3>
                    <div className="flex items-center mb-4">
                      <img
                        src={`https://openweathermap.org/img/wn/${summary.weather.icon}@2x.png`}
                        alt={summary.weather.description}
                        className="w-16 h-16"
                      />
                      <div>
                        <p className="text-gray-600 capitalize">
                          {summary.weather.description}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p><strong>High:</strong> {summary.maxTemp}°C</p>
                      <p><strong>Low:</strong> {summary.minTemp}°C</p>
                      <p><strong>Humidity:</strong> {summary.humidity}%</p>
                      <p><strong>Wind:</strong> {summary.windSpeed} m/s</p>
                    </div>
                    <div className="mt-4 p-3 bg-green-50 rounded-md">
                      <p className="text-sm text-green-800">{getFarmingAdvice(day.forecasts[0])}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        <footer className="mt-6 text-center text-sm text-gray-500">
          Weather data provided by{' '}
          <a
            href="https://openweathermap.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            OpenWeatherMap
          </a>
        </footer>
      </div>

      {/* Move Footer outside of main content container */}
      <Footer />
    </>
  );
}
