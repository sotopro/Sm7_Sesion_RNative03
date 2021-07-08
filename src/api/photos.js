import fetchApi from './fetch-api';

const photos = {
  getPhotos: async () => {
    const data = await fetchApi.get('/photos');
    return data;
  },
  postPhotos: async parameters => {
    const data = await fetchApi.post('/photos', parameters);
    return data;
  },
};

export default photos;
