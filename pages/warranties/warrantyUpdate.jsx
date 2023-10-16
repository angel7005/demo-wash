import {
  useEffect, 
  useState, 
  useRef,
  useContext
} from "react";


import axios from "axios";
import Head from "next/head";
import { CiTrash } from "react-icons/ci";

import {WarrantyContext} from "./warranty_context";

export default function WarrantyUpdate() {
  const [updated1, setUpdated1] = useState(false)
  const [isLoading, setIsLoading] = useState(false);

	const {

    warranties, setWarranties,    
    getWarranties,
    toggleModalEdit,isOpenEdit,
    idWarranty,
  } = useContext(WarrantyContext);
  
  const [updatedError, setUpdatedError] = useState(false);
    
  const warrantySerialNumberToUpdateRef = useRef()
  const warrantyModelToUpdateRef = useRef()
	const warrantyDateSaleToUpdateRef = useRef()
  const warrantyDaysToUpdateRef = useRef()
	const warrantyDescriptionsToUpdateRef = useRef()

  const warrantyIDToUpdateRef = useRef(); 

  useEffect(() => {
      if(!isLoading){
        getWarranty();
        if(updated1){
            toggleModalEdit()
        }        
      }
    }, [isOpenEdit, isLoading]);  

  async function getWarranty()  { 
      let waranty = {};

      axios("http://localhost:3000/api/warranty?id="+idWarranty)
          .then((res) => {               
              waranty = res.data.warranty;
              warrantySerialNumberToUpdateRef.current.value=waranty.serial_number;
              warrantyModelToUpdateRef.current.value=waranty.model;
              let saledate = (new Date(waranty.date_sale));
              let sd1 = (saledate.getFullYear() + '-' + ('0'+(saledate.getMonth()+1)).substr(-2) +'-'+('0'+saledate.getDate()).substr(-2))
              warrantyDateSaleToUpdateRef.current.value= sd1;
              warrantyDaysToUpdateRef.current.value=waranty.days_warranty;
              warrantyDescriptionsToUpdateRef.current.value=waranty.descriptions;              
          })
          .catch((err) => {
             console.log(err);
            });  
}

   function updateWarranty() {
    setIsLoading(true);
    
    const warrantyIDToUpdate = idWarranty;
    const warrantySNToUpdate = warrantySerialNumberToUpdateRef.current.value.trim();
    const warrantyModelToUpdate = warrantyModelToUpdateRef.current.value.trim();
    const warrantyDSToUpdate = warrantyDateSaleToUpdateRef.current.value.trim();
    const warrantyDaysToUpdate = warrantyDaysToUpdateRef.current.value.trim();
    const warrantyDescriptionsToUpdate = warrantyDescriptionsToUpdateRef.current.value.trim();

    if (!warrantyIDToUpdate) return;
    axios.put('/api/warranty', {
          id: warrantyIDToUpdate,
          serial_number: warrantySNToUpdate,
          model: warrantyModelToUpdate,
          date_sale: warrantyDSToUpdate,
          days_warranty:warrantyDaysToUpdate,
          descriptions: warrantyDescriptionsToUpdate
      })
        .then((res) => {                                                              
            let newwarranty = res.data.response.warranty;
            if (res.data.response.message === "error") return setUpdatedError(true);
            const idUpdated = parseFloat(res.data.response.warranty.id);
            const serialnumberUpdated = newwarranty.serial_number;
            const modelUpdated = newwarranty.model;
            const dateSaleUpdated = newwarranty.date_sale;
            const daysWarrantyUpdated = newwarranty.days_warranty; 
            const descriptionsUpdated = newwarranty.descriptions;                 
            
            if (res.data.response.message !== "success") return;    
            //updating state
            const warrantiesStateAfterUpdate = warranties.map((warranty) => {            
              if (warranty.id === idUpdated) {
                const warrantyUpdated = {
                    ...warranty,
                      id: idUpdated, 
                      serial_number: serialnumberUpdated,
                      model: modelUpdated,
                      date_sale: dateSaleUpdated,
                      days_warranty: daysWarrantyUpdated,
                      descriptions: descriptionsUpdated
                };
                console.log(updated1)
                setUpdated1(true);   
                console.log(updated1)         
                return warrantyUpdated;
              } else {
                return {
                  ...warranty,
                };
              }
            });            
            setWarranties(warrantiesStateAfterUpdate);
        })
        .catch((err) => {
             console.log(err);
             return;
        })
        .finally(() => {
            setIsLoading(false)            
        });    
  }

  return(        
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl text-black-500 font=semibold">Update waranty</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => {
                          toggleModalEdit()
                        }}>
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-left text-black text-sm font-bold mt-3">
                      Serial number
                    </label>
                    <input 
                        id="serial_number" 
                        name="serial_number" 
                        type="text"                        
                        className="serial-number shadow appearance-none border rounded w-full py-2 px-1 text-center"
                        ref={warrantySerialNumberToUpdateRef}/>

                    <label className="block text-left text-black text-sm font-bold mt-3">
                      Model code
                    </label>
                    <input 
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black" 
                      ref={warrantyModelToUpdateRef}
                    />

                    <label className="block text-left text-black text-sm font-bold mt-3">
                      Date of sale
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-1 text-black" 
                        type="date"  format="mm/dd/yyyy"
                        ref={warrantyDateSaleToUpdateRef}
                      />

                    <label className="block text-left text-black text-sm font-bold mt-3">
                      Days of warranty
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" 
                      ref={warrantyDaysToUpdateRef}
                    />
                    
                    <label className="block text-left text-black text-sm font-bold mt-3">
                      Notes
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" 
                      ref={warrantyDescriptionsToUpdateRef}
                    />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => { 
                      toggleModalEdit()                      
                    }}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => {
                        try{
                             updateWarranty()                            
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
      )     
};        