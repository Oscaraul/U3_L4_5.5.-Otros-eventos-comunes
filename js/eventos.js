function cambiarRadioButtons(){
  var estadoRB = document.getElementById('activar_rb').checked;
  if(estadoRB){
    var estado="true"
    document.getElementById('animales').disabled=false;
    document.getElementById('postres').disabled=false;
    document.getElementById('musica').disabled=false;
  }
  else {
    document.getElementById('animales').disabled=true;
    document.getElementById('postres').disabled=true;
    document.getElementById('musica').disabled=true;
  }
}

function cargarPagina(){
  alert("Se ha cargado toda la página.");
}

document.getElementsByTagName('body')[0].onload=cargarPagina;
