import React from 'react';

import './launch.css';

const Launch = ({launch, launchChecker}) => {
    const checkLaunch = () => {
        launchChecker(launch);
    }
    
    return (
        <div className={'launch_item'}>
            <p><b>{launch.mission_name}</b> -- launched in {launch.launch_year}</p>
            <button onClick={checkLaunch}>Launch details</button>
            <img src={launch.links.mission_patch_small} alt='mission_patch_small'/>
        </div>
    );
}

export default Launch;
