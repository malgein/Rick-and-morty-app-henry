import styles from './Home.module.css';
import Cards from '../../Cards/Cards'


const Home = ({characters, onClose}) => {
	return(
		<div className={styles.App}>
			<h1 className={styles.title}>Rick and Morty App</h1>
			<Cards characters={characters} onClose={onClose} />
			
		</div>
	)
}

export default Home