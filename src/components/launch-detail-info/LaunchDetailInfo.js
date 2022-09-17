import React from 'react';

const LaunchDetailInfo = ({checkedLaunch}) => {
    console.log(checkedLaunch);
    return (
        <>
            {
                !checkedLaunch ?
                    '' :
                    <div>
                        <h3>Launch details</h3>
                        <p>Rocket name -- {checkedLaunch.rocket.rocket_name} {checkedLaunch.rocket.rocket_type} -- launch #{checkedLaunch.flight_number}</p>
                        <p>Launch date (local) -- {checkedLaunch.launch_date_local}</p>
                        <p>launch status -- {checkedLaunch.launch_success ? 'success' : 'failed'}</p>
                    </div>
            }
        </>
    );
}

export default LaunchDetailInfo;
