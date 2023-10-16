import {
    React,
    createContext,
    useEffect,
    useState, 
    useRef
} from 'react';
import axios from "axios";
import {WarrantyContext} from './warranty_context';


const WarrantyProvider = (props) => {
   const [warranties, setWarranties] = useState([]);
   const [created, setCreated] = useState(false);
   const [updated, setUpdated] = useState(false);   
   const [deleted, setDeleted] = useState(false);
   const [deletedError, setDeletedError] = useState(false);
      
   async function getWarranties() {
      axios("http://localhost:3000/api/warranty")
          .then((res) => {               
              setWarranties(res.data.warranties);
          })
          .catch((err) => {
             console.log(err);
            });                
      };

   
   const [isOpenEdit, setIsOpenEdit] = useState(false);
   const [isOpenRemove, setIsOpenRemove] = useState(false);
   const [idWarranty, setIdWarranty] = useState(-1);
   const toggleModalEdit = () => {setIsOpenEdit(!isOpenEdit);}
   const toggleModalRemove = () => { 
        setIsOpenRemove(!isOpenRemove)      
        setDeleted(false)       
    }


   return (
    	<WarrantyContext.Provider
           value={{
    		    warranties, setWarranties,
                created, setCreated,
                updated, setUpdated,
                deleted, setDeleted, 
                deletedError,  setDeletedError,
    		    getWarranties,  
                idWarranty, setIdWarranty,
                isOpenEdit, setIsOpenEdit, toggleModalEdit,    
                isOpenRemove, setIsOpenRemove, toggleModalRemove
    		}}>
    		{props.children}
    	</WarrantyContext.Provider>
    );
};

export default WarrantyProvider;