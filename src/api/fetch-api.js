import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const parseBody = async res => {
  if (res.status) {
    try {
      if (res.status === 200 || res.status === 201) {
        return res.data;
      } else {
        return parseError(res, res.status);
      }
    } catch (e) {
      return parseError(res, res.status);
    }
  }
  return parseError(res, res.status);
};

const parseError = (error, status) => {
  switch (status) {
    case undefined:
      return error
        .text()
        .then(result => {
          return {
            errors:
              'Probablemente tenemos inconvenientes con nuestros servicios, intentelo más tarde',
            status: error.data.status,
          };
        })
        .catch(e => {
          if (e.data.status === 1000) {
            return {
              errors: 'Error de red',
              status: e.data.status,
            };
          }
        });
    case 400:
    case 401:
    case 403:
    case 404:
      return {
        errors: error.data.message,
        status: status,
      };
    case 500:
      return {
        errors: 'Servicio no disponible',
        status: status,
      };
    default:
      return {
        errors:
          'Probablemente tenemos inconvenientes con nuestros servicios, intentelo más tarde',
        status: status,
      };
  }
};

const fetchApi = {
  get: async (url, config) => {
    return instance
      .get(url, config)
      .then(data => {
        return parseBody(data);
      })
      .catch(error => {
        try {
          if (error.response.status === 1000) {
            return {
              errors: 'Error de red',
              status: error.data.status,
            };
          }
          return parseError(error.response, error.response.status);
        } catch (e) {
          parseError(e.response, e.response.status);
        }
      });
  },
  post: async (url, parameters, config) => {
    return instance
      .post(url, parameters, config)
      .then(res => {
        return parseBody(res);
      })
      .catch(error => {
        try {
          if (error.response.status === 1000) {
            return {
              errors: 'Error de red',
              status: error.data.status,
            };
          }
          return parseError(error.response, error.response.status);
        } catch (e) {
          parseError(e.response, e.response.status);
        }
      });
  },
  put: async (url, parameters, config) => {},
  patch: async (url, parameters, config) => {},
};

export default fetchApi;
