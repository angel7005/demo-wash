import React from "react";

import {
    useContext,
    useEffect,
    useState
} from 'react';

import {WarrantyContext} from "../warranties/warranty_context";
import WarrantyProvider from "../warranties/warranty_provider";

//import Modal from './modal'
import WarrantyCreate from '/pages/warranties/warrantyCreate'
import WarrantyUpdate from '/pages/warranties/warrantyUpdate'
import WarrantyRemove from '/pages/warranties/warrantyRemove'

export default function Table( {table_head, table_body}) {

    const [isOpen, setIsOpen] = useState(false);
    const [textQuery, setTextQuery] = useState('');
    const [isQuery, setIsQuery] = useState(false);

    const {
        created, setCreated,
        updated, deleted,
        isOpenEdit, isOpenRemove,
        warranties, setWarranties, getWarranties
    } = useContext(WarrantyContext)    

    const toggleModal = () => {
        setIsOpen(!isOpen);
        setCreated(!created);
    }

    function handlerEnter(event){
        if(textQuery==='') {
            getWarranties()
            setIsQuery(false)
        }

        if('Enter' && textQuery!=='') {
            console.log('Text query: ', textQuery);
            setWarranties(warranties.filter((a) => a.serial_number.includes(textQuery) ));
            setIsQuery(true);
        } 

    }

    function showTest(a){
        alert("Hola mundo: " + a)
    }

    
    useEffect(() => {
        render()
    },[created,updated, isOpenEdit, isOpen])


    function render(){
        return (
            <div className="flex flex-col">
            <div className="overflow-x-auto h-screen">
                <div className="py-3 pl-2 mx-2 w-full" >
                        
                        <div className="w-full flex flex-col md:flex-row space-y-2 md:space-y-1 
                                    items-stretch md:items-right justify-end md:space-x-3 flex-shrink-1 mx-2">

                            <button type="button" id="createProductModalButton" 
                                    data-modal-target="createProductModal" 
                                    data-modal-toggle="createProductModal" 
                                    className="flex items-center justify-center text-black
                                    bg-blue-600 hover:bg-blue-800 focus:ring-4 text-white
                                    focus:ring-black-800 font-medium rounded-lg text-sm 
                                    mx-4 px-4 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 
                                    focus:outline-2 dark:focus:ring-blue-800"
                                    onClick={() => {
                                            setIsOpen(true)                                               
                                            console.log(isOpen);
                                      }}
                                    >
                                <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" 
                                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                </svg>
                                Add product
                            </button>

                            <div className="relative mx-1" >
                                <label htmlFor="hs-table-search" className="sr-only">
                                    Search
                                </label>
                                <input
                                    type="text"
                                    name="hs-table-search"
                                    id="hs-table-search"
                                    className="block w-full p-3 mr-2 pl-10 text-sm border-gray-200 rounded-md 
                                            focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 
                                            dark:border-gray-700 dark:text-gray-400"
                                    placeholder="Search..."
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
                                        viewBox="0 0 16 16"                                         
                                    >
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>


                    </div>

                <div className="p-1.5 w-full inline-block align-middle overflow-x-auto">
                    <div className="overflow-x-auto border rounded-lg">
                        <table className="divide-y divide-gray-200 w-full">
                            {table_head}
                            {table_body}
                        </table>
                    </div>
                </div>
            </div>
            
            { 
                isOpen ? 
                        <WarrantyCreate flag={isOpen} changeFlag={toggleModal}/> 
                       : null
            }
            {               
                isOpenEdit ? <WarrantyUpdate/>  : null                         
                
            }
            {               
                isOpenRemove ? <WarrantyRemove/>  : null                         
                
            }
        </div>   )
    }


    return (        
      render()           
    )
}