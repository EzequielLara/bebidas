import React from 'react';

const Receta = ({receta}) => {

    
    return (
        <>
            <div className = 'col-md-4 mb-2'>
                <div className = 'card'>
                    <h2 className = 'card-header'>{receta.strDrink}</h2>
                    <img src={receta.strDrinkThumb}/>
                </div>
            </div>
        </>
    );
};

export default Receta;