import React, { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContext';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { ModalConsumer } from '../context/ModalContext';


function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

export const RecetaModal = () => {

    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();
    
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    return ( 
        <div>
            <button type="button" onClick={handleOpen}>
                Open Modal
            </button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                <h2 id="simple-modal-title">Text in a modal</h2>
                <p id="simple-modal-description">
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </p>
                </div>
            </Modal>
        </div>
     );
}
 



const Receta = ({receta}) => {

    //Configuración del modal de materialUI
    const [ modalStyle ] = useState(getModalStyle);
    const [ open, setOpen] = useState(false);

    const classes = useStyles();
    const handleOpen = () =>{
        setOpen(true);

    }
    const handleClose = () =>{
        setOpen(false);
    }

    //Extraer los valores del context

    const { info, guardarIdReceta, guardarInfo } = useContext(ModalContext);

    return (
        <>
            <div className = 'col-md-4 mb-2'>
                <div className = 'card'>
                    <h2 className = 'card-header'>{receta.strDrink}</h2>    
                    <img className = 'card-img-top' src={receta.strDrinkThumb} alt = {`imagen ${receta.strDrink}`}/>
                    <div className = 'card-body'>
                        <button
                            type ='button'
                            className = 'btn btn-block btn-primary'
                            onClick = {(e) =>{
                                e.preventDefault();
                                guardarIdReceta(receta.idDrink);
                                handleOpen();
                            }}
                        >Ver Receta</button>

                        <Modal
                            open = {open}
                            onClose = {()=>{
                                guardarIdReceta(null);
                                guardarInfo({});
                                handleClose();

                            }}
                        >
                            <div style = {modalStyle} className = {classes.paper}>
                                <h2>{info.strDrink}</h2>
                                <h3 className = 'mt-4'>Instrucciones</h3>
                                <p> {info.strInstructions}</p>

                                <img className = 'img-fluid my-4' src={info.strDrinkThumb}></img>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Receta;