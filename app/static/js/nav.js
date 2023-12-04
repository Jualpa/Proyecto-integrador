document.getElementById("nav").innerHTML = `

<div class="menu_logo">
    <img src="../static/Imagenes/Logo.png" alt="" class="logo_ppl">
    <h2 class="menu_titulo">Universo Infinito: Explorando el Cosmos</h2>
</div>
<input type="checkbox" id="ver_menu_hamb" class="ver_menu_hamb">
<ul class="menu_link">
    <li class="menu_items">
        <a href="index.html" class="menu_href">Inicio</a>
    </li>
    <li class="menu_items">
        <a href="./cursos.html" class="menu_href">Cursos</a>
    </li>
    <li class="menu_items">
        <a href="recursos.html" class="menu_href">Recursos</a>
    </li>
    <li class="menu_items">
        <a href="./contacto.html" class="menu_href">Contacto</a>
    </li>
    <li class="menu_items ">
        <a class="ingreso" href="./curso_registro.html" class="menu_href">INGRESAR</a>
    </li>
</ul>
<div class="menu_hamb">
    <label for="ver_menu_hamb">
        <i class="fa-solid fa-bars av_img_hamb"></i>
    </label>
</div>
<div class="menu_cerrar">
    <label for="ver_menu_hamb">
        <i class="fa-solid fa-xmark av_img_hamb"></i>
    </label>
</div>


`
