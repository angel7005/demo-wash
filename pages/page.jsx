import axios from 'axios';
import React ,{useRef, useState} from 'react'
import {useForm} from "react-hook-form"

export default function warrantySearch() {
	const [formStep, setFormStep] = useState(0)
	//const [isValid,setIsValid] = useState(true)
	const [warranty, setWarranty] = useState({})

    const { 
  		watch, 
  		register, 
  		handleSubmit,
  		formState: {errors, isValid} 
    } = useForm({mode:'all'})

    const serial_number = React.createRef();
    const model = React.createRef();
    const date_sale = React.createRef();
    const days_warranty = React.createRef();
    const observations = React.createRef();
 
 	async function getWarranty(sn) {
 		console.log("page.getWarranty,,,,")
 		console.log(sn)
    	axios('/api/warranty?serial_number='+sn)
          .then((res) => {                             
              if(!res.data.warranty){
								setFormStep(2)
							} else {
								setFormStep(1)
								setWarranty(res.data.warranty);              
								setWarranty({
              		date_sale: new Date(cur + 860000000)
              	})
							}
            })
          .catch((err) => {
             console.log(err);
          });                
    };

	const completeFormStep = (props) => {
		if(formStep === 0){
				getWarranty(props.target.form[0].value)						
		} else if(formStep === 1){
						 	 setWarranty(null)
			 		     setFormStep(0)
			 	   }
			 		 else if(formStep === 2){
			 		 				  setFormStep(0)		
			 		 		  }							   
								 
	}

	const renderButton = () => {
		if (formStep ===0) {
			return (
					<button 
							disabled={!isValid}
							onClick={completeFormStep}
							type="button"
							className="flex my-10 py-2 px-10 border-2 border-black
										text-center text-white rounded bg-blue-700 
										disabled:bg-gray-400 disabled">
				  		Search
					</button>
			)
		} else if (formStep === 2) {

		} 
		return(
				<button 
						disabled={!isValid}
						onClick={completeFormStep}
						type="button"
						className="flex my-10 py-2 px-10 border-2 border-black
										text-center text-white rounded bg-blue-700">
				  			Previos
					</button>																	
			)		
	}

  	const submitForm = (values) => {
		 //window.alert(JSON.stringify(values,null,2))
		 //completeFormStep()
	}

	return(
		<div className="min-h-screen max-h-screen bg-gray-400 flex flex-col items-star 
		text-gray-900 antialiased relative">
	      <div
	      	 style={{
	      	 	cipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100% )",
	      	 	height: "34rem",
	      	 }}
	      	 className="absolute bg-gray-100 inset-x-0 top-0"	      	 
	       >
	         
	       </div>
	       <div className="mx-auto z-10 mt-10 text-center">
	          <h1 className="text-blue text-5xl font-semibold">
	          Query your <span className="text-blue-500">warranty</span></h1>
	          <p className="text-grep-200 mt-2">
	          	Register your product to validate your purchase date...
	          </p>
	       </div>
	       <div className="max-w-xl w-full mt-14 mb-54 rounded-lg shadow-2xl bg-gray-200
	       								 mx-auto overflow-hidden z-50 ">
	          <div className="px-16 py-18">
	            <form onSubmit={handleSubmit(submitForm)}>
	              {formStep === 0 && ( 
	              	<section className={formStep === 0 ? "block" : "hidden"}>
	                 <h2 className="font-semibold text-3xl mt-4 mb-8 text-center">
	                   Enter your serial number	                
	                 </h2>
	                 <label htmlFor="serial_number" 
	                 			 className="pr-3">
	                 			Serial number
	                 </label> {" "}
	                 <input 
	                 	type="text" 
	                 	id="serial_number" 
	                 	name="serial_number" 	     
	                 	className="serial-number text-center px-2 uppercase"	
	                 	{...register("serial_number", {
	                 				required: {
	                 					value: true,
	                 					minLength: {
	                 						value: 9,
	                 						message: "serial number debe tener al menos 9 caracteres"
	                 					},
	                 					message: "Please type a serial number", 	                 					 
	                 				}
	                 			})
	                 }                 	
	                  />
	                 {errors.serial_number && (
	                 	  <p className="text-red-600 text-sm mt-3">
	                 	     {errors.serial_number.message}
	                 	  </p>
	                 	  )} 
	               </section>
	              )}
	              {formStep === 1 && (
	              	<section className={formStep === 1 ? "block" : "hidden"}>
	              	
	              	<h2 className="font-semibold text-3xl mt-4 mb-8 text-center">
	                	Your warranty	                
	              	</h2>	              	
	              	
	              	<div className="flex justify-left ">
	              		<label className="font-semibold text-1xs pr-3"> Serial number: </label>
	              		<p>{warranty?.serial_number}</p>
	              	</div>
	              	<div className="flex justify-left ">
	              		<label className="font-semibold text-1xs pr-3"> Model code: </label>
	              		<p>{warranty?.model}</p>
	              	</div>	              		              	
	              	<div className="flex justify-left mt-2">
	              		<label className="font-semibold text-justify pr-3"> Date of sale: </label>
	              		<p>{warranty?.date_sale}</p>
	              	</div>
	              	<div className="flex justify-left mb-2 mr-4">
	              		<label className="font-semibold text-1x"> Days of warranty: </label>
	              		<p>{warranty?.days_warranty}</p>
	              		<p className="ml-3">${warranty?.date_sale }</p>
	              	</div>
	              	
	              	<div>
	              		<p className="font-semibold 
	              		mb-2 mr-2
	              		text-2xs
	              		">
	              	 	 {warranty?.descriptions}
	              		</p>              		                			                 		            				              		
	              	</div>

				   			</section>
	              )}
	              {formStep === 2 && (
	              	<section className={formStep === 2 ? "block" : "hidden"}>
	              	<h2 className="font-semibold text-3xl mt-4 mb-8 text-center">
	                		 Your warranty	               
	              	</h2>
	              	<div className="flex justify-center ">
	              			Serial number: {watch('serial_number')}, 
	              		<p className="font-semibold text-center text-red-600 pl-2 text-2xs pr-3"> 
	              			  NOT FOUND
	              		</p>
	              	</div>
	              </section>
	             )}	  
	             <div className="flex justify-center">	              
	            		{renderButton()}    	             
	            </div>
	            </form>
	          </div>
	       </div>
		</div>		
	)	
}
