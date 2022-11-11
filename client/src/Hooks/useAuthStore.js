import { useDispatch, useSelector } from "react-redux"
import authApi from "../Api/authApi";
import useAuth from "../Authentication/useAuth";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../Helpers/Index";


export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();


    const startLogin = async({email,password}) => {
        dispatch(onChecking())

        try {

            const {data} = await authApi.post('/auth/login', {email,password});
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({name: data.name, uid: data.uid}))
            
        } catch (error) {
            dispatch(onLogout('Credenciales Incorrectas'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }
    
    const startRegister = async({name, surname, address, city, celnumber, email, password, password2}) => {
        dispatch(onChecking());

        try {

            const {data} = await authApi.post('/auth/register', {name, surname, address, city, celnumber, email, password, password2});
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({name: data.name, uid: data.uid}))

        } catch (error) {
            dispatch(onLogout(error.response.data?.msg || 'Error!'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }


    }


    return {
       status,
       errorMessage,
       user,
       startLogin,
       startRegister
    }
}