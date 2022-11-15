import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuthStore } from '../Hooks/useAuthStore';
import { useForm } from '../Hooks/useForm';
import './RegisterPage.css';

const registerFormFields = {
  name: "",
  surname: "",
  address: "",
  city: "",
  celNumber: "",
  email:"",
  password:"",
  password2: "",
}

export const RegisterPage = () => {

  const {startRegister, errorMessage} = useAuthStore();
  const {name, surname, address, city, celNumber, email, password, password2, onInputChange} = useForm(registerFormFields);
  const navigate = useNavigate();

  const registerSubmit = (event) => {
    event.preventDefault();
    if(password !== password2){
        Swal.fire({
            title: 'Error en el Registro!',
            text: 'Las Contraseñas no coinciden! Verifique!',
            icon: 'error',
            confirmButtonText: 'Ok!'
          });
          return;
    }
    console.log({name, surname, address, city, celNumber, email, password, password2})
    startRegister({name, surname, address, city, celNumber, email, password });
    navigate('/search');

}


  useEffect(() => {
    if(errorMessage !== undefined){
        Swal.fire({
            title: 'Error en el Registro!',
            text: errorMessage,
            icon: 'error',
            confirmButtonText: 'Ok!'
          })
    }

}, [errorMessage]);
  
    return (
        <div className="container login-container">
            <div className="row m-0 vh-100 align-items-center justify-content-center">
                
                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={registerSubmit}>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name='name'
                                value={name}
                                onChange={onInputChange}
                                required
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Apellido"
                                name='surname'
                                value={surname}
                                onChange={onInputChange}
                                required
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Direccion"
                                name='address'
                                value={address}
                                onChange={onInputChange}
                                required
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ciudad"
                                name='city'
                                value={city}
                                onChange={onInputChange}
                                required
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Telefono"
                                name='celNumber'
                                value={celNumber}
                                onChange={onInputChange}
                                required
                            />
                        </div>
                        
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name='email'
                                value={email}
                                onChange={onInputChange}
                                required
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña" 
                                name='password'
                                value={password}
                                onChange={onInputChange}
                                required
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña" 
                                name='password2'
                                value={password2}
                                onChange={onInputChange}
                                required
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;