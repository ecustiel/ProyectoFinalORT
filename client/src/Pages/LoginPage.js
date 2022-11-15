
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
//import { checkingAuthentication } from '../Helpers/auth/Thunks';
import { useAuthStore } from '../Hooks/useAuthStore';
import { useForm } from '../Hooks/useForm';
import './LoginPage.css';



const loginFormFields = {
  email:"",
  password:"",
}

export const LoginPage = () => {

    const {startLogin, errorMessage} = useAuthStore();
    const navigate = useNavigate();

    //const dispatch = useDispatch();
    const {email, password, onInputChange} = useForm(loginFormFields);

    const loginSubmit = (event) => {
    event.preventDefault();
    startLogin({email:email, password:password});
    navigate('/search');

  }

    useEffect(() => {
        if(errorMessage !== undefined){
            Swal.fire({
                title: 'Error en la Autenticacion!',
                text: errorMessage,
                icon: 'error',
                confirmButtonText: 'Ok!'
              })
        }
    
    }, [errorMessage])


    return (
        <div className="container login-container">
            <div className="row m-0 vh-100 align-items-center justify-content-center">
                <div className="col-md-5 login-form-1">
                    <h3>Ingresar</h3>
                    <form onSubmit={loginSubmit}>
                        <div className="form-group mb-2">
                            <input 
                                type="text"
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
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                
            </div>
        </div>
    )
}

export default LoginPage;