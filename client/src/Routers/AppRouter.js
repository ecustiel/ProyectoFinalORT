/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from '../Components/Layouts/Layout'
import { getEnvVariables } from '../Helpers/getEnvVariables'
import HomePage from '../Pages/HomePage'
import LoginPage from '../Pages/LoginPage'
import NotFoundPage from '../Pages/NotFoundPage'
import PerfilPage from '../Pages/PerfilPage'
import RegisterPage from '../Pages/RegisterPage'
import SearchPage from '../Pages/SearchPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './Publicroute'

export default function AppRouter() {

  console.log(getEnvVariables());
  return (
    <Router>
    <Layout>
      
        <Routes>
            <Route exact path='/' element = {<PublicRoute><HomePage /></PublicRoute>} />
            <Route exact path='/login' element = {<PublicRoute><LoginPage /></PublicRoute>} />
            <Route exact path='/register' element = {<PublicRoute><RegisterPage /></PublicRoute>} />
            <Route exact path='/perfil' element = {<PrivateRoute><PerfilPage /></PrivateRoute>} />
            <Route exact path='/search' element = {<PrivateRoute><SearchPage /></PrivateRoute>} />
            {/*<Route exact path='/publication/:publicationId' component = {PublicationPage} />   /FaltaPage  */} /
            //Faltan Rutas

            <Route exact path='*' element = {<NotFoundPage />} /> //Error 404 page not found
        </Routes>
    </Layout>
    </Router>
  )
}
