
import {Link} from 'react-router-dom';
import {useState} from 'react';


function Nav (){
    
    const [singState, setSignState] = useState(false)
	function onSubmit() {
       setSignState(true)
	}

	return(
		<div >
		 <nav >
		  <ul>
		  	<li><Link className='navLink' to='/social'>All Meetup</Link></li>
		  	<li><Link className='navLink' to='/favorite'>Favorites</Link></li>
		  	{ singState ? 
		  	<li><Link className='navLink' to='/signin'>SignIn</Link></li>
		  	:<li><Link className='navLink' to='/'>Signout</Link></li>
		    }
		  	<li><Link className='navLink' to='/add'>Add Meetup</Link></li>
		  </ul>
		 </nav>
			
		</div>
		)
}

export default Nav;