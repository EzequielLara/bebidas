import React, { createContext, useState, useEffect} from 'react';
import axios from 'axios';
//crear el Context
export const CategoriasContex = createContext();


//Provider es donde se encuentran las funciones y el state
const CategoriasProvider = (props) => {

    //crear el state del context
    const [ categorias, guardarCategorias ] = useState([]);

    //Llamada a la API
    useEffect(()=>{
    const obtenerCategorias = async () =>{

        const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

        const categorias = await axios.get(url);
        guardarCategorias(categorias.data.drinks);
    }
    obtenerCategorias();

    }, []);

    return (
        <CategoriasContex.Provider
                value = {{
                   categorias 
                }}
        >
            {props.children}
        </CategoriasContex.Provider>
    )
}

export default CategoriasProvider;

