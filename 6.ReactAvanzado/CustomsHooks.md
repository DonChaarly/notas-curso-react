
# Customs Hooks

Un Hook no es mas que una funcion\
Se pueden crear **hooks personalizados** que nos ayuden a realizar un codigo reutilizable, ademas estos hook puedn albergar mas hooks dentro de su defincion\
Se recomienda empezar el **nombre** del hook con **use**

    export const useFetchGifs = ( category ) => {

        const [images, setImages] = useState([]);
        const [isLoading, setIsLoading] = useState( true );

        const getImages = async() => {
            const newImages = await getGifs( category );
            setImages(newImages);
            setIsLoading(false);
        }
        
        useEffect( () => {
            getImages();
        }, []);

        return {
            images,
            isLoading
        }

    }


Para utilizar un hook presonalizado **se llama igual que cualquier otro hook**

    const { images, isLoading } = useFetchGifs( category );