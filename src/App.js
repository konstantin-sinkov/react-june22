import {useState} from "react";

import Launches from "./components/launches/Launches";
import LaunchDetailInfo from "./components/launch-detail-info/LaunchDetailInfo";
import './App.css';

function App() {
    const [checkedLaunch, setCheckedLaunch] = useState(null);
    
    const launchChecker = (launch) => {
        setCheckedLaunch(launch);
    }
    
    return (
        <div>
            <LaunchDetailInfo checkedLaunch={checkedLaunch}/>
            <Launches launchChecker={launchChecker}/>
        </div>
    );
}

export default App;

// є API от SpaceX
// https://api.spacexdata.com/v3/launches/
//     потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)
