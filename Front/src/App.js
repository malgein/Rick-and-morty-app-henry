import {useState, useEffect} from 'react'
import styles from './App.module.css';
import Nav from './components/Nav/Nav';
import Form from './components/pages/Form/Form';
import { Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import About from './components/pages/About/About';
import Home from './components/pages/Home/Home'
import Detail from './components/pages/Detail/Detail.jsx'
import Favorites from './components/pages/Favorites/Favorites.jsx'
import Error404 from './components/pages/Error404/Error404';
import axios from 'axios'



function App() {

	const navigate = useNavigate()

	const location = useLocation().pathname

	const [characters, setCharacters] = useState([])

	const [access, setAccess] = useState(true)

	const EMAIL = 'malgein17@gmail.com'

	const PASSWORD = 'xxxxxx1'

	// const login = userData => {
	// 	if(EMAIL===userData.email && PASSWORD===userData.password){
	// 		setAccess(true)
	// 		navigate('/home')
	// 	} else if(EMAIL!==userData.email && PASSWORD!==userData.password){
	// 		alert('Los datos introducidos son incorrectos')
	// 	}	else if(EMAIL!==userData.email){
	// 		alert('El email que introduciste es incorrecto')
	// 	}	else if(PASSWORD!==userData.password){
	// 		alert('El password introducido es incorrecto')
	// 	}
	// }

	function login(userData) {
		const { email, password } = userData;
		console.log(email, password)
		const URL = 'http://localhost:3001/rickandmorty/login/';
		axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
			 const { access } = data;
			 setAccess(data);
			 access && navigate('/home');
		});
 }

	const logOut = () => {
		setAccess(false)
		navigate('/')
	}

	const onSearch = async(id) => {
		//antes del backend estaba esta linea:
		// const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
		const data = await fetch(`http://localhost:3001/rickandmorty/character/${id}`)
		const dataJson = await data.json()
		
		let characterFoundIt = false

		characters.forEach(character => {
			if(character.id=== dataJson.id) characterFoundIt = true
		})
		
		if(!characterFoundIt){
			setCharacters([...characters, dataJson])
		}	else{
			alert('Ese personaje ya se encuentra en la Home')
		}
		
		console.log(characters)
	}
  
	const onClose = id =>{
		const result = characters.filter(character => character.id!== id)
		setCharacters(result)
		
	}
	
	//*Importante la funcion del useEffect es hacer que no se puedan
	//*acceder a otros paths de la pagina sin hacer el login correspondiente
	
	useEffect(() =>{
		!access && navigate('/')
		
	}, [access])



	let previusTitle = document.title 

	window.addEventListener('blur', () =>{
		previusTitle = document.title
		document.title = 'No te vayas 😱, vuelve'
	})

	window.addEventListener('focus', () => {
		document.title = previusTitle
	})
  return (
      <div className={styles.App}>
				{location!=='/' ?(<Nav onSearch={onSearch} characters={characters} logOut={logOut}/>) :(<></>)  }
				<Routes>
					<Route path='/' element={<Form login={login} />} />
					<Route path='/home' element={<Home onClose={onClose} characters={characters}/>} />
					<Route path='/about' element={<About />} />
					<Route path='/detail/:id' element={<Detail />} />
					<Route path='/favorites' element={<Favorites/>}></Route>
					<Route path='*' element={<Error404 />}></Route>
				</Routes>
      </div>
  );
}

export default App;
