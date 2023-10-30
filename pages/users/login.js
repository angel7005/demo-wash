import { useRouter } from 'next/router';
import { 
	useEffect, 
	useState 
} from 'react';

import {userServiceFactory}	  from '../../services/userService';
import useUser from '../../hooks/useUser';

const userService = userServiceFactory();

const login = (props) => {
	const router = useRouter();

	const {user, mutateUser} = useUser({
		redirectTo: '/warranties/warranty',
		redirectIfFound: true,
	});

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	useEffect(()=>{
			console.log("users.login.User status:" + user);
			/*if(user) {
				router.back()
			};*/
	},[user, mutateUser]);

	const handleSubmit = async (e) => {
		e.preventDefault();
	
		try{
			mutateUser(
				await userService.login(username, password)
			);
		} catch (error) {
			console.log(error);
			(error.response?.data) ? alert(error.response.data?.error) : alert(error);
		};
	} 

	const usernameHandler = (e) => {
		setUsername(e.target.value);
	}

	const passwordHandler = (e) => {
		setPassword(e.target.value);
	}

	function render(){
		return (
			<div className="flex h-auto justify-center items-center overflow-y-auto 
                        fixed inset-0 z-50 outline-none focus:outline-none">
        	   <div className="relative w-auto  mx-auto xl:w-1/4 lg:w-1/3 sm:w-2/3">
           	   	    <div className="border-10 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            			<div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
               		<h3 className="text-3xl text-black-500 font=semibold">Login Form</h3>
               		<button
                    	className="bg-transparent border-0 text-black float-right"
                    	onClick={() => {
                          router.push('/');
                    	}}>
                  		<span className="text-black opacity-7 h-8 w-8 text-xl block bg-gray-300 py-0 
                  			rounded-full">
                      		x
                  		</span>
             		</button>
		        		</div>
            				<div className="relative p-6 flex-auto">                
                				<form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full"
                    				onSubmit={handleSubmit}>
				 		
						 		    <input  name="uname"	
						 		    		type="text" 
						 		    		placeholder="Enter username" 
						 		    		className="ctlForm"
								 	  		onChange={usernameHandler}/>
							        <input  name="password"
							        		type='password' 
							        		placeholder="Enter password" 
							        		className="ctlForm"
									        onChange={passwordHandler}/>			  				       
				    			</form>
				    		</div>
				    		 <div className="flex items-center justify-end p-6 border-t 
                    border-solid border-gray-200 rounded-g">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase
                         px-6 py-2 text-sm outline-none focus:outline-none mr-3 mb-1
                         rounded-md ring-2 hover:bg-red-100"
                    type="button"
                    onClick={() => { 
                    	router.push('/');
                    }}
                  >
                    Close
                  </button>
                  <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 
                                   text-sm outline-none focus:outline-none mb-1 ring-2
                                   hover:bg-green-100 rounded-md"                    
                    type="button"
                    onClick={handleSubmit}>
                    Submit
                  </button>
                </div>
					</div>
			    </div>
			</div>
		)
	}

	return(		
		 <div>
		 { console.log('users.login.return children.props: ' +  JSON.stringify(props)) }		 
			 {console.log("user is"+  user)}
			 {
			 	!{user} ? (<h1>Loading....</h1>) :
			 	<> {!user?.isLoggedIn && render()}
			    </>
			}
		 </div>	
		)
}


export default login;