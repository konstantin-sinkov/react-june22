import React from 'react';

const Launch = ({launch}) => {
    return (
        <div className={'launch_item'}>
            <p><b>{launch.mission_name}</b> -- launched in {launch.launch_year}</p>
            <img src={launch.links.mission_patch_small} alt='mission_patch_small'/>
        </div>
    );
}

export default Launch;
