
export default function Table(props){
	return(
		<div className="flex flex-col border-2 mt-2 w-full">
            <div className="max-h-screen border-gray-800">
            	<div className="p-1.5 align-middle overflow-auto border-gray-800" >
                    <div className="overflow-auto border rounded-lg ">
                        <table className="w-full divide-y divide-gray-500 border">
                            {props.table_head}
                            {props.table_body}
                        </table>
                    </div>
                </div>
            </div>
        </div>
	);
}