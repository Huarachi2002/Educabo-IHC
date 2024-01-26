import CNacimiento from '../../img/actanacimientogratis-logo.png';
import CI from '../../img/carnetId.png';
import CV from '../../img/vacuna.png';
import Rude from '../../img/rude.png';

export const Requisitos = () => {
  return (
    <div className="row align-items-center px-3">
                <div className="d-flex justify-content-center align-items-center">
                    <h1 className="display-3 font-weight-bold text-white">Requisitos</h1>
                </div>
                <div className="col justify-content-center align-items-center">
                    <div className="row justify-content-spacepbetween align-items-center">
                        <div className="col-md-3 justify-content-center align-items-center">
                            <img className="img-fluid object-fit-contain m-2 " width="60%" height="20%" src={CNacimiento} alt=""/>
                        </div>
                        <div className="col-md-3">
                            <img className="img-fluid object-fit-contain m-2 " width="50%" height="20%" src={CI} alt=""/>
                        </div>
                        <div className="col-md-3">
                            <img className="img-fluid object-fit-contain m-2 " width="50%" height="20%" src={CV} alt=""/>
                        </div>
                        <div className="col-md-3">
                            <img className="img-fluid object-fit-contain m-2 " width="50%" height="20%" src={Rude} alt=""/>
                        </div>
                    </div>
                    <div className="row justify-content-spacepbetween align-items-center">
                        <div className="col-md-3 justify-content-center align-items-center">
                            <p className="text-white mb-4 display-5">Certificado de nacimiento original del estudiante</p>
                        </div>
                        <div className="col-md-3">
                            <p className="text-white mb-4 display-5">Cédula de identidad del estudiante, así como los documentos de identidad del padre, madre o tutor</p>
                        </div>
                        <div className="col-md-3">
                            <p className="text-white mb-4 display-5">Carnet de Vacunas del Esquema Nacional de Vacunación</p>
                        </div>
                        <div className="col-md-3">
                            <p className="text-white mb-4 display-5">Es necesario poder rellenar el formulario de Rude si es necesario adquierelo mas adelante</p>
                        </div>
                    </div>
                </div>
    </div>
  )
}
