// Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
//     https://rickandmortyapi.com/api/character
//         Створити 6 персонажів

import './App.css';
import Characters from "./components/characters/Characters";

function App() {
  return (
    <div>
      <Characters />
    </div>
  );
}

export default App;
