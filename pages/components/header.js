import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';


const  Header = () => {
    const [navbar, setNavbar] = useState(false);

	return (		
		<div className="bg-gray-600">
			<nav className="flex justify-between">
				<div className="flex items-top">
				 	<div className="logo p-2 items-center"> 
						<Image src="/washing-repo.svg"
                        width={60} height={60} alt="logo" color="white"
                        className="flex items-top focus:border-none active:border-none mx-2"
                    	/>
                    </div>
                    <div className="logo p-2 items-top"> 					
						<p className="xl:text-4xl lg:text-2xl md:text-2xl sm:text-2xl  text-red-500 text-bold">
					 		Washing and dryer 
						</p>
						<p className="pl-2 text-blue-500 font-bold text-4xl">Rentals</p>
					</div>
				</div>
				
				<div className="block flex justify-end " > 
				<div className={`flex-1 justify-self-center  pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ navbar ? 'p-12 md:p-0 block' : 'hidden' }` }>
                         <ul className="h-screen items-center justify-center md:flex">
                            <li className="menu_li">
                                <Link href="/" onClick={() => setNavbar(!navbar)}>
                                    warranty
                                </Link>
                            </li>	
                             <li className="menu_li">
                                <Link href="/warranties/search1" onClick={() => setNavbar(!navbar)}>
                                    Search
                                </Link>
                            </li>	
                            <li className="menu_li">
                                <Link href="/warranties/warranty" onClick={() => setNavbar(!navbar)}>
                                    Admin
                                </Link>
                            </li>			 	
						</ul>
                    </div>
                    		{/* HAMBURGER BUTTON FOR MOBILE */}
                    <div className="md:hidden ">
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
                  </div>   			
			</nav>					
		</div>			
	)
}

export default Header
