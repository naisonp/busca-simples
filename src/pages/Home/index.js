import React, { useState, useEffect, useMemo, useCallback } from 'react';
import SVG from 'react-inlinesvg';

import api from '../../config/api';

import logo from '../../assets/images/webmotors_logo.svg';
import iconCar from '../../assets/images/icon-car.svg';
import iconBike from '../../assets/images/icon-bike.svg';

import { Button, Checkbox, Select, InputSelect } from '../../components';

import {
  Container,
  ContentContainer,
  ContentHeader,
  ContentBody,
  Tab,
  ActionContainer,
  VehiclesContainer,
  Vehicle,
  Loading,
} from './styles';

function getYearList(length) {
  let year = new Date().getFullYear();

  const yearList = Array.from({ length }, () => {
    const newItem = year;
    year -= 1;

    return { value: newItem, label: newItem };
  });

  return yearList;
}

function monetaryFormat(number, format = false) {
  let formattedValue = number;
  if (format) {
    const val = String(number).replace(/,/g, '.');

    formattedValue = val;
  }

  return new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency',
  }).format(formattedValue);
}

function getPriceRange(start, end, ranges = 5) {
  const middle = (end - start) / ranges;
  const rangeList = [];

  for (let i = 1; i < ranges; i++) {
    if (rangeList.length) {
      const startValue = rangeList[rangeList.length - 1].endValue;
      const endValue = rangeList[rangeList.length - 1].endValue + middle;
      rangeList.push({ startValue, endValue });
    } else {
      rangeList.push({ startValue: start, endValue: start + middle });
    }
  }

  rangeList.push({
    startValue: rangeList[rangeList.length - 1].endValue,
    endValue: end,
  });

  return rangeList.reduce((accumulator, rangeValue) => {
    return [
      ...accumulator,
      {
        value: `${monetaryFormat(rangeValue.startValue)} - ${monetaryFormat(
          rangeValue.endValue,
        )}`,
        label: `${monetaryFormat(rangeValue.startValue)} - ${monetaryFormat(
          rangeValue.endValue,
        )}`,
      },
    ];
  }, []);
}

function Home() {
  const [tab, setTab] = useState('car');
  const [newVehicle, setNewVehicle] = useState(true);
  const [usedVehicle, setUsedVehicle] = useState(true);
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [versions, setVersions] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedVersion, setSelectedVersion] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [loading, setLoading] = useState(false);

  const modelsDisabled = useMemo(() => {
    return !models.length;
  }, [models]);

  const versionsDisabled = useMemo(() => {
    return !versions.length;
  }, [versions]);

  const vehiclesEnable = useMemo(() => {
    return !!vehicles.length;
  }, [vehicles]);

  const getVehicles = useCallback(async () => {
    try {
      setVehicles([]);
      setLoading(true);
      const { data } = await api.get('/Vehicles', {
        params: {
          Page: 1,
        },
      });

      setVehicles(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const clearForm = (e) => {
    setNewVehicle(true);
    setUsedVehicle(true);
    setVehicles([]);
    setSelectedMake('');
    setSelectedVersion('');
    setSelectedYear('');
    setSelectedPriceRange('');
  };

  useEffect(() => {
    async function loadVersions() {
      if (selectedModel) {
        try {
          const { data } = await api.get('/Version', {
            params: {
              ModelID: selectedModel,
            },
          });
          const formattedVersions = data.map(option => ({
            value: option.ID,
            label: option.Name,
          }));

          setVersions(formattedVersions);
        } catch (error) {
          console.log(error);
        }
      } else {
        setVersions([]);
      }
    }

    loadVersions();
  }, [selectedModel]);

  useEffect(() => {
    async function loadModels() {
      if (selectedMake) {
        try {
          const { data } = await api.get('/Model', {
            params: {
              MakeID: selectedMake,
            },
          });
          const formattedModels = data.map(option => ({
            value: option.ID,
            label: option.Name,
          }));

          setModels(formattedModels);
        } catch (error) {
          console.log(error);
        }
      } else {
        setModels([]);
      }
    }

    loadModels();
  }, [selectedMake]);

  useEffect(() => {
    async function loadMake() {
      try {
        const { data } = await api.get('/Make');
        const formattedMakes = data.map(option => ({
          value: option.ID,
          label: option.Name,
        }));

        setMakes(formattedMakes);
      } catch (error) {
        console.log(error);
      }
    }

    loadMake();
  }, []);

  return (
    <>
      <Container>
        <Button className="float-button">Vender</Button>
        <header>
          <img src={logo} alt="WebMotors" />
        </header>
        <ContentContainer>
          <ContentHeader>
            <div>
              <Tab active={tab === 'car'} onClick={() => setTab('car')}>
                <SVG src={iconCar} />
                <div>
                  <span>Comprar</span>
                  <h2>Carros</h2>
                </div>
              </Tab>
              <Tab active={tab === 'bike'} onClick={() => setTab('bike')}>
                <SVG src={iconBike} />
                <div>
                  <span>Comprar</span>
                  <h2>Motos</h2>
                </div>
              </Tab>
            </div>
            <Button className="send-car" variant="warning" outline>
              Vender meu carro
            </Button>
          </ContentHeader>
          <ContentBody>
            <form onSubmit={() => { }}>
              <div className="checkbox-row">
                <Checkbox
                  value={newVehicle}
                  onChange={setNewVehicle}
                  label="Novos"
                />
                <Checkbox
                  value={usedVehicle}
                  onChange={setUsedVehicle}
                  label="Usados"
                />
              </div>
              <div className="row mt-0">
                <div className="col">
                  <div className="row">
                    <div className="col">
                      <InputSelect />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <Select
                        placeholderAlt="Ano desejado"
                        value={selectedYear}
                        options={getYearList(15)}
                        onChange={setSelectedYear}
                      />
                    </div>
                    <div className="col">
                      <Select
                        placeholderAlt="Faixa de preço"
                        value={selectedPriceRange}
                        options={getPriceRange(15000, 30000)}
                        onChange={setSelectedPriceRange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col mt-0">
                  <div className="row">
                    <div className="col">
                      <Select
                        prefix="Marca"
                        placeholderAlt="Todas"
                        value={selectedMake}
                        options={makes}
                        onChange={setSelectedMake}
                      />
                    </div>
                    <div className="col">
                      <Select
                        prefix="Modelos"
                        placeholderAlt="Todos"
                        value={selectedModel}
                        disabled={modelsDisabled}
                        options={models}
                        onChange={setSelectedModel}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <Select
                        prefix="Versão"
                        placeholderAlt="Todas"
                        value={selectedVersion}
                        disabled={versionsDisabled}
                        options={versions}
                        onChange={setSelectedVersion}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <ActionContainer>
              <p className="advanced-search">&gt; Busca Avançada</p>
              <div className="get-vehicles-container">
                <button className="filters-clean" type="button" onClick={clearForm}>
                  Limpar filtros
                </button>
                <Button className="send-button" onClick={getVehicles}>
                  Ver Ofertas
                </Button>
              </div>
            </ActionContainer>
          </ContentBody>
        </ContentContainer>
        {loading && <Loading className="loading" src={logo} alt="WebMotors" />}
        {vehiclesEnable && (
          <VehiclesContainer>
            {vehicles.map(vehicle => (
              <Vehicle key={vehicle.ID}>
                <div className="image-container">
                  <img src={vehicle.Image} alt={vehicle.Model} />
                </div>

                <div className="content">
                  <div className="vehicle-info">
                    <p className="title">{`${vehicle.Make} ${vehicle.Model}`}</p>
                    <p className="version">{vehicle.Version}</p>
                  </div>
                  <div className="price-container">
                    <p className="price">
                      {monetaryFormat(vehicle.Price, true)}
                    </p>
                  </div>
                  <div className="year-km-container">
                    <small className="year">{`${vehicle.YearFab}/${vehicle.YearModel}`}</small>
                    <small className="km">{vehicle.KM} km</small>
                  </div>
                </div>
              </Vehicle>
            ))}
          </VehiclesContainer>
        )}
      </Container>
    </>
  );
}

export default Home;
