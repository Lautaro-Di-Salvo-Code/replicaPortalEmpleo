import {NavLink} from "react-router-dom"


export const HoleHeader = ({header, Navbar}) => {
  return (
    // header con logo y titulo
    <header>
      <article className="main-header">
    <div className="left-element">
      <img className="logoimg" src={header.logo} alt="" />
    </div>
    <div className="right-element">
      <h3 style={{color: "white"}}>{header.titulo}</h3>
    </div>
  </article>

  <article   className="lightblueNavbar">


    <nav>
      {/* barra de navecacion */}
   <div className="nav-links">
       <NavLink className={({ isActive}) => isActive ? "LinksNav" : null } to="/Home">{Navbar.op1}</NavLink>
       <NavLink className={({ isActive}) => isActive ? "LinksNav" : null } to="/2"> {Navbar.op2}</NavLink>

       <a href="https://melodic-starlight-6a26e2.netlify.app">Of Empleo y Agencias Territoriales</a>

       <NavLink className={({ isActive}) => isActive ? "LinksNav" : null } to=""> {Navbar.op4}</NavLink>
   </div>
   
   {/* todo el boton de ingresar con animacion */}
   <button className="c-button c-button--gooey"> Ingresar
  <div className="c-button__blobs">
  <div></div>
  <div></div>
  <div></div>
  </div>
</button>

  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style= {{display: "block",  height: "0",width: "0"}}>
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
      <feBlend in="SourceGraphic" in2="goo"></feBlend>
    </filter>
  </defs>
</svg>
   
   
  
    </nav>

  </article>
  </header>
  )
}