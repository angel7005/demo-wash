import React ,{useRef, useState} from 'react'
import {useForm} from "react-hook-form"

export default function Home() {
	const [formStep, setFormStep] = useState(0)
	//const [isValid,setIsValid] = useState(true)

  const { 
  	watch, 
  	register, 
  	handleSubmit,
  	formState: {errors, isValid} 
  } = useForm({mode:'all'})

                  

	const completeFormStep = () => {
		setFormStep(cur => cur + 1)
	}

	const renderButton = () => {
		if (formStep > 2) {
			return undefined
		} else if (formStep === 2) {
			return (
				<button 
					disabled={!isValid}					
					type="submit"
					className="mt-6 bg-green-600 text-white rouded px-8 py-6 w-full disabled:bg-gray-400 disabled"
				>
				  Create Accout
				</button>
				)
		} else {
			return(
				<button 
					disabled={!isValid}
					onClick={completeFormStep}
					type="button"
					className="mt-6 bg-green-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400 disabled"
				>
				  Next Step
				</button>
			)
		}
	}

  	const submitForm = (values) => {
		 window.alert(JSON.stringify(values,null,2))
		 completeFormStep()
	}

	return(		
		<div className="min-h-screen bg-green-900 flex flex-col items-star text-gray-900 antialiased relative">
	      <div
	      	 style={{
	      	 	cipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100% )",
	      	 	height: "34rem",
	      	 }}
	      	 className="absolute bg-green-800 inset-x-0 top-0"
	       ></div>
	       <div className="mx-auto z-10 mt-48 text-center">
	          <h1 className="text-white text-5xl font-semibold">
	          Welcome to <span className="text-yellow-500">the club</span></h1>
	          <p className="text-grep-200 mt-2">
	          	Become a new member in 3 easy step
	          </p>
	       </div>
	       <div className="max-w-xl w-full mt-24 mb-24 rounded-lg shadow-2xl bg-green-100 mx-auto overflow-hidden z-50 ">xx
	          <div className="px-16 py-18">
	            <form onSubmit={handleSubmit(submitForm)}>
	              {formStep === 0 && ( 
	              	<section className={formStep === 0 ? "block" : "hidden"}>
	                 <h2 className="font-semibold text-3xl mb-8">
	                   Personal Information	                
	                 </h2>
	                 <label htmlFor="username">Username</label> {" "}
	                 <input 
	                 	type="text" 
	                 	id="username" 
	                 	name="username" 
	                 	className="text-input border-gray-300"	
	                 	{...register("username", {
	               				required: {
	                 					value: true,	                 					
	                 					message: "Please type a username", 	                 					 
	                 				},
	                 			minLength: {
	                 					value: 3,
	                 					message: "Username debe tener al menos tres caracteres"
	                 					},
	                 			})}         	
	                  />
	                 {errors.username && (
	                 	  <p className="text-red-600 text-sm mt-3">
	                 	     {errors.username.message}
	                 	  </p>
	                 	  )} 
	               </section>
	              )}
	              {formStep === 1 && (
	              	<section className={formStep === 1 ? "block" : "hidden"}>
	              	<h2 className="font-semibold text-3xl mb-8">
	                	Billing Information	                
	              	</h2>
	              	<label htmlFor="address">Address</label>
	              	<input 
	              		type="text" 
	              		id="address" 
	              		name="address" 
	              		className="text-input border-gray-300"
	              	    {...register("address", {  
	                 				required: {
	                 					value: true,
	                 					message: "Please type an address", 
	                 				},
	                 				minLength: {
	                 					value: 3,
	                 					message: "Username debe tener al menos tres caracteres"
	                 					},	                 			
	                 	})}
	                 />
	                 {errors.address && (
	                 		<p className="text-red-600 text-sm mt-2">
	    			             {errors.address.message}
	    			          </p>
	    			       )} 
				   </section>
	              )}
	              {formStep === 2 && (
	              	<section className={formStep === 2 ? "block" : "hidden"}>
	              	<h2 className="font-semibold text-3xl mb-8">
	                	Legal Information	                
	              	</h2>
	              	<div className="block mt6">
	                	<input
	                   		name="toc"	
	                   		className="p-3 text-green-600 rouded mr-3 border-gray-300 ring-0 focus-ring-0"
	                   		type="checkbox"
	                   		{...register("toc", {
	                 				required: true,	                 					 
	                 			})}    
	                	/>
	                	<span>I accept the{" "}
	                	   <a className="text-blue-400 underline" href="/">Terms and conditions</a>
	                	</span>
	              	</div>
	              	<div className="block mt6">
	                	<input
	                   		name="pp"	
	                   		className="p-3 text-green-600 rouded mr-3 border-gray-300 ring-0 focus-ring-0"
	                   		type="checkbox"
	                   		{...register("pp", {
	                 				required: true,	                 					 
	                 			})}  
	                	/>
	                	<span>I accept the{" "}
	                	   <a className="text-blue-400 underline" href="/">Privacy policy</a>
	                	</span>
	              	</div>
	              </section>
	             )}	  
	              {formStep === 3 && (
	              <section className={formStep === 3 ? "block" : "hidden"}>
	              	<h2 className="font-semibold text-3xl mb-8">
	                	Congratulations
	              	</h2>
	              	<div className="block mt6">	                	
	              	</div>
	              </section>
	             )}	  
	            {renderButton()}       
	            <pre>
	            	{JSON.stringify(watch(), null, 2)}
	            </pre>
	            </form>
	          </div>
	       </div>
		</div>				
		)
}
