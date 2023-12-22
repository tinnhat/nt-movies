const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "b808205adc2cfb152a9da5c74b34ad11",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
