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

  const {name, surname, address, city, celNumber, email, password, password2, onInputChange} = useForm(registerFormFields);

  const loginSubmit = (event) => {
    event.preventDefault();
    console.log({name, surname, address, city, celNumber, email, password, password2})
  }

    return (
        <div className="container login-container">
            <div className="row m-0 vh-100 align-items-center justify-content-center">
                
                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={loginSubmit}>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name='name'
                                value={name}
                                onChange={onInputChange}
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