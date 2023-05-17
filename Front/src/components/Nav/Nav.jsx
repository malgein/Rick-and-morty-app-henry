import React from 'react'
import styles from  './Nav.module.css'
import SeearchBar from '../Searchbar/SearchBar'
import { Link } from 'react-router-dom'

const Nav = ({onSearch, characters, logOut}) => {
	return (
		<nav className={styles.container}>
			<Link to='/home'>
				<button className={styles.btnHome}>
					Home
				</button>
			</Link> 
			<Link to='/favorites'>
				<button className={styles.btnFavorites}>Favorites</button>
		</Link>
			<Link to='/about'>
				<button className={styles.btnAbout}>
					About
				</button>
			</Link>
			<div className={styles.searchBar}>
				<SeearchBar onSearch={onSearch} characters={characters}/>
			</div>
			<button onClick={logOut} className={styles.btnLogOut}>Log Out</button>
		</nav>
	)
}

export default Nav