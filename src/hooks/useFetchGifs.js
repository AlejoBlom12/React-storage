import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

//Hook
export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getImages = async () => {
        const newImages = await getGifs(category)
        setImages(newImages)
        setIsLoading(false)
    }

    useEffect(() => {
        getImages()
    }, [getImages])

    return {
        images,
        isLoading
    }
}
