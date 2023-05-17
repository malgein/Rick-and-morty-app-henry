import {useState} from 'react'
import styles from './SearchBar.module.css'

export default function SearchBar({onSearch, characters}) {

	const [id, setId] = useState('')

	const handleChange = event => {
		setId(event.target.value)
	}

	const clickSearch = e => {
		e.preventDefault()
		if(id>0 && id<827){
					onSearch(id)
					setId('')
		} else{
			alert('Debes introducir un ID valido')
		}
		// console.log(characters)
	}

	const randomClickSearch = e =>{
		e.preventDefault()
		const random = Math.floor(Math.random() * 827)
		onSearch(random)
		// console.log(characters)
	}

   return (
    	<form className={styles.container} onSubmit={clickSearch}>
         <input className={styles.input} type='number' placeholder='# id' onChange={handleChange} value={id}/>
         <button className={styles.searchBtn} type='submit'><span>Agregar</span></button>
				 <button onClick={randomClickSearch} className={styles.randomBtn}>Random</button>
      </form>
   );
}
