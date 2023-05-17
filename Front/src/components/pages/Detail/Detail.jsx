import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import styles  from './Detail.module.css'

const Detail = () => {

	const [character, setCharacter] = useState([])

	const detailId = useParams().id

	const callApi = async () => {
		const data = await fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
		const dataJson = await data.json()
		setCharacter([...character, dataJson])
	}

	useEffect(() => {
		callApi()
	}, [detailId])

	

	return(
		<div className={styles.detailApp}>
				{console.log(character)}
				{character.map((elem, id) => (
					<div key={id} className={styles.container}>
						<div className={styles.containerInfo}>
							<h1>{elem.name} </h1>
							<h1>id # {detailId}</h1>
							<h2>STATUS | {elem.status}</h2>
							<h2>GENDER | {elem.gender}</h2>
							<h2>SPECIE | {elem.species}</h2>
							<h2>ORIGIN | {elem.origin.name}</h2>
							<h2>EPISODES | {elem.episode.length}</h2>
						</div>
						<div className={styles.imageContainer}>
							<img src={elem.image} alt={elem.name} />
						</div>
					</div>
				))}
				<div className={styles.burbujas}>
					<div className={styles.burbuja}></div>
					<div className={styles.burbuja}></div>
					<div className={styles.burbuja}></div>
					<div className={styles.burbuja}></div>
					<div className={styles.burbuja}></div>
					<div className={styles.burbuja}></div>
					<div className={styles.burbuja}></div>
					<div className={styles.burbuja}></div>
					<div className={styles.burbuja}></div>
					<div className={styles.burbuja}></div>
					<div className={styles.burbuja}></div>
					<div className={styles.burbuja}></div>
				</div>
		</div>
	)
}

export default Detail