import React from 'react'


export const Body = ({infoHeaderHome, CiudadanoEmpleador, capacitacionTrabajo, inscriptionCursosCursosCortos , videosInformativos, agenciasTerrOficinas}) => {


  return (
    <>
    
    {/* carrusel del header */}
     <div className="carrusel  ">
        <div className="carrusel-items">

          <div style={{backgroundImage:`url(${infoHeaderHome.op1.img})`  }} className="carrusel-item">
            <h1 className='parr-carrusel' >{infoHeaderHome.op1.titulo }</h1>   
            <p>{infoHeaderHome.op1.subtitulo}</p>
            <div className='tutorial-button'>

            <button>{infoHeaderHome.op1.boton}</button>

            </div>
            </div>
          <div style={{backgroundImage: `url(${infoHeaderHome.op2.img})`   }} className="carrusel-item">
            <h1 className='parr-carrusel' >{infoHeaderHome.op2.titulo }</h1>   

            <p>{infoHeaderHome.op2.subtitulo}</p>
            <div className='tutorial-button'>

            <button>{infoHeaderHome.op2.boton}</button>
            </div>
            </div>
          <div style={{backgroundImage: `url(${infoHeaderHome.op3.img})`  }} className="carrusel-item">
            <h1 className='parr-carrusel' >{infoHeaderHome.op3.titulo }</h1>   
            <p>{infoHeaderHome.op3.subtitulo}</p>
            <div className='tutorial-button'>

            <button>{infoHeaderHome.op3.boton}</button>
            </div>

            </div>
        </div>

       

    </div>
    {/* // seccion de soy cuidadano, soy empleador */}
    <div className='seccionSoyCiudadano'>
      <h3 style={{borderBottom: " 7px solid #004f90", display: "grid", justifyItems: "center", width: "100%", }}>{CiudadanoEmpleador.sobretitulos.op1}</h3>
      <h3 style={{borderBottom: " 7px solid #dcddde", display: "grid", justifyItems: "center", width: "100%", }}>{CiudadanoEmpleador.sobretitulos.op2}</h3>
    </div>
    <section className="grid-section">
        <div className="grid-item">
          <img src={CiudadanoEmpleador.op1.img} alt="" />  
        <h3>{CiudadanoEmpleador.op1.titulo}</h3>
            <h5>{CiudadanoEmpleador.op1.sub}</h5>
        </div>
        <div className="grid-item">
          <img src={CiudadanoEmpleador.op2.img} alt="" />  
        <h3>{CiudadanoEmpleador.op2.titulo}</h3>
            <h5>{CiudadanoEmpleador.op2.sub}</h5>
        </div>
        <div className="grid-item">
          <img src={CiudadanoEmpleador.op3.img} alt="" />  
        <h3>{CiudadanoEmpleador.op3.titulo}</h3>
            <h5>{CiudadanoEmpleador.op3.sub}</h5>
        </div>
        <div className="grid-item">
          <img src={CiudadanoEmpleador.op4.img} alt="" />  
            <h3>{CiudadanoEmpleador.op4.titulo}</h3>
            <h5>{CiudadanoEmpleador.op4.sub}</h5>
        </div>
    </section>

  {/* curso capacitacion para el trabajo */}
    {/* imagen de chica con lentes  */}

    <section style={{backgroundImage: `url(${capacitacionTrabajo.img})`}} className="grid-section-bg">
      
    </section>

    {/* informacion de cursos en otras entidades */}
    <hr />
    <section  className="grid-section2">
        <div className="grid-moreinfoCursos">
            
           <h3>{inscriptionCursosCursosCortos.op1}</h3> 
            </div>
        <div className="grid-moreinfoCursos">
           <h3>{inscriptionCursosCursosCortos.op2}</h3> 
            </div>
    </section>
    {/* videos informativos */}
    <p style={{fontSize: "2rem",  color: "#000", maxWidth: "983px", margin: "auto"}}>Videos informativos</p>
    <section style={{}} className="grid-section2">
        <div className='box-images'>

        <div style={{ backgroundImage: `url(${videosInformativos.img1})`}} className="grid-moreinfoimg">
            <p>{videosInformativos.op1}</p>
            <b>Ver Ahora</b>
        </div>
        </div>
        <div className='box-images'>

        <div style={{ backgroundImage: `url(${videosInformativos.img2})`}} className="grid-moreinfoimg">
            <p>{videosInformativos.op2}</p>
            <b>Ver Ahora</b>
        </div>
        </div>
    </section>
    {/* agencias territoriales */}
    <section style={{}} className="grid-section2">
        <div className="grid-moreinfo">
            <img style={{height: "3rem", width: "3rem"}} src={agenciasTerrOficinas.img1} alt="" />
           <h2>{agenciasTerrOficinas.op1}</h2> 
            </div>
        <div className="grid-moreinfo">
            <img style={{height: "3rem", width: "3rem"}} src={agenciasTerrOficinas.img2} alt="" />
            
            <h2>{agenciasTerrOficinas.op1}</h2> 
            </div>
    </section>
    <footer className="main-footer">
    <div className="footer-left">
    <div className="social-icons">
      <a href="#"><img src="facebook-logo.png" alt="Facebook"/></a>
      <a href="#"><img src="instagram-logo.png" alt="Instagram"/></a>
      <a href="#"><img src="twitter-logo.png" alt="Twitter"/></a>
      <a href="#"><img src="youtube-logo.png" alt="YouTube"/></a>
      <a href="#"><img src="linkedin-logo.png" alt="LinkedIn"/></a>
    </div>
  </div>
  <div className="footer-right">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula lectus vitae lorem efficitur, a accumsan velit tristique.</p>
  </div>
</footer>

    </>
    )
    }
