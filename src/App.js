import './App.css';
import Launches from "./components/launches/Launches";

function App() {
    return (
        <div>
            <h2>List of launches</h2>
            <Launches/>
        </div>
    );
}

export default App;

// є API от SpaceX
// https://api.spacexdata.com/v3/launches/
//     потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)
