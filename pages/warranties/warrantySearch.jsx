"use client";
import axios from 'axios';
import React ,{useState} from 'react'
import {useForm} from "react-hook-form"

import CountdownTimer from '../../components/countdown'

export default function WarrantySearch() {	
	const [warranty, setWarranty] = useState({})
	const [textQuery, setTextQuery] = useState('');
	const [isLoading, setIsLoading] = useState(false);
     
  function handlerEnter(event){
        if('Enter' && textQuery!=='') {
        	  setIsLoading(true);

            axios('/api/warranty?serial_number='+textQuery)
                 .then((res) => {  
                 			console.log('Text query: ', textQuery);
            					setWarranty(res.data.warranty); 
          				})
                 .catch((err) => {
             							console.log(err);
          							})
                 .finally(()=>{ setIsLoading(false)});
        }
    }

	function renderWarranty (){		
	  const expiredTimestamp = new Date(new Date(warranty.date_sale));
  	const THREE_DAYS_IN_MS = warranty.days_warranty * 24 * 60 * 60 * 1000;
  	const NOW_IN_MS = expiredTimestamp.getTime();
  	const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

		 let wrt =	((((new Date()) - (new Date(warranty.date_sale)))
		 	  /(1000*3600*24))
				-warranty?.days_warranty).toFixed(0);
		 if (wrt>0) {
					return (
						<div>
							<p> You warranty <a className="font-bold text-red-500">EXPIRED</a></p>
						</div>
					)
			}
				else {
					return (
						<p className="text-red-500">Warranty time available: {' '}
							<CountdownTimer targetDate={dateTimeAfterThreeDays}  />
						</p>)			
				}		
	}
 
 	function getWarranty() {
 		console.log("page.getWarranty,,,," + textQuery) 		
 		if(isLoading) return (<div></div>)
 		                
    if(warranty && (JSON.stringify(warranty)!=='{}')){
    	  //warranty was found
				//setWarranty(res.data.warranty); 				           																						
				return(
					<div>
						<div className="flex justify-left ">
          		<label className="font-semibold text-1xs pr-3"> Serial number: </label>
          		<p>{warranty?.serial_number}</p>
          	</div>
          	<div className="flex justify-left ">
          		<label className="font-semibold text-1xs pr-3"> Model code: </label>
          		<p>{warranty?.model}</p>
          	</div>	              		              	
          	<div className="flex justify-left">
          		<label className="font-semibold text-justify pr-3"> Date of sale: </label>
          		<p>{(new Date(warranty?.date_sale))?.toLocaleDateString(undefined,{
          				weekday: 'long',
          				year:'numeric',
          				month: 'numeric',
          				day: 'numeric'
          			})}</p>
          	</div>
          	<div className="flex justify-center mb-2 mr-4 mt-3">	              		
          		<span className="pl-1">
								{ renderWarranty() }
							</span>
						</div>
					</div>			
    		)
			
		} 
		else {
			 //warranty not found
			 return (
							<div className="flex justify-center">
      					Serial number: {textQuery}, 
      					<p className="font-semibold text-center text-red-600 pl-2 text-2xs pr-3"> 
      			  		NOT FOUND
      			  	</p>
      				</div>
      				)
		}		
   };

	return(		
	       <div className="max-w-lg w-auto mt-4 mb-4 mx-auto rounded-lg shadow-2xl themegrad1
	       								 overflow-hidden z-10 ">
	       		<div>
	       				<section className="block">
	                 <h2 className="font-semibold text-3xl mt-4 mb-8 text-center">
	                   Enter your serial number	                
	                 </h2>
	                 
	                 <div className=" relative mx-4" >                                
                                <input
                                    type="text"
                                    name="hs-table-search"
                                    id="hs-table-search"
                                    className="w-full p-3 pl-10 text-sm border-gray-200 rounded-md 
                                            focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 
                                            dark:border-gray-700 dark:text-gray-400 lowercase number_serial"
                                    placeholder="Search by serial number..."
                                    onKeyPress={handlerEnter}
                                    onChange={(event) => {setTextQuery(event.target.value)}}
                                />
                                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                    <svg
                                        className="h-3.5 w-3.5 text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </div>                            
				            </div>	                 
	               </section>	             
	       		</div>
	          <div className="px-2 py-2">
	            <form >             	              
	              	<section className="block">	              	
	              		<h2 className="font-semibold text-3xl mt-4 mb-8 text-center">
	                		Your warranty	                
	              		</h2>	              		              		              	
	              				{ getWarranty()  } 	              			
				   				</section>             	             
	            </form>
	          </div>
	       </div>		
	)	
}
