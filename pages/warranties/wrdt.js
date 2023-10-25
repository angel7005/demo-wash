import React from 'react';
import Pagination from 'react-js-pagination'

import {useContext, useEffect, useState, useRef } from "react";
import { CiTrash } from "react-icons/ci";

import {WarrantyContext} from "./warranty_context";

import Header from "../components/header.js"
import Footer from "../components/footer.js"

import Table from '../components/tables'
import TableHead from '../components/table_head'
import TableBody from '../components/table_body'



const  WarrantyTable = () => {

	const {
	    warranties,  
	    created, setCreated,
	    updated, setUpdated,
	    deleted, setDeleted,
	    getWarranties, 
	    deleteWarranty
	  } = useContext(WarrantyContext);
	
	const warrantyNameRef = useRef();

	const totalItems = warranties?.length;
	const pageSize = 5;
	const [activePage, setActivePage] = useState(1);
	const indexOfLastAll =  activePage*pageSize 
	const indexOfFirstAll = indexOfLastAll-pageSize
	const currentAll = warranties?.slice(indexOfFirstAll, indexOfLastAll);


    function getWarrantiesRow() {
    	let warrantisRow =[]
    	if(warranties || warranties?.length>0){	      		 
	    	for(var i = indexOfFirstAll; i<Math.min(indexOfLastAll,totalItems); i++){
	    		
	      		warrantisRow.push({
			      	 		'id': warranties[i]?.id, 
			      	 		datas: {
				      	 		'serial_number': warranties[i]?.serial_number,
				      	 		'model': warranties[i]?.model,
				      	 		'date_sale': warranties[i]?.date_sale,
				      	 		'days_warranty': warranties[i]?.days_warranty,
				//      	 		'notes': warranties[i].descriptions
			      	 		},
			      	 	})
	      		}      		      	 	      	 
	    }
	    return warrantisRow

      }

      function handlePageChange(pageNumber) {
   		 console.log('active page is ${pageNumber}');
    	 setActivePage(pageNumber);
  	  }

	  useEffect(() => {
	      getWarranties();
	    }, [created,updated,deleted]);

	return (
			<div className="min-h-screen gap-2">		  
				<div className="text-center col-span-3">
					<Header/>
				</div>					
				
				<div className="text-center col-span-3 h-full ">	
				 
					<Table
	    				table_head={<TableHead head_colums={['id','serial number','model','Date of sale', 'Days of warranty',]} />}
	    				table_body={<TableBody body_rows_data={getWarrantiesRow()}/>}
						>
					</Table>				
					<br/>
					<div className="pagination mt-auto bg-gray-200"> 
	            			<Pagination 
	               				activePage={ activePage } 
	               				itemsCountPerPage={ pageSize } 
	               				totalItemsCount={ totalItems } 
	               				pageRangeDisplayed={ 3 } 
	               				onChange={ handlePageChange } 
	               				itemlass="page-item"
	               				linkClass="page-link"
	            			/> 
         				</div> 
				  </div>
				
				<br/>	
				<div className="text-center col-span-3">
					<Footer>						
					</Footer>
				</div>			  
			</div>		
		);
};

export default WarrantyTable;