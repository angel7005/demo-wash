import React from 'react';

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import WarrantySearh from '../../components/warrantysearch.jsx'

const  DashBoard = () => {
	return (
			<div className="h-screen h-full themegrad
						grid grid-cols-3 gap-2 w-3/3">		  
				<div className="text-center col-span-3"><Header/></div>
				
				<div className="text-center col-span-3 mx-5 ">
					<WarrantySearh/>
				</div>
								
				<div className="text-center col-span-3"><Footer/></div>			  
			</div>		
		);
};

export default DashBoard;