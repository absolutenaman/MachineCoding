import {useEffect, useState} from 'react';


const usePlanetImages = (queryParameter) => {
    const [imagesData, setImagesData] = useState({});

    useEffect(() => {
        fetch(`https://images-api.nasa.gov/search?q=${queryParameter}`).then((res) => res.json()).then((result) => {
            setImagesData(result?.collection?.items);
        }).catch((err) => {
            console.log("Error in data fetching", err);
        })
    }, [queryParameter]);
    return {imagesData};
}


export default usePlanetImages;