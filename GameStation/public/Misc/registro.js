


document.getElementById('botonNoRegistrado').addEventListener("click", mostrarRegistrar);
document.getElementById('botonRegistrado2').addEventListener("click", mostrarIngresar);

function mostrarRegistrar(){

	document.getElementById('usuarioNoRegistrado').style.display="block";
	document.getElementById('usuarioRegistrado').style.display="none";

}

function mostrarIngresar(){
	document.getElementById('usuarioRegistrado').style.display="block";
	document.getElementById('usuarioNoRegistrado').style.display="none";
	
}