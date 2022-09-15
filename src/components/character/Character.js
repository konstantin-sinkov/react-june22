import React from 'react';
import './character.css';

const Character = ({character}) => {
      return (
       <div className={'character'}>
           <h3>{character.id} --- {character.name}</h3>
           <h4>{character.species} --- {character.gender}</h4>
           <img src={character.image} alt={character.name}/>
       </div>
  );
 }

export default Character;
