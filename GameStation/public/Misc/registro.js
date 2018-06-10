var infoUsuarios = {};
var Usuarios = [];
var datos = localStorage.getItem('Usuarios');
var passwordOK = false;
var emailOK = false;



document.getElementById('botonNoRegistrado').addEventListener("click", mostrarRegistrar);
document.getElementById('botonRegistrado').addEventListener("click", mostrarIngresar);
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
	}else if (cont1 == "" || cont2 == "") {
		alert("Debe tener una contraseña para poder registrarse!")
	}
	else{
		passwordOK = true;
	}

}

function chequearEmail(){
	var mail = document.getElementById('email').value;
	var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

	if (emailRegex.test(mail)) {
		//console.log("EMAIL "+ mail);
		if (mail == "") {
			alert("Debe tener un e-mail para registrarse!");
		}else{
			emailOK = true;
		}
	}else{
		alert("Eso no es un mail!");
	}

}

function guardarInformacion(){

	chequearEmail();
	chequearCont();


	if (passwordOK == true && emailOK == true) {

		var emailUsuarios = document.getElementById('email').value;
		var passwordUsuarios = document.getElementById('password').value;
	    infoUsuarios = {user: emailUsuarios, pass: passwordUsuarios}
	    //console.log(infoUsuarios);

	    if(datos==null){
	        Usuarios = [];
	    }else{
	        Usuarios = JSON.parse(datos).Usuarios; 
	    }
	    Usuarios.push(infoUsuarios);
	   

	    let JASON = {'Usuarios':Usuarios,'total':Usuarios.length}
	    //console.log(JASON);

	    let informacion = JSON.stringify(JASON);
	    
	    localStorage.setItem('Usuarios', informacion);

	    console.log(Usuarios);
	}
//localStorage.clear();

}

