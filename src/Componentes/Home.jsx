import React from 'react'
import { HoleHeader } from './HomeHijos/HoleHeadear.jsx'
import { ObjetoG } from '../ObjetoGeneral.jsx'
import {BrowserRouter,Routes, Route, Navigate } from "react-router-dom"
import { Body } from './HomeHijos/Body.jsx'
import { InstitucionesDeFormacion } from './InstitucionesDeFormacion.jsx'
import { Footer } from './Fotter.jsx'


export const Home = () => {

  

     const {
      header ,
      Navbar ,
      infoHeaderHome,
      CiudadanoEmpleador,
      capacitacionTrabajo ,
      inscriptionCursosCursosCortos,
      videosInformativos,
      agenciasTerrOficinas,
      footer
    } = ObjetoG()

  return (
   <>
  <BrowserRouter>
    <HoleHeader header={header} Navbar={Navbar}/>

    <Routes>
    <Route  path="/" element={<Body
      infoHeaderHome={infoHeaderHome}
      CiudadanoEmpleador={CiudadanoEmpleador}
      capacitacionTrabajo={capacitacionTrabajo}
      inscriptionCursosCursosCortos={inscriptionCursosCursosCortos}
      videosInformativos={videosInformativos}
      agenciasTerrOficinas={agenciasTerrOficinas}
      footer={footer}
      />}/>
      <Route  path='/Instituciones de Formacion' element={<InstitucionesDeFormacion/>  }/>
      <Route  path='/Contacto' element={<h1>Contacto</h1>   }/>
      <Route  path='*' element={<Navigate to="/"/>  }/>
    </Routes>
      <Footer footer={footer}/>
  </BrowserRouter>
   </>
  )
}
