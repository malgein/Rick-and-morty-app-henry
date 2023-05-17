import styles from './Form.module.css'
// import imageRickAndMorty from './Rick-and-Morty-form.jpg'
import { validations } from './validations'
import {useState} from 'react'

const Form = ({login}) => {  

	const [userData, setUserData] = useState({email: '', password:''})

	const [errors, setErrors] = useState({email: '', password:''})

	const [string, setString] = useState(`perspective(500px)
	scale(1)
	rotateX(6)
	rotateY(10)`)

	const handleChange = event => {
		setUserData({...userData, [event.target.name]: event.target.value})

		setErrors(validations({...userData, [event.target.name]: event.target.value}))		
	}

	const handleSubmit = event => {
		event.preventDefault()
		login(userData)
	}

// const el = document.getElementById('poster')
	// const height = el.clientY	

	
	let style = {
		image: {
			marginTop: '50px',
			marginBottom: '20px',
			height: '300px',
    	width: '400px',
			transition: 'box-shadow .1s transform',
			background: 'url(https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg) no-repeat center',
			backgroundSize: 'cover',
    	borderRadius: '15px',
			transform: string
		},
		container: {
			backgroundColor: '#000000',
			color: 'white',
			backgroundImage: 'radial-gradient(#405746 0.75000000000000003px, #000000 0.75000000000000003px)',
			backgroundSize: '100px 100px',
			display: 'flex',
    	flexDirection: 'column',
    	justifyContent: 'start',
    	alignItems: 'center',
			height: '700px',
			boxShadow: '0 5px 10px -5px rgb(255 255 255)'
		},
		input: {
			width: '25%',
			padding: '10px 10px',
			background: 'none',
			color: '#706c6c',
			fontSize: '1rem',
			border: 'none',
			backgroundColor: '#e6dede',
			outline: 'none',
			borderBottom: '1px solid #000',
			borderRadius: '20px'
		},
		warning:{
			width: '25%',
			background: 'none',
			padding: '10px 10px',
			color: '#706c6c',
			fontSize: '1rem',
			border: 'solid 2px red',
			backgroundColor: 'white',
			outline: 'none',
			borderBottom: '1px solid #000',
			borderRadius: '20px',
		},
		label:{
			cursor: 'pointer',
			// position: 'absolute',
			// top: '0',
			// left: '5px',
			transform: 'translateY(10px)',
			transition: 'transform .5s, color .3s',
			marginBottom: '20px',
		},
		btn:{
			backgroundColor: '#099c48',
  		color: '#fff',
  		border: 'none',
  		padding: '10px 20px',
  		borderRadius: '4px',
  		fontSize: '16px',
  		cursor: 'pointer',
		},
		danger:{
			color: 'red',
		}
		
	}


	const handleMouseMove = evt => {
		// console.log(evt)

		const height = evt.clientX
		const width =evt.clientY
		const {movementX, movementY} = evt

		const yRotation = (
			(movementX - width / 2) / width
		) * 32

		const xRotation = (
			(movementY - height/ 2) / height
		) * 32

			setString(`
			perspective(500px)
			scale(1.0)
			rotateX(${xRotation}deg)
			rotateY(${yRotation}deg)
		`)
		
		// console.log(styles.image)
	}

	const resetString = () => {
		setString(`
		perspective(500px)
		scale(1)
		rotateX(6)
		rotateY(10)
		`)
	}
	



	
 
	return(
		<form style={style.container} onSubmit={handleSubmit}>
			<div style={style.image} onMouseMove={handleMouseMove} ></div>
			<label style={style.label}>EMAIL</label>
			<input value={userData.email} placeholder='malgein17@mail.com' name='email' onChange={handleChange} className={errors.email ? styles.warning: styles.input} required/>
			<p style={style.danger}>{errors.email}</p>
			<label style={style.label}>PASSWORD</label>
			<input type='password' value={userData.password} name='password' placeholder='XXXXXX1' onChange={handleChange} className={errors.password ? styles.warning : styles.input} required />
			<p style={style.danger}>{errors.password}</p>
			<button type='submit' style={style.btn}>Submit</button>
		</form>
	)
}

export default Form