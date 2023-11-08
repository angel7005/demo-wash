import axios from 'axios'
import {useEffect, useState, useContext} from 'react';

import Table from '../components/table/table';
import TableList from '../components/table/list';
import TableHead from '../components/table/table_head';
import TableBody from '../components/table/table_body';

import UserForm from './userForm';

import withSession from '../../lib/session';

export default function UserList(){
	const [isLoading,setIsLoading] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [users, setUsers] = useState(getUsers);

	const [activePage, setActivePage] = useState(1);
	const [indexOfFirstAll,setIndexOfFirstAll] = useState(0) ;
	const [indexOfLastAll, setIndexOfLastAll] = useState(10) ;
  	 
	useEffect( () => {render()},[users]);	
	

  async function getUsers() {
  	setIsLoading(true)
    axios("http://localhost:3000/api/users")
          .then((res) => {               
              setIndexOfFirstAll(0);
              setIndexOfLastAll(10);
              setUsers(res.data.user);
          })
          .catch((err) => {
             console.log(err);
          })
          .finally(()=>{
          	setIsLoading(false);
          });                
    };  
	
  function render() {
  	return(
  			<div>		
						<TableList
								activePage={activePage}
								pageSize={10}
								setActivePage={setActivePage}
								indexOfFirstAll={indexOfFirstAll}
								setIndexOfFirstAll={setIndexOfFirstAll}
								indexOfLastAll={indexOfLastAll}
								setIndexOfLastAll={setIndexOfLastAll}
								
								itemName='user'								
								items={users}								
								setItems={setUsers}
								getItems={getUsers}								
								isOpen={isOpen}
								setIsOpen={setIsOpen}

								form=<UserForm
												isOpen={isOpen}
												setIsOpen={setIsOpen}
												
												items={users}								
												setItems={setUsers}
												
												activePage={activePage}												
												setActivePage={setActivePage}
												pageSize={10}
										 />
								table=<Table 
												table_head=<TableHead
																			  head_colums={
																			  	['id','Full name','alias','Avatar','movil', 'address', 'email','Role']
																			  } 
																		/>
												table_body=<TableBody 				
																				columns={['username','alias','avatar','movil', 'address','mail','role']} 
																				items={users}
																				activePage={activePage}
																				indexOfFirstAll={indexOfFirstAll}
																				indexOfLastAll={indexOfLastAll}
																		 />
							  />
						/>					
				</div>
  		)
  }

	return(
		<>
			{ !isLoading && render() }
		</>
	)
}

export const getServerSideProps = withSession(async function ({req, res}){
    const user = req.session.get("user");
   
    if(user === undefined) {
      res.setHeader("location", "/users/login");
      res.statusCode = 302;
      res.end();
   
      return { props: {'redirectTo':'/users/userList', 'redirectIfFound':'true'}};
    }

    return {
      props: {user: req.session.get("user")},
    };
});