import {useState} from 'react';
import Image from 'next/image';

import Logo from './logo';
import Menu from './menu';

export default function Header(){
	
	return(
		<div class="fixed  flex flex-row  w-1/3 w-full bg-gray-900 
					top-0 left-0 right-0 z-10">
		   
			<div class="w-1/3 lg:text-left">
			 	<Logo/>
			</div>
			<div class="flex  flex-col w-2/3 mr-2 justify-center"> 
              	<Menu/>
			</div>
		   
		</div>			

	)
}