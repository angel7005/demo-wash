import React,
{
    useContext,
    useState
} from "react";

import {WarrantyContext} from "../warranties/warranty_context";

export default function Table_Body( {body_rows_data} ){
    const {
                     toggleModalEdit,
                     toggleModalRemove,
                     setIdWarranty,         
          } = useContext(WarrantyContext);
    
        
    function getColumns(col){
        let keys = Object.keys(col);
        return(
            keys?.map( (k) => {
                            return(
                               <td key={k} className="px-6 py-4 text-sm font-normal text-left text-gray-800 whitespace-nowrap" >
                                 {
                                    k==='date_sale' ? ((new Date(col[k]))?.toLocaleDateString(undefined,{
                                                        weekday: 'long',
                                                        year:'numeric',
                                                        month: 'numeric',
                                                        day: 'numeric'
                                                       })) 
                                                    : col[k]}
                               </td>  
                            )                            
                }
            ))
    }

	return(            
			<tbody id="tbl1" className="divide-y divide-gray-200">
			    { 
                 body_rows_data?.map((item_row) => {                 
			     return(
                    <tr key={ item_row['id'] }>
                         <td className="px-6 py-4 font-medium
                                        text-sm  text-gray-800 
                                        whitespace-nowrap">
                            {item_row['id']}
                        </td>
                        
                        {getColumns(item_row['datas'])}     

                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">                            
                                <a 
                                    className="text-green-500 hover:text-green-700" href="#" 
                                    onClick={() => {                                            
                                            setIdWarranty(item_row['id']);                                            
                                            console.log(item_row['id']);
                                            toggleModalEdit();                                            
                                      }}>
                                    Edit
                                </a>
                            
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                            <a className="text-red-500 hover:text-red-700" href="#"
                            onClick={() => {                                            
                                            setIdWarranty(item_row['id']);                                            
                                            console.log(item_row['id']);
                                            toggleModalRemove();                                                                                     
                                      }}>
                            
                                Delete
                            </a>
                        </td>
                    </tr>
                         )
                })}
            </tbody>                
    )
}
