import {
  useEffect, 
  useState, 
  useRef,
  useContext
} from "react";
import {useForm} from "react-hook-form"

//import ImputMask from "react-input-mask";

import {WarrantyContext} from "./warranty_context";

import { CiTrash } from "react-icons/ci";
import Head from "next/head";

import axios from "axios";

export default function WarrantyCreate({flag,changeFlag}){
  const { 
      watch, 
      register, 
      handleSubmit,
      formState: {errors, isValid} 
    } = useForm({mode:'all'})
	
  const {
      warranties, setWarranties, 
      created, setCreated,
      getWarranties,
      
  } = useContext(WarrantyContext);
      
  const wrrt_serial_numberRef = useRef()
  const wrrt_modelRef = useRef()
	const wrrt_date_saleRef = useRef()
	const wrrt_days_warrantyRef = useRef()
  const wrrt_notesRef = useRef()

  const [showModal, setShowModal] = useState(flag);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
      if(!isLoading && created){
        setShowModal(false);
        changeFlag();
      }     
      if(showModal){
        let saledate = new Date();
        let sd1 = (saledate.getFullYear() + '-' + ('0'+(saledate.getMonth()+1)).substr(-2) +'-'+('0'+saledate.getDate()).substr(-2))      
        wrrt_date_saleRef.current.value=sd1;
      }
    }, [created, isLoading]);         


	async function addWarranty() {     
    	const wrrt_serial_number = wrrt_serial_numberRef.current.value.trim();
      const wrrt_model = wrrt_modelRef.current.value.trim();
    	const wrrt_date_sale = wrrt_date_saleRef.current.value.trim();
    	const wrrt_days = wrrt_days_warrantyRef.current.value.trim();
		  const wrrt_notes = wrrt_notesRef.current.value.trim();
      setIsLoading(true)

      if (wrrt_serial_number.length < 3) return;
      console.log('${process.env.NEXT_PUBLIC_URL}');
		  let newwarranty = {}    		
    	axios.post('/api/warranty', {
    		  serial_number: wrrt_serial_number,
          model: wrrt_model,
    		  date_sale: wrrt_date_sale,
          days_warranty: wrrt_days,
    		  descriptions: wrrt_notes,
    	})
        .then((res) => {                      		           	
         		newwarranty = res.data;
            setWarranties([...warranties, {           
                serial_number: newwarranty.serial_number,
                model: newwarranty.model,
                date_sale: newwarranty.date_sale,
                days_warranty: newwarranty.days_warranty,
                descriptions: newwarranty.descriptions
              },
            ]);
            setCreated(true);             
        })
          .catch((err) => {            
             console.log(err);
             return;
          })
        .finally(()=>{
            setIsLoading(false);
        });     	    	    	    	    	    	       	       
    }

    return (
      <>
      { showModal? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl text-black-500 font=semibold">Add warranty</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => {
                          setShowModal(false);
                          changeFlag();
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
                        ref={wrrt_serial_numberRef}/>

                    <label className="block text-left text-black text-sm font-bold mt-3">
                      Model code
                    </label>
                    <input 
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black" 
                      max="10"
                      ref={wrrt_modelRef}
                    />

                    <label className="block text-left text-black text-sm font-bold mt-3">
                      Date of sale
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-1 text-black" 
                        type="date" 
                        ref={wrrt_date_saleRef}
                      />

                    <label className="block text-left text-black text-sm font-bold mt-3">
                      Days of warranty
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" 
                      ref={wrrt_days_warrantyRef}
                    />
                    
                    <label className="block text-left text-black text-sm font-bold mt-3">
                      Notes
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" 
                      ref={wrrt_notesRef}
                    />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => { 
                      setShowModal(false);
                      changeFlag();
                    }}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={async() => {
                          await addWarranty()                                                  
                      }
                    }>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>) : null }
      </>) 
};

WarrantyCreate.getInitialProps = async () => { 
      wrrt_serial_numberRef.current.value='';
      wrrt_modelRef.current.value='';
      let saledate = new Date();
      let sd1 = (saledate.getFullYear() + '-' + ('0'+(saledate.getMonth()+1)).substr(-2) +'-'+('0'+saledate.getDate()).substr(-2))      
      wrrt_date_saleRef.current.value=sd1;
      wrrt_days_warrantyRef.current.value='';
      setCreated(false);
      setShowModal(flag)
}