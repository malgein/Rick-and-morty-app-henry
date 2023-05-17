export const validations = input => {

	const regexEmail =  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

	const errors = {}

	if(!regexEmail.test(input.email)){
		errors.email = 'Debe ser un correo electronico valido'
	}

	if(!input.email){
		errors.email = 'El nombre de usuario no debe estar vacio'
	}

	if(input.email.length > 35){
		errors.email = 'No puedes tener mas de 35 caracteres'
	}

	if(input.password.length<6 || input.password.length > 10){
		errors.password = 'La contraseña debe tener entre 6 y 10 caracteres'
	}

	if(!/\d+/.test(input.password)){
		errors.password = 'La contraseña debe tener al menos un numero'
	}
	return errors
}