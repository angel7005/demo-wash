"use client";

import React from 'react';
import { useState, useEffect } from 'react'

import Header from "./components/header.js"
import Footer from "./components/footer.js"
import WarrantySearh from '../components/warrantysearch.jsx'

const  TermineContract = () => {
	const [isClient, setIsClient] = useState(false)
 
  	useEffect(() => {
    	setIsClient(true)
  	}, [])

  	function renderPage(){
  		return(
			    <div className="themegrad h-full
						grid grid-cols-3 gap-2 w-3/3 ">		  
				<div className="text-center col-span-3"><Header/></div>
				
				<div className="flex col-span-3 mx-5 h-full items-center justify-end">
					<div className="text-left">
					<h1 className="text-header1 text-center py-2"> Terms of the warranty</h1>
					 <lu>
						<li className="list mt-3">
						    <a className="text-header2">- If in the first 30 days you bought the washer or dryer or the set (washer and dryer)</a> 
						    <lu>
						     <li className="list list1">
						     	If any We will agree with you to schedule the day and time that we can come to your home to fix the problem,
							 	we can repair the machine several times</li> 
							 <li className="list list1"> 
							 	if as a seller we determine that the fault is greater than the
							  	selling price, we will replace the machine with another at the same price you paid 
							  	(we do not always have the same models or the same brands).</li>
							 <li className="list list1"> 
							 	if you requested our delivery service at the time of making the purchase we go to your home to give you a solution</li>
							 <li className="list list1"> 
							 	if you came to my business to buy and pick up the machine, you must bring the equip ent to give a solution.</li>
							</lu>								    
						</li>
						<li className="list mt-3">
      						<a className="text-header2">- Only for customers who did not request our delivery service</a>
      						<lu>
      							<li className="list list1">If you cannot come to our business due to any inconvenience that may arise, 
      								you can inform our staff of your situation, in which case we can come to your house 
      								if it is within the mileage limit that we provide (from 1 to 25 miles).   
      								must cover the cost of fuel to repair the device that is presenting the technical failure 
      								<a className="font-bold"> In this case, the fuel is paid by the customer </a>who did not request our delivery service since it is a service that is far from the cost of the sale made to unless the publication where you saw the publication of the appliance you bought offers 
      									delivery and installation included in the price that was made in the publication.
      							  </li>
      							<li className="list list1"> Remember that our publication is clear and said delivery and installation promotion
      							  <a className="font-bold"> only applies in San Antonio.</a></li>
      							<li className="list list1"> If the Appliance at the time of closing the purchase was sold at a lower price,
      							   the Delivery and Installation Promotion is automatically eliminated since it has been sold at a 
      							   lower price than the original price (the customer who paid the shipping is exempt from this policy since that, 
      							   	as described in the first paragraph of this writing)</li>
      							<li className="list list1"> If you paid for the shipping, we as a seller will solve the problem of the machine at your address,
      								you will not have to pay any  cost as long as it is within the warranty time.</li>      						
							</lu>      						
      					</li>
      					<li className="list mt-3"><a className="text-header2">- For ALL CLIENTS IN GENERAL</a>
      					  <lu>
      					     <li className="list list1"> During that Warranty period, you will not have to pay any repair costs if machine has a technical failure </li>
      					     <li className="list  list1"> We are only responsible for technical damage to the machine
      					     	<lu>
      					     		<li className="list list2">We are not responsible for damage caused or accidental damage to the machine. </li>
      					     		<li className="list list2">We are not responsible for damage caused to the machine by misuse by being handled when used.</li>
      								<li className="list list2">We are not responsible for damage caused to your property, apartment , condominium, objects, accessories, clothes, pets or people.</li>
      								<li className="list list2">WE DO NOT MAKE MONEY REFUND, neither partial nor total, Our sales are final.</li>
      								<li className="list list2">We do not accept returns on any appliance. </li>      							      
      							</lu>
      						 </li>
      					   </lu>
    				    </li>
						<li className="list mt-3"><a className="text-header2">- The warranty only covers technical failures of the washer or dryer.</a> 
							 	<lu>
							 	  <li className="list list1">Make sure that the connectors and their electricity are in good condition and that the 220V plug is with the correct volts 
							 	 	so as not to cause damage to the dryer.</li>
							 	   <li className="list list1">if the electricity does not work properly, we are not responsible for any damage caused or caused to your dryer.  
							 	 	Make sure your hot and cold water valves are not leaking and labeled.</li>
							 	    <li className="list list1">Also make sure the drain is not clogged that way you will avoid damaging the washer.</li>
							 	</lu>
							 </li>      							       						 
    				      
    				  </lu>
					  	
					  <div className="flex justify-center mt-6 text-header2">Thank you for your purchase, we are here to serve you!</div>			
					</div>
				</div>
								
				<div className="text-center col-span-3"><Footer/></div>			  
				</div>
  			);
  	}

	return (
		<>
		 { isClient ? renderPage() : null }
		</>
	);
};

export default TermineContract;