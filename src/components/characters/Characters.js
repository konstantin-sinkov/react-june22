import React, {useEffect, useState} from 'react';
import Character from "../character/Character";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
      fetch('https://rickandmortyapi.com/api/character')
          .then(value => value.json())
          .then(value => setCharacters(value.results))
  }, [])
    
    return (
   <div>
       <h2>Characters list</h2>
       {characters.map((value, index) => index < 6 &&
           <Character
               character={value}
               key={value.id}
           />)
       }
   </div>
  );
 }

export default Characters;
