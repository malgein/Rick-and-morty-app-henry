 import {useState, useEffect} from 'react'
 import { Link } from 'react-router-dom';
 import styles from './Card.module.css'
 import { addFavorite, removeFavorite } from '../../redux/actions';
 import { connect } from 'react-redux';


function Card({onClose, addFavorite, myFavorites, id, name, gender, image, species, removeFavorite}) {

	const [isFav, setIsFav] = useState(false)
	 
	const handleFavorite = () =>{
		if(isFav){
			setIsFav(false)
			removeFavorite(id)
		}	else{
			setIsFav(true)
			addFavorite({id, name, species, image, gender, onClose})
		}
		console.log(myFavorites)
	}

	useEffect(() => {
		myFavorites.forEach((fav) => {
			 if (fav.id === id) {
					setIsFav(true);
			 }
		});
 }, [myFavorites]);
	
  return (
      <div className={styles.containerCharacter}>
				<div className={styles.characterContainer}>
			   <Link to={`/detail/${id}`}><img src={image} alt={name} /></Link>
				 <div className={styles.idNumber}># {id}</div>
				 <div className={styles.name}>{name}</div>
				 {isFav ? (<button className={styles.markFavorite} onClick={handleFavorite}>❤️</button>) :( <button onClick={handleFavorite} className={styles.markFavorite}>🖤</button>)
				 }
				 <div onClick={() =>{
						onClose(id)
						
					}}  className={styles.markDelete}>❌</div>
				</div>
      </div>
  );
}

const mapDispatchToProps = dispatch =>{
	return{
		addFavorite: (character) => {
			dispatch(addFavorite(character))
		},
		removeFavorite: (id) =>{
			dispatch(removeFavorite(id))
		}
	}
}

const mapStateToProps = state => {
	return{
		myFavorites: state.myFavorites
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
