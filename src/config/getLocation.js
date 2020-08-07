import axios from 'axios';

export default async function getLocation(callback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async position => {
      const { latitude, longitude } = position.coords;

      const { data } = await axios.get(
        'https://api.bigdatacloud.net/data/reverse-geocode-client',
        {
          params: {
            latitude,
            longitude,
            localityLanguage: 'pt-BR',
          },
        },
      );

      callback(`${data.locality} - ${data.principalSubdivision}`);
    });
  } else {
    callback(false);
  }
}
