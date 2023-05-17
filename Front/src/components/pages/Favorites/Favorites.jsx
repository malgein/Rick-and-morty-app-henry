import styles from './Favorites.module.css'
import {useState} from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import { filterCards, orderCards } from '../../../redux/actions';
import { useDispatch } from 'react-redux';

const Favorites = ({myFavorites}) => {

	const dispatch = useDispatch() 

	const [aux, setAux] = useState(false)

	const handleOrder = e =>{
		dispatch(orderCards(e.target.value))
		setAux(!aux)
	}

	const handleFilter = e =>{
		dispatch(filterCards(e.target.value))
	}

	console.log(myFavorites)
  return(
		<div className={styles.container}>
			<div className={styles.clasification}>
				<select onChange={handleOrder}>
					<option value='Ascendente'>Ascendente</option>
					<option value='Descendente'>Descendente</option>
				</select>
				<select onChange={handleFilter}>
					<option value='Male'>Male</option>
					<option value='Female'>Female</option>
					<option value='Genderless'>Genderless</option>
					<option value='unknow'>Unknow</option>
				</select>
			</div>
			<div className={styles.containerCardFav}>
				{myFavorites.map((fav, index) => (
					<div className={styles.containerFav} key={index}>
						<Link to={`/detail/${fav.id}`}>{<img src={fav.image} alt={fav.name}/>}</Link>
						<div className={styles.idNumber}># {fav.id}</div>
						<div className={styles.name}>{fav.name}</div>
						<div className={styles.markFavorite}>❤️</div>
					</div>
				))
				}
			</div>
		</div>
	)
}

const mapStateToProps = state =>{
	return{
		myFavorites: state.myFavorites
	}
}

export default connect(mapStateToProps, null)(Favorites)


