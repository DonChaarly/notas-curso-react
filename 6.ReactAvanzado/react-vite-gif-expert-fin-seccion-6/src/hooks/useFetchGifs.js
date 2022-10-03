import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

//13. Se pueden creear hooks personalizados que realizen un codigo por nosotros y este pueda ser reutilizable
export const useFetchGifs = ( category ) => {

    //14. Estos hooks pueden contener otros hooks dentro -> GifGrid.jsx
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    //12 Se puede crear una funcion aparte a la que si se le puede colocar async await y esta correrla dentro del hook
    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }
    

    //11. A los hooks no se les puede colocar la palabra async y await, para esto una solucion seria utilizar simplemente then() en vez de async await
    useEffect( () => {
        getImages();
    }, []);



    return {
        images,
        isLoading
    }

}
