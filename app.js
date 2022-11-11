const contenedorQR = document.getElementById('contenedorQR');
const formulario = document.getElementById('formulario');
const QR = new QRCode(contenedorQR);
let confirmar = document.getElementById('confirmador')

let Carlos = ["Carlos", 19 , 25229, "https://github.com/IamCarloss"]
let prueba = 25229

if (prueba == Carlos[0,2]) {
	console.log(Carlos[0,3]);
} else {
	console.log("Esa no es la matricula");
}


	formulario.addEventListener('submit', (e) => {
		if (formulario.link.value == Carlos[0,2]) {
			e.preventDefault();
			QR.makeCode(Carlos[0,3]);
			console.log(Carlos[0,3].length);
			console.log(Carlos[0,3]);
			confirmar.innerHTML = "Tome su código QR :)"	
			console.log(formulario.link.value);
		} else {
			e.preventDefault();
			confirmar.innerHTML = "No es su matricula"	
		}
	});

	/*formulario.addEventListener('submit', (e) => {
		if (formulario.link.value.length <=20) {
			e.preventDefault();
			confirmar.innerHTML = "No es un código QR"
		} else {
			e.preventDefault();
			QR.makeCode(formulario.link.value);
			console.log(formulario.link.value);
			console.log(formulario.link.value.length);
			confirmar.innerHTML = "Tome su código QR :)"	
		}
	});*/

