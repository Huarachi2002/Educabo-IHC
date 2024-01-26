import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../educabol/pages/HomePage'
import { RegistroPage } from '../educabol/pages/RegistroPage'

export const AppRoute = () => {
  return (
    <Routes>
        <Route path="/*" element={<Navigate to='/'/>}/>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/registro' element={<RegistroPage/>}/>
    </Routes>
  )
}
