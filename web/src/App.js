import React, { useState, useEffect } from 'react';
import api from './services/api'; 

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem'

function App() {
  const [devs, setDevs] = useState([]);

  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err)
      },
      {
        timeout: 80000,
      }
    )
  }, []);

  useEffect(() => {
      async function loadDevs() {
        const response = await api.get('/devs');

        setDevs(response.data);
    
    }

    loadDevs();
  }, [])

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude,
      
    });
   

    setGithubUsername('');
    setTechs('');
    
    setDevs([...devs, response.data]);


  }


  return (
    <div id="app">
      <aside>

        <strong>Cadastrar</strong>
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input 
              name="github_username" 
              id="github_username" 
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
              required />
          </div>
        
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
            name="techs" 
            id="techs" 
            value={techs} 
            onChange={e => setTechs(e.target.value)}
            required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                name="latitude" 
                id="latitude"
                type="number" 
                value={latitude} 
                onChange={e => setLatitude(e.target.value)}
                required 
              />
            </div>
          
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                name="longitude" 
                id="longitude" 
                type="number" 
                value={longitude} 
                onChange={e => setLongitude(e.target.value)}
                required 
              />
            </div>
          
          </div> 

          <button type="submit">Salvar</button>
        </form>

      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
          
        </ul>

      </main>
    </div>
  );
}

export default App;
