import React from 'react';

import Header from "./components/header.js"
import Footer from "./components/footer.js"
import WarrantySearh from '../components/warrantysearch.jsx'

const  DashBoard = () => {
	return (
			<div className="min-h-screen h-screen
						grid grid-cols-3 gap-2 w-3/3
			            bg-blue-100 antialiased relative">		  
				<div className="text-center col-span-3"><Header/></div>
				
				<div className="text-center col-span-3 "><WarrantySearh/></div>
								
				<div className="text-center col-span-3"><Footer/></div>			  
			</div>		
		);
};

export default DashBoard;