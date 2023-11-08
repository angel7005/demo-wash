import {useEffect} from 'react';

export default function TableBody(props){

    useEffect(()=>{
        render();
    },[props.activePage]);

    function getItemsRow() {
        let itemsRow =[];
        const items = props.items;
        const columns = props.columns;
        if(items && items?.length>0 && columns?.length>0){                
            for(var i = props.indexOfFirstAll; i<Math.min(props.indexOfLastAll,items?.length); i++){                
                        let data=[];
                        let key = '';
                        columns.map((c)=>{
                                    key = c;
                                    data[key]=items[i][key]
                                });                     
                itemsRow.push({
                            'id': items[i]?.id, 
                            datas: data,
                        })
                }                                
        }
        return itemsRow
    }

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

    const body_rows_data = getItemsRow();

    function render() {
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

	return(
      <>
      {render()}
      </>
    );
}