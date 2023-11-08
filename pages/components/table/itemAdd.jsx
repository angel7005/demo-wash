'use client'
import {useState} from 'react';

export default function ItemAdd(props){
    const [isLoading,setIsLoading] = useState(false);
    
	//space-y-2 md:space-y-1 items-stretch md:items-right justify-end md:space-x-3 flex-shrink-1 mx-2
    function render(){
        if(!isLoading){return}
        return(<></>
            )
    }
    return(

		<div className="flex w-full">

            <button type="button" 
                    className="flex w-full items-center justify-center border-1
                    border-gray-300 
                    bg-blue-500 hover:bg-blue-800 focus:ring-5 text-white
                    focus:ring-black-800 font-medium rounded-md text-sm 
                    mx-4 px-4 py-3 
                    focus:outline-2 focus:ring-blue-800 hover:border-gra-800"
                    onClick={ () => { 
                       if (typeof  props.setIsOpen !== 'undefined') {
                           props.setIsOpen(true) 
                       }
                    }}
                    >
                <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                </svg>
                Add {props.itemName}
            </button>                            
        </div>
	)
}