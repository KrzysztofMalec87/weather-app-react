const ApiRquest = location => {
  const data = `${process.env.REACT_APP_WEATHER_API_URL}${location}${process.env.REACT_APP_WEATHER_API_KEY}`;

  return data;
};

export default ApiRquest;
