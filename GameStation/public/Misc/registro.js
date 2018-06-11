var infoUsuarios = {};
var Usuarios = [];
var datos = localStorage.getItem('Usuarios');
var passwordOK = false;
var emailOK = false;


document.getElementById('botonNoRegistrado').addEventListener("click", mostrarRegistrar);
document.getElementById('botonRegistrado').addEventListener("click", mostrarIngresar);
document.getElementById('registrar').addEventListener("click", guardarInformacion);
document.getElementById('ingresar').addEventListener("click", comprobarInformacion);


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
		var passwordUsuarios = document.getElementById('password1').value;
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

	    //location.reload();
	}
//localStorage.clear();

}

function comprobarInformacion (){

	//Usuarios = JSON.parse(datos).Usuarios; 

	console.log(Usuarios);

	userCheck();

	passwordCheck();


	if (emailOK && passwordOK) {
		alert("BIENVENIDO!");
	}
}

function userCheck (){
	Usuarios = JSON.parse(datos).Usuarios; 
	var mailIngresado = document.getElementById('mailRegistrado').value;
	//var passwordIngresada = document.getElementById('password').value;

	var i=0;
	

	while(i<Usuarios.length && !emailOK){

		if (Usuarios[i].user == mailIngresado) {
			emailOK = true;
		}else{
			i++;
		}

	}

	if(!emailOK){
		alert("Estás seguro que estás registrado?");
	}

}

function passwordCheck (){
	Usuarios = JSON.parse(datos).Usuarios; 
	var passwordIngresada = document.getElementById('password').value;

	var i = 0;

	while(i<Usuarios.length && !passwordOK){
		if (Usuarios[i].pass == passwordIngresada) {
			passwordOK = true;
		}else{
			i++;
		}

	}

	if (!passwordOK) {
		alert("La contraseña ingresada no es válida");
	}



}