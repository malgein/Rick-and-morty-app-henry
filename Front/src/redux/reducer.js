import { ADD_FAV, REMOVE_FAV, FILTER, ORDER} from "./actions"

export const initialState={
  myFavorites: [],
	allCharacters: []
}

const rootReducer = (state = initialState, {type, payload}) =>{
	switch(type){
		// case ADD_FAV:
		// 	return{
		// 		...state, allCharacters: [...state.allCharacters, payload],
		// 		myFavorites: [...state.allCharacters, payload] 
		// 	}
		case ADD_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };
		// case REMOVE_FAV:
		// 	const filtered = state.myFavorites.filter(character => character.id !== payload)
		// 	return{
		// 		...state, myFavorites: filtered
		// 	}
		case REMOVE_FAV:
      return { ...state, myFavorites: payload };
			case FILTER:
				const charactersFiltered = [...state.allCharacters].filter(elem => elem.gender=== payload)
				return{
					...state, myFavorites: charactersFiltered
				}
				case ORDER:
					const charactersSorted = [...state.allCharacters].sort((a,b) =>{
						if(payload ==='Ascendente'){
							if(a.id > b.id) return 1
							else return -1
						}	else if(a.id < b.id) return 1
							else return -1
					})
					return{
						...state, myFavorites: charactersSorted
					}
		default:
			return {...state}
	}
}

export default rootReducer