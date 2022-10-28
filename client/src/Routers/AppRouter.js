/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import LoginPage from '../Pages/LoginPage'
import NotFoundPage from '../Pages/NotFoundPage'
import PerfilPage from '../Pages/PerfilPage'
import RegisterPage from '../Pages/RegisterPage'
import SearchPage from '../Pages/SearchPage'

export default function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route exact path='/' element = {<HomePage />} />
            <Route exact path='/login' element = {<LoginPage />} />
            <Route exact path='/register' element = {<RegisterPage />} />
            <Route exact path='/perfil' element = {<PerfilPage />} />
            <Route exact path='/search' element = {<SearchPage />} />
            {/*<Route exact path='/publication/:publicationId' component = {PublicationPage} />   /FaltaPage  */} /
            //Faltan Rutas

            <Route exact path='*' element = {<NotFoundPage />} /> //Error 404 page not found
        </Routes>
    </Router>
  )
}
