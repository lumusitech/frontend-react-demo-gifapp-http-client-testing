import { useState, useEffect } from 'react'

import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    // useEffect(() => {
    //     getGifs(category)
    //         .then(setImages); // Forma abreviada
    //     // Cuando solo se pasa un elemento, se simplifica
    //     // poniendo solamente el nombre de la función
    //     // Forma extensa
    //     // .then(imgs => setImages(imgs));
    // }, [category]); // Si está en la lista de cambios, se renderizará

    useEffect(() => {
        getGifs(category)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                })
            })
    }, [category])


    return state; // { data: [], loading: true }
}