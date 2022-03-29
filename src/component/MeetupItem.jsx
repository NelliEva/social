import {Link} from 'react-router-dom';

import {useContext} from 'react';
import FavoritesContext from '../store/favorites-context';


function MeetupItem (props){
  
  const favoritesCtx= useContext(FavoritesContext);

   const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
       

  function toggleFavoritesStatus(){
       if (itemIsFavorite) {
       	 favoritesCtx.removeFavorite(props.id);
       } else{
       	 favoritesCtx.addFavorite({
            id: props.id,
            image: props.image,
            city: props.city,
            discription: props.description
       	 });
       }
  }

	return(
		<div>
		    <div className='meetupBox'>
		      <Link className='a' to='/'><img src={props.image} alt=''/></Link>
		      <div className='discription'>
		        <div className='title'>
		         <h3>{props.city}</h3>
		         <div className='heart' onClick={toggleFavoritesStatus}>{itemIsFavorite? "\u2665" : "\u2661" }</div>	
		        </div>	
		        <p>{props.description}</p>
		      </div>
		    </div>	
        </div>
 )
}
export default MeetupItem; 