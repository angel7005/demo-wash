import { useState } from 'react';
import userServiceFactory  from '../../services/userService';
import useUser from './useUser';

const userService = userServiceFactory();

export default function login() {
	const { user, mutateUser } = useUser({
		redirectTo: '/',
		redirectIfFound: true,
	});

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
	
		try{
			mutateUser(
				await userService.login(username, password)
			);
		} catch (error) {
			alert(error.response.data.error);
		};
	} 

	const usernameHandler = (e) => {
		setUsername(e.target.value);
	}

	const passwordHandler = (e) => {
		setPassword(e.target.value);
	}

	return(
			<div>
			 {console.log("user is"+  user)}
			 {
			 	!{user} ? (<h1>Loading....</h1>) :
			 	<> {!user?.isLoggedIn && <form onSubmit={handleSubmit}>

			 		<div className="container border-1">
			 		  <input type="text" placeholder="Enter username" name="uname"	
			 		  		onChange={usernameHandler}/>

				      <input type='password' placeholder="Enter passowrd" name="password"
				          onChange={passwordHandler}/>

				      <button type="submit" className="text-gren-600  ">Login</button>
			        </div>
			    </form>}
			    </>}
		    </div>	
		)
}