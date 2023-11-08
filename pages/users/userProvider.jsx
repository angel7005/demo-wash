import React, {    
    createContext,    
    useState, 
    
} from 'react';

import axios from "axios";

export const UserContext = React.createContext({});

const UserProvider = (props) => {   
   const [indexOfLastAll, seIndexOfLastAll] = useState(-1); 
   const [indexOfFirstAll, setIndexOfFirstAll] = useState(-1);

   return (
    	<UserContext.Provider
           value={{
    		   indexOfLastAll, seIndexOfLastAll,
    		   indexOfFirstAll, setIndexOfFirstAll
    		}}>
    		{props.children}
    	</UserContext.Provider>
    );
};

export default UserProvider;