import {
  useEffect, 
  useState, 
  useRef,
  useContext
} from "react";

import axios from "axios";
import { CiTrash } from "react-icons/ci";
import Head from "next/head";

import {WarrantyContext} from "./warranty_context";

export default function WarrantyRemove(props) {

  const [isLoading, setIsLoading] = useState(false);

	 const {
        idWarranty,warranties, setWarranties, 
        deleted, setDeleted,
        deletedError, setDeletedError,
        toggleModalRemove,
    } = useContext(WarrantyContext);

    useEffect(()=>{
          if(!isLoading && deleted){    
              setWarranties(warranties.filter((a) => a.id !== idWarranty));                  
              toggleModalRemove();
          }

        },[isLoading,deleted])    
  
    async function deleteWarranty(item_id) {
      setIsLoading(true);

      if (!item_id) return;
        axios({
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            url:'/api/warranty?id='+item_id,              
            })                     
           .then((res)=>{
              setDeleted(true)
           })
           .catch((err)=>{
              console.log(err)
              setDeletedError(true);
           })
           .finally(()=>{
              setIsLoading(false);
           })                           
    };        
  
  return (<>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl text-black-500 font=semibold">Remove warranty</h3>                 
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => {
                          toggleModalRemove()
                        }}>
                    <span className="text-red-500 opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>


                 <div className="relative p-6 flex-auto">
                      <p>Esta seguro de borrar este elemento {idWarranty}</p>                  
                  </div>



                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => { 
                      toggleModalRemove()                      
                    }}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => {
                        try{
                             deleteWarranty(idWarranty)                            
                        } catch(e){
                            console.log(e);
                        }
                      }
                    }
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </> 
    );
};

WarrantyRemove.getInitialProps = async () => {       
  setDeleted(false);      
}