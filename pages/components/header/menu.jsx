import {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Menu(){
	const [navbar, setNavbar] = useState(false);

	return(
	  <div>
        <div className="md:hidden flex justify-end">
          <button
            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400"
            onClick={ () => {setNavbar(!navbar)} }
           >
	             {navbar ? (
	                <Image src="/close.svg" width={30} height={30} alt="logo" />
	              ) : (
	                    <Image src="/hamburger-menu.svg"
	                        width={30} height={30} alt="logo" color="white"
	                        className="focus:border-none active:border-none"
	                    />
	                )
	            }
         </button>
        </div>	
		<div className={`flex  w-full boder-b-white items-center justify-self-end  pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ navbar ? ' md:p-0 block' : 'hidden' }` }>
            <ul className="h-screen md:h-auto w-full items-center justify-end md:flex">
                    <li className="menu_li">
                        <Link href="/" onClick={() => setNavbar(!navbar)}>
                            Warranty Terms
                        </Link>
                    </li>	
                     <li className="menu_li">
                        <Link href="/warranties/search1" onClick={() => setNavbar(!navbar)}>
                            Search
                        </Link>
                    </li>	
                    <li className="menu_li">
                        <Link href="/warranties/warranty" onClick={() => setNavbar(!navbar)}>
                            Warranty
                        </Link>
                    </li>	
                    <li className="menu_li">
                        <Link href="/users/userList" onClick={() => setNavbar(!navbar)}>
                            Users
                        </Link>
                    </li>		 	
			</ul>
        </div>
     </div>
	)
}