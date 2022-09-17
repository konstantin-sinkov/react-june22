import React, {useEffect, useState} from 'react';

import Launch from "../launch/Launch";
import {getLaunches} from "../../services/launches.api.service";
import './Launches.css';


const Launches = ({launchChecker}) => {
    const [launches, setLaunches] = useState([]);
    
    useEffect(() => {
        getLaunches().then(value => setLaunches(value.data));
    }, []);
    // console.log(launches[1]);
    
    return (
        <div>
            <h2 className={'launches_header'}>List of launches</h2>
            <div className={'wrapper'}>
                {
                    launches.filter(launch => launch.launch_year !== '2020')
                        .map((launch, index) =>
                            <Launch
                                launch={launch}
                                key={index}
                                launchChecker={launchChecker}
                            />
                        )
                }
            </div>
        </div>
    );
}

export default Launches;
