import { useContext, useState } from "react";
import React  from 'react';
import {CategoriasContext}  from "../context/CategoriasContext";
import {RecetasContext} from "../context/RecetasContext";

const Formulario = () => {

   const { categoria } = useContext(CategoriasContext);
   const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);

   const [ busqueda, guardarBusqueda] = useState({
       nombre: '',
       categoria: ''
   });

   //Función para leer contenidos
   const obtenerDatosRecetas = e =>{

        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
   }

   

    return (
        <form 
            className = 'col-12'
            onSubmit = {e=>{
                e.preventDefault();
                buscarRecetas(busqueda);
                guardarConsultar(true);
                }}
            >
    
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
                        onChange = {obtenerDatosRecetas}
                       
                    />
                </div>
                <div className = 'col-md-4'>
                    <select
                        className = 'form-control'
                        name = 'categoria'
                        onChange = {obtenerDatosRecetas}
                   
                    >
                        <option value = ''>--Selecciona Categoría--</option>
                       {categoria.map((categoria, index) =>(
                           <option
                                key = {index}
                                value = {categoria.strCategory}
                            >{categoria.strCategory}</option>
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