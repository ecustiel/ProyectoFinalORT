/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route, Redirect} from 'react-router-dom'
import Layout from '../Components/Layouts/Layout'
import { useAuthStore } from '../Hooks/useAuthStore'
import HomePage from '../Pages/HomePage'
import LoginPage from '../Pages/LoginPage'
import NotFoundPage from '../Pages/NotFoundPage'
import PerfilPage from '../Pages/PerfilPage'
import RegisterPage from '../Pages/RegisterPage'
import SearchPage from '../Pages/SearchPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './Publicroute'


export default function AppRouter() {

  const {status, checkAuthToken} = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, [])

  if(status === 'checking') {
    return (
      <h3>Cargando...</h3>
    )
  }



  return (
    <Router>
    <Layout>
      
        <Routes>

            {status === 'not-authenticated' && <>
            <Route exact path='/login' element = {<LoginPage />} />
            <Route exact path='/register' element = {<RegisterPage />} />
            </>
          }

          {status === 'authenticated' && <>
            <Route exact path='/perfil' element = {<PerfilPage />} />
            <Route exact path='/search' element = {<SearchPage />} />
            </>
          }
            {/*<Route exact path='/publication/:publicationId' component = {PublicationPage} />   /FaltaPage  */}

            <Route exact path='/' element = {<HomePage />} />
            <Route exact path='*' element = {<NotFoundPage />} /> //Error 404 page not found
        </Routes>
    </Layout>
    </Router>
  )
}
