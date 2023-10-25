"use client";
import axios from 'axios';
import React ,{useRef, useState} from 'react'
import {useForm} from "react-hook-form"

import CountdownTimer from './countdown'

export default function WarrantySearch() {
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
							className="flex my-10 py-2 px-10 border-2 button1 
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
						className="flex my-10 py-2 px-10  button1">
				  			Previous
					</button>																	
			)		
	}

	const renderWarranty = () => {
	  const expiredTimestamp = new Date(new Date(warranty.date_sale));
  	const THREE_DAYS_IN_MS = warranty.days_warranty * 24 * 60 * 60 * 1000;
  	const NOW_IN_MS = expiredTimestamp.getTime();
  	const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

		 let wrt =	((((new Date()) - (new Date(warranty.date_sale)))
		 	  /(1000*3600*24))
				-warranty?.days_warranty).toFixed(0);
		 if (wrt>0) {
					return (
						<p> You warranty <a className="font-bold text-red-500">EXPIRED</a></p>
					)
				}
				else {
					return (
						<p>Warranty time available in days:hh:mm:ss by: {' '}
							<CountdownTimer targetDate={dateTimeAfterThreeDays}  />
						</p>)
					//return( <p>Available {wrt*-1} day(s) of warranty. Was {warranty.days_warranty} days</p>)
				}		
	}

	return(		
	       <div className="max-w-xl w-full mt-4 mb-4 mx-auto rounded-lg shadow-2xl themegrad1
	       								 overflow-hidden z-10 ">
	          <div className="px-2 py-2">
	            <form >
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
	              		<p>{(new Date(warranty?.date_sale))?.toLocaleDateString(undefined,{
	              				weekday: 'long',
	              				year:'numeric',
	              				month: 'numeric',
	              				day: 'numeric'
	              			})}</p>
	              	</div>
	              	<div className="flex justify-left mb-2 mr-4 mt-3">
	              		<label className="font-semibold text-1x"> Days of warranty: </label>	              		
	              		              		
	              		<span className="pl-1">
	              			{ renderWarranty() } 
	              			</span>	              		
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
	)	
}
