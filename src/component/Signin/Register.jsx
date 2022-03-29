import {useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';

function Register() {
    
    const navigate= useNavigate()
	const nameRef= useRef();
	const emailRef= useRef();
	const passwordRef= useRef();

	function meetupHandeler(event){

		event.preventDefault();

		const enteredName= nameRef.current.value;
		const enteredemail= emailRef.current.value;
		const enteredpassword= passwordRef.current.value;

		const SignIn={
			name: enteredName,
			email: enteredemail,
			password: enteredpassword
 
		};
		fetch('https://meetup-321b5-default-rtdb.firebaseio.com/register.json',
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
			<form className='form register' onSubmit={meetupHandeler}>
               <h3>Register</h3>
				<label htmlFor='name'>Name</label>
				 <input type='text' id='name' required ref={nameRef}></input>
				<label htmlFor='email'>Email</label>
				 <input id='email' type='email' required ref={emailRef}></input>
				<label htmlFor='password'>Password</label>
				 <input id='password' type='password'  required ref={passwordRef}></input>
				 <input className='btn'type='submit' value='Register'></input>
				 <p className='registerQuestion'>Have an Account already?</p>
				 <button className='btn'><Link className='btn' to='/signin'>Signin</Link></button>
			</form>

		</div>
		)
}
export default Register;