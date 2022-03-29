import {useRef} from 'react';
import {useNavigate} from 'react-router-dom';

function Add() {
    
    const navigate= useNavigate()
	const imageRef= useRef();
	const cityRef= useRef();
	const discriptionRef= useRef();

	function meetupHandeler(event){

		event.preventDefault();

		const enteredImage= imageRef.current.value;
		const enteredCity= cityRef.current.value;
		const enteredDiscription= discriptionRef.current.value;

		const NewMeetup={
			image: enteredImage,
			city: enteredCity,
			discription: enteredDiscription
 
		};
		fetch('https://meetup-321b5-default-rtdb.firebaseio.com/meetup.json',
             {
             	method: 'POST',
                body: JSON.stringify(NewMeetup),
                headers:{
                	'Content-Type': 'application/json'
                } 

             }
			).then(()=>{
                navigate('/social');
                 }
             	)

	}

	return(
		<div>
			<form className='form' onSubmit={meetupHandeler}>
               <h3>Add New Event</h3>
				<label htmlFor='image'>City's Image</label>
				 <input type='url' id='image' required ref={imageRef}></input>
				<label htmlFor='city'>City</label>
				 <input id='city' type='text' required ref={cityRef}></input>
				<label htmlFor='discription'>Event</label>
				 <textarea id='discription' type='text' rows='15' required maxlength="200" ref={discriptionRef}></textarea>
				 <input className='btn'type='submit' value='Submit'></input>
			</form>

		</div>
		)
}
export default Add;