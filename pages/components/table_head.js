import React from "react";

export default function Table_Head( {head_colums} ){
	return(
	 <thead className="bg-gray-50">
        <tr> 
        	{
        		head_colums?.map((item_col) => {
                		return(
                			<th scope="col" 
                            type={{'width': item_col==='DAYS OF WARRANTY' ? '10%' : '16%'}}
                            className="px-6 py-3  font-bold text-center text-left text-gray-500 uppercase"> 
                				{item_col} 
                    		</th>
                    	)})
        	}   
        	<th scope="col" 
            style={{'width':'10%'}}
            className="px-6 py-3 text-center font-bold text-right text-gray-500 uppercase">
                Edit
            </th>
            <th scope="col"
             style={{'width':'10%'}}
             className="px-6 py-3 text-center font-bold text-right text-gray-500 uppercase ">
                Delete
            </th>         
         </tr>
      </thead>
    )
}