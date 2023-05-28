const blueTheme = document.getElementById('blue');
const blackTheme = document.getElementById('black');
const whiteTheme = document.getElementById('white');

// Obtener el último tema seleccionado del localStorage
const savedTheme = localStorage.getItem('theme');

// Establecer el último tema seleccionado si existe
if (savedTheme) {
    document.body.classList.add(savedTheme);
    const savedBorder = localStorage.getItem('border');
    document.getElementById(savedTheme).style.border = savedBorder ? savedBorder : "3px solid gray";
    disableThemes(document.getElementById(savedTheme));
}

blueTheme.addEventListener('click', ()=>{
    document.body.classList.add('blue');
    blueTheme.style.border = "3px solid gray";
    blackTheme.style.border = "3px solid white";
    whiteTheme.style.border = "3px solid white";
    document.body.classList.remove('black', 'white');
    localStorage.setItem('theme', 'blue');
    localStorage.setItem('border', blueTheme.style.border);
    disableThemes(blueTheme);
});

blackTheme.addEventListener('click', ()=>{
    document.body.classList.add('black');
    blackTheme.style.border = "3px solid gray";
    blueTheme.style.border = "3px solid white";
    whiteTheme.style.border = "3px solid white";
    document.body.classList.remove('blue', 'white');
    localStorage.setItem('theme', 'black');
    localStorage.setItem('border', blackTheme.style.border);
    disableThemes(blackTheme);
});

whiteTheme.addEventListener('click', ()=>{
    document.body.classList.add('white');
    whiteTheme.style.border = "3px solid gray";
    blackTheme.style.border = "3px solid white";
    blueTheme.style.border = "3px solid white";
    document.body.classList.remove('blue', 'black');
    localStorage.setItem('theme', 'white');
    localStorage.setItem('border', whiteTheme.style.border);
    disableThemes(whiteTheme);
});

// Función para deshabilitar otros botones de tema
function disableThemes(activeTheme) {
    const themes = [blueTheme, blackTheme, whiteTheme];
    themes.forEach(theme => {
        if(theme !== activeTheme) {
            theme.disabled = true;
        } else {
            theme.disabled = false;
        }
    });
}
