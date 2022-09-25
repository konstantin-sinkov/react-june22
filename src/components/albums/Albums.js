import React, {useEffect, useState} from 'react';
import {services} from "../../services/service";
import {Album} from "../album/Album";

const Albums = () => {
    const [albums, setAlbums] = useState([]);
    
    useEffect(() => {
        services.getAlbums().then(value => setAlbums([...value]));
    }, []);
    
    
    return (
        <div>
            <h2 className={'header-page'}>Albums page</h2>
            <div className={'content_wrapper'}>
                <div className={'wrapper'}>
                    {
                        albums.map(album => <Album album={album} key={album.id}/>)
                    }
                </div>
            </div>
        </div>
    );
}

export {Albums};
