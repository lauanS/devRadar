import React, { useState, useEffect } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [githubUsername, setGithubUsername] = useState('');
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
        timeout: 30000,
      }
    )
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

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
              value={githubUsername}
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
          <li className="dev-item">
            <header>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNeL8_E3qq68K5f4bcXoXe9ZBtS-qSyzD5Qt_hkftutWZmeQg_"
                alt="Gerald"
              />
              <div className="user-info">
                <strong>Geraldo da Silvia</strong>
                <span>Java, Spring, HTML</span>
              </div>
            </header>
            <p>Ocupado com os novos negócios</p>
            <a href="https://github.com/lauanS">Perfil do Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNeL8_E3qq68K5f4bcXoXe9ZBtS-qSyzD5Qt_hkftutWZmeQg_"
                alt="Gerald"
              />
              <div className="user-info">
                <strong>Geraldo da Silvia</strong>
                <span>Java, Spring, HTML</span>
              </div>

            </header>
            <p>Ocupado com os novos negócios</p>
            <a href="https://github.com/lauanS">Perfil do Github</a>
          </li>


          <li className="dev-item">
            <header>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNeL8_E3qq68K5f4bcXoXe9ZBtS-qSyzD5Qt_hkftutWZmeQg_"
                alt="Gerald"
              />
              <div className="user-info">
                <strong>Geraldo da Silvia</strong>
                <span>Java, Spring, HTML</span>
              </div>

            </header>
            <p>Ocupado com os novos negócios</p>
            <a href="https://github.com/lauanS">Perfil do Github</a>
          </li>
        </ul>

      </main>
    </div>
  );
}

export default App;
