import {useState, useEffect} from 'react';

import Header from '../header/page';
import ItemAdd from './itemAdd';
import PageCtl from './pageCtl';
import SearchItem from './searchItem';
import Table from './table';

export default function TableList(props){	
   	const [isQuery, setIsQuery] = useState(false); 
	
	useEffect(()=>{ 

	},[props.activePage])

   	function render(){
   		return(
				<div className="flex flex-col w-screen w-1/3 ">	
					<div className="flex-grow mb-8">
						<Header/>
					</div>
					<div className="flex flex-row w-screen w-1/3  mt-20">		
						<div className="flex w-1/16"/>
						<div className="flex justify-start w-1/6">
							<ItemAdd 
								itemName={props.itemName}
								isOpen={props.isOpen}
								setIsOpen={props.setIsOpen}	
								className="flex w-full"					
							/>
						</div>			
						<div className="text-center border-1 border-gray-300 rounded-md w-3/6">
							<PageCtl 
								items={props.items} pageSize={10}
								indexOfFirstAll={props.indexOfFirstAll}
								setIndexOfFirstAll={props.setIndexOfFirstAll}
								indexOfLastAll={props.indexOfLastAll}
								setIndexOfLastAll={props.setIndexOfLastAll}
								activePage={props.activePage}
								setActivePage={props.setActivePage}
							/>
						</div>			
						<div className="flex justify-start w-1/6">
							<SearchItem 
								items={props.items} 
								setItems={props.setItems}
								getItems={props.getItems}
							/>
						</div>
					</div>
					<div className="flex-grow w-full text-center">
						{props.table}
					</div>
					<div className="flex flex-row w-screen w-1/3  mt-20">
						<div className="flex justify-start w-1/6"/>
						<div className="ml-c justify-center border-1 border-gray-300 rounded-md w-3/6">
							<PageCtl 
								items={props.items} 
								pageSize={props.pageSize}
								indexOfFirstAll={props.indexOfFirstAll}
								setIndexOfFirstAll={props.setIndexOfFirstAll}
								indexOfLastAll={props.indexOfLastAll}
								setIndexOfLastAll={props.setIndexOfLastAll}
								activePage={props.activePage}
								setActivePage={props.setActivePage}
							/>
						</div>			
					</div>
					{props.isOpen ? props.form : null}			
				</div>
		   		);
   	}

	return(	
		<>
		{render()}
		</>
	)
}