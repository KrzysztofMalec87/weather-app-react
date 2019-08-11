const ApiResults = location => {
  const api = Object.freeze({
    API_KEY: '&appid=0d26436ded0fcb43c6227b80b9ae1a69',
    API_URL: 'http://api.openweathermap.org/data/2.5/weather?q=',
  });
  const data = `${api.API_URL}${location}${api.API_KEY}`;

  return data;
};

export default ApiResults;
