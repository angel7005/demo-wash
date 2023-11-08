import {useState, useEffect} from 'react';
import Pagination from 'react-js-pagination'

/*
{items, pageSize, 
	indexOfFirstAll, setIndexOfFirstAll,
	indexOfLastAll, setIndexOfLastAll, }
*/

export default function PageCtl(props){
	const totalItems = props.items?.length;	
		
	useEffect(()=>{
		const iOfLast = props.activePage*props.pageSize;
		props.setIndexOfLastAll(iOfLast);
		props.setIndexOfFirstAll(iOfLast-props.pageSize);
	},[props.activePage]);	

  	if(props.keys?.length>0){
  		console.log('props PageCtl....'+props);
  		console.log('............props obj.keys:', props.keys);  		
	}
	
    function handlePageChange(pageNumber) {
   		 console.log('active page is '+ pageNumber);
    	 props.setActivePage(pageNumber);
  	}

  	function render(){

  		return (
  			<div className="pagination h-full items-center bg-gray-200"> 
				<Pagination 
	   				activePage={ props.activePage } 
	   				itemsCountPerPage={ props.pageSize } 
	   				totalItemsCount={ totalItems } 
	   				pageRangeDisplayed={ 3 } 
	   				onChange={ handlePageChange } 
	   				itemClass="page-item"
	   				linkClass="page-link"
				/> 
			</div>
		 );

  	}

	return(	<>{ render() }</> )
	
}