import {useState} from 'react';
import Image from 'next/image';

export default function SearchItem(props){
    const [textQuery, setTextQuery] = useState('');

    async function handlerEnter(event){
        if(textQuery==='' && (props!=={})) {
            await props.getItems();            
        }

        if('Enter' && textQuery!=='') {            
            props.setItems(items.filter((a) => a.alias.includes(textQuery) ));            
        } 
    }

	return(
		<div className=" flex relative mx-2" >
            <input
                type="text"
                name="hs-table-search"
                id="hs-table-search"
                className="p-3 pl-8 text-sm  border-2 border-gray-300 
                            rounded-md hover:bg-gray-400
                            focus:ring-blue-5 lowercase"
                placeholder="Search by serial number..."
                onKeyPress={handlerEnter}
                onChange={(event) => {setTextQuery(event.target.value)}}
            />
            <div className="absolute inset-y-0 left-0 flex items-center 
                            pt-2 pl-2 pointer-events-none">
                <Image src='/search.svg' width={30} height={30} alt='Search'/>
            </div>                            
        </div>
	)
}