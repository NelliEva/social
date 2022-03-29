import {useContext} from 'react';
import FavoritesContext from '../../store/favorites-context';
import MeetupList from '../Mainmenu/MeetupList';

function Favorite() {

	const favoritesCtx = useContext(FavoritesContext);
	return(
		<div className='favorite'>
		<h4>Favorite Meetups: <span className='counter'>{favoritesCtx.totalFavorites}</span></h4>
		<MeetupList  meetups={favoritesCtx.favorites}/>
		</div>
		)
}

export default Favorite;