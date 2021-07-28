import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';


//Crear context
export const CategoriasContext = createContext();

const CategoriasProvider = (props) => {

    const [ categoria, guardarCategorias] = useState([]);

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
        <CategoriasContext.Provider 
                value = {{
                    categoria
                }}
        >{props.children}
        </CategoriasContext.Provider>
    );

}

export default CategoriasProvider;

