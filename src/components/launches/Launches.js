import React, {useEffect, useState} from 'react';
import Launch from "../launch/Launch";

import {getLaunches} from "../../services/launches.api.service";

const Launches = () => {
    const [launches, setLaunches] = useState([]);
    
    useEffect(() => {
        getLaunches().then(value => setLaunches(value.data));
    }, []);
    console.log(launches[1]);
    
    return (
        <div>
            {
                launches.map((launch, index) => <Launch launch={launch} key={index}/>)
            }
        </div>
    );
}

export default Launches;
