import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (        
            <div>
                <nav className="w-full bg-gray-300 fixed top-0 left-0 right-0 z-10">
                    <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:px-8">
                       <div className="text-white">
                         <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            {/* LOGO */}
                            <Link href="/">
                                <h2 className="text-2xl text-cyan-600 font-bold">LOGO</h2>
                            </Link>
                            {/* HAMBURGER BUTTON FOR MOBILE */}
                            <div className="md:hidden">
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
                       </div>
                    </div>
                    <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ navbar ? 'p-12 md:p-0 block' : 'hidden' }` }>
                        <ul className="h-screen md:h-auto items-center justify-center md:flex">
                            <li className="pb-6 text-white py-2 md:px-6 text-center border-b-2 md:border-none hover:bg-purple-600 border-purple-900 md:text-purple-600 md:bg-transparent">
                                <Link href="#about" onClick={() => setNavbar(!navbar)}>
                                    About
                                </Link>
                            </li>
                            <li className="pb-6 text-white py-2 md:px-6 text-center border-b-2 md:border-none
                                hover:bg-purple-600 border-purple-900 md:text-purple-600 md:bg-transparent">
                                <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                                    Blog
                                </Link>
                            </li>
                            <li className="pb-6 text-white py-2 md:px-6 text-center border-b-2 md:border-none
                                hover:bg-purple-600 border-purple-900 md:text-purple-600 md:bg-transparent">
                                <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav> 
            </div>        
    )
}