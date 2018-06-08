var infoUsuarios = {};
var Usuarios = [];
var datos = localStorage.getItem('Usuarios');
var passwordOK = false;



document.getElementById('botonNoRegistrado').addEventListener("click", mostrarRegistrar);
document.getElementById('botonRegistrado2').addEventListener("click", mostrarIngresar);
document.getElementById('registrar').addEventListener("click", guardarInformacion);


function mostrarRegistrar(){

	document.getElementById('usuarioNoRegistrado').style.display="block";
	document.getElementById('usuarioRegistrado').style.display="none";

}

function mostrarIngresar(){
	document.getElementById('usuarioRegistrado').style.display="block";
	document.getElementById('usuarioNoRegistrado').style.display="none";
	
}

function chequearCont(){
	var cont1 = document.getElementById('password1').value;
	var cont2 = document.getElementById('password2').value;

	if (cont1 != cont2) {
		alert("Las contraseñas deben ser iguales!");
	}
	else{
		passwordOK = true;
	}

}

function guardarInformacion(){

	chequearCont();

	if (passwordOK == true) {

		var emailUsuarios = document.getElementById('email').value;
		var passwordUsuarios = document.getElementById('password').value;
	    infoUsuarios = {user: email, pass: password}
	    console.log(infoUsuarios);

	    if(datos==null){
	        Usuarios = [];
	    }else{
	        Usuarios = JSON.parse(datos).Usuarios; 
	    }
	    console.log(datos);
	    Usuarios.push(infoUsuarios);
	   

	    let JASON = {'Usuarios':Usuarios,'total':Usuarios.length}
	    console.log(JASON); //Jason cumple, Jason para presidente

	    let informacion = JSON.stringify(JASON);
	    
	    localStorage.setItem('Usuarios', informacion);

	    console.log(Usuarios);
	}
    

}

