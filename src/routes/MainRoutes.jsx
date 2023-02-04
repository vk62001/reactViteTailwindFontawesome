import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage, AboutPage } from '../pages/'
import { Navbar } from '../components/Navbar'

export const MainRoutes = () => {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="about" element={<AboutPage />} />
    </Routes>
    </>
  )
}
