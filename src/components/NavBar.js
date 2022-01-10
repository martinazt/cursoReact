import React from "react";

export default function Navbar (){
    return (
        <>
       <nav class="navbar navbar-expand-lg navbar-dark ">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="index.html">HOME</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="pages/categoriaSalamandras.html" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    SALAMANDRAS
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a class="dropdown-item" href="pages/subCategoriaSalamandraLena.html">A LEÑA</a></li>
                    <li><a class="dropdown-item" href="pages/subCategoriaSalamandraGas.html">A GAS</a></li>
                    <li><a class="dropdown-item" href="pages/subCategoriaSalamandraPellets.html">A PELLETS</a></li>
                    <li><a class="dropdown-item" href="pages/categoriaSalamandras.html">VER TODO</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="pages/categoriaGuardaLena.html" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    GUARDA LEÑA Y LEÑA
                  </a>
                  
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    
                    <li><a class="dropdown-item" href="pages/subCategoriaGuardaLenaModerno.html">GURDA LEÑA MODERNO</a></li>
                    <li><a class="dropdown-item" href="pages/subCategoriaGuardaLenaRustico.html">GUARDA LEÑA RUSTICO</a></li>
                    <li><a class="dropdown-item" href="pages/categoriaGuardaLena.html">VER TODO</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="pages/categoriaAccesorios.html" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ACCESORIOS
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a class="dropdown-item" href="pages/SubCategoriaAccesoriosHerramientas.html">HERRAMIENTAS</a></li>
                    <li><a class="dropdown-item" href="pages/SubCategoriaAccesoriosLimpieza.html">LIMPIEZA</a></li>
                    <li><a class="dropdown-item" href="pages/SubCategoriaAccesoriosUtensillos.html">UTENSILLOS</a></li>
                    <li><a class="dropdown-item" href="pages/categoriaAccesorios.html">VER TODO</a></li>
                    
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="pages/categoriaConsejos.html">CONSEJOS</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="pages/categoriaContacto.html">CONTACTO</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </>
    )
}