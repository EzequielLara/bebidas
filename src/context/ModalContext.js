import axios from 'axios';
import React, {createContext, useState, useEffect} from 'react';


export const ModalContext = createContext();

const ModalProvider =(props)=>{

    const [idreceta, guardarIdReceta] = useState(null);
    const [info, guardarInfo] = useState({});

    //una vez tenemos una receta, llamar a la API
    useEffect(()=>{

        const obtenerReceta = async () =>{

            if(!idreceta) return;

            const url =`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;

            const informacion = await axios.get(url);

            console.log(informacion.data.drinks[0]);

            guardarInfo(informacion.data.drinks[0]);

        }
        obtenerReceta();

    }, [idreceta])

    return (
        <ModalContext.Provider 
            value = {{guardarIdReceta}}
        >
            {props.children}
        </ModalContext.Provider>

    )
}

export default ModalProvider;