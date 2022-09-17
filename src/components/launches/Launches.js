import React, {useEffect, useState} from 'react';
import Launch from "../launch/Launch";
import {getLaunches} from "../../services/launches.api.service";

import './Launches.css';

const Launches = () => {
    const [launches, setLaunches] = useState([]);
    
    useEffect(() => {
        getLaunches().then(value => setLaunches(value.data));
    }, []);
    // console.log(launches[1]);
    
    return (
        <div className={'wrapper'}>
            {
                launches.filter(launch => launch.launch_year !== '2020').map((launch, index) => <Launch launch={launch} key={index}/>)
            }
        </div>
    );
}

export default Launches;
