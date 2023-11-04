import React from 'react';

import Header from "../components/header/page"
import Footer from "../components/footer.js"
import WarrantySearch from './warrantySearch'

const  DashBoard = () => {
	return (
			<div className="h-screen themegrad grid grid-cols-3 gap-2 w-3/3">		  
				<div className="text-center col-span-3"><Header/></div>

				<div className="text-center col-span-3 mx-5">
					<WarrantySearch/>
				</div>
								
				<div className="text-center col-span-3 items-end"><Footer/></div>			  
			</div>		
		);
};

export default DashBoard;