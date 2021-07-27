import { useContext, useState } from "react";
import React  from 'react';
import CategoriasProvider, { CategoriasContex } from "../context/CategoriasContex";

const Formulario = () => {

    const {categorias} = useContext(CategoriasContex);

    return (
        <form className = 'col-12'>
    
            <fieldset className = 'text-center'>
                <legend>Busca bebidas por Categoria o Ingrediente</legend>
            </fieldset>

            <div className='row mt-4'>
                <div className= 'col-md-4'>
                    <input 
                        name = 'nombre'
                        className = 'form-control'
                        type = 'text'
                        placeholder = 'Buscar por ingrediente'
                    />
                </div>
                <div className = 'col-md-4'>
                    <select
                        className = 'form-control'
                        name = 'categoria'
                    >
                        <option value = ''>--Selecciona Categoría--</option>
                        { categorias.map((opcion,index)=>(
                        
                            <option
                                key = {index}
                                value = {opcion.strCategory}

                            >{opcion.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className = 'col-md-4'>
                    <input 
                        type = 'submit'
                        className = 'btn btn-block btn-primary'
                        value = 'Buscar Bebidas'
                    />
                </div>
            </div>
        </form>
    );
};

export default Formulario;