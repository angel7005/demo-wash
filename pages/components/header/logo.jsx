import Image from 'next/image';

export default function Logo(){
	return(
		<div className="flex items-top flex-row ">			
			 	<div className="flex items-center w-2/9" > 
					<Image src="/washing-repo.svg"
	                width={60} height={60} alt="logo" color="white"
	                className="flex items-top focus:border-none active:border-none mx-2"
	            	/>
	            </div>
	            
	            <div className="logo p-2 items-top flex-grow w-7/9"> 					
					<p className="xl:text-4xl lg:text-2xl md:text-lg sm:text-lg  text-red-500 text-bold">
				 		Washing and dryer 
					</p>
					<p className="pl-2 text-blue-500 font-bold text-4xl">Rentals</p>
				</div>
			
		</div>
	)
}