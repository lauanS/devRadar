import React from 'react';

function DevItem(props){
  const { dev } = props;

  return (
  <li className="dev-item">
    <header>
      <img 
        src={dev.avatar_url}
        alt={dev.github_username}
      />
      <div className="user-info">
        <strong>{dev.github_username}</strong>
        <span>{dev.techs.join(', ')}</span>
      </div>
    </header>
    <p>{dev.bio}</p>
    <a href={`https://github.com/${dev.github_username}`}>Perfil do Github</a>
  </li>)
}

export default DevItem;