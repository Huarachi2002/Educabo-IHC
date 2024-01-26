import React from 'react'
import { NavBar } from '../components'
import { Link } from 'react-router-dom'
import student from '../../img/estudent.jpeg';
import { Requisitos } from '../components';


export const HomePage = () => {
  return (
    <>
        <NavBar/>
        <div className="container-fluid bg-primary px-0 px-md-1 overflow-x-hidden">
            <div className="row align-items-center px-3">
                <div className="col-lg-6 text-center text-lg-left">
                    <h1 className="display-3 font-weight-bold text-white">Cupos Para Estudiantes Nuevos</h1>
                    <p className="display-5 text-white mb-4">Inscribe ahora y no pierdas los 10 cupos disponibles nivel primaria y secundaria para cada una de las Unidades Educativas de Bolivia.</p>
                    <div className="d-flex justify-content-spacepbetween">
                        <Link to="/registro" className="btn btn-secondary mb-3 py-3 px-5">REGISTRAR</Link>
                        <p className="text-white mt-3 ml-4">Finaliza el 05/02/2024 7:00 AM</p>                    
                    </div>
                
                </div>
                <div className="col-lg-6 text-center text-lg-right">
                    <div className="d-flex justify-content-center align-items-center">
                        <img className="img-fluid object-fit-contain m-2 img-thumbnail " width="80%" height="70%" src={student} alt=""/>
                    </div>
                </div>
            </div>  
            <Requisitos/>
            
        </div>
    </>
  )
}
