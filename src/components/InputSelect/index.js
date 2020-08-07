import React, { useEffect, useState, useCallback } from 'react';
import SVG from 'react-inlinesvg';

import iconMarker from '../../assets/images/icon-marker.svg';
import getLocation from '../../config/getLocation';

import { Container } from './styles';

function InputSelect() {
  const [locale, setLocale] = useState('');


  const setLocation = useCallback(location => {
    if (location) {
      setLocale(location);
    }
  }, []);

  useEffect(() => {
    getLocation(setLocation);
  }, [setLocation]);

  return (
    <Container>
      <div className="input-container">
        <input
          type="text"
          value={locale}
          onChange={e => setLocale(e.target.value)}
          placeholder="Insira sua cidade e estado"
        />
        <SVG src={iconMarker} />
      </div>

      <select name="" id="" className="distance-select">
        <option value="50">Raio: 50km</option>
        <option value="100">Raio: 100km</option>
        <option value="150">Raio: 150km</option>
        <option value="200">Raio: 200km</option>
      </select>
    </Container>
  );
}

export default InputSelect;
