import {useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';


function Signin(props) {
    
    const navigate= useNavigate()
	const emailRef= useRef();
	const passwordRef= useRef();



	function meetupHandeler(event){

		event.preventDefault();

		const enteredemail= emailRef.current.value;
		const enteredpassword= passwordRef.current.value;

		const SignIn={
			email: enteredemail,
			password: enteredpassword
 
		};
		fetch('https://meetup-321b5-default-rtdb.firebaseio.com/signin.json',
             {
             	method: 'POST',
                body: JSON.stringify(SignIn),
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
			<form className='form signin' onSubmit={meetupHandeler}>
               <h3>Signin</h3>
				<label htmlFor='email'>Email</label>
				 <input id='email' type='email' required ref={emailRef}></input>
				<label htmlFor='password'>Password</label>
				 <input id='password' type='password'  required ref={passwordRef}></input>
				 <input className='btn'type='submit' value='Submit' onSubmit={props.onSubmit}></input>
				 <p className='registerQuestion'>No Account yet?</p>
				 <button className='btn'><Link className='btn' to='/register'>Register</Link></button>
			</form>

		</div>
		)
}
export default Signin;