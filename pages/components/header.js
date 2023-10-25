
const  Header = () => {
	return (		
		<div className="bg-gray-700">
			<nav className="flex justify-between ">
				<div className="logo p-2 items-top"> 					
					<p className="xl:text-4xl lg:text-2xl md:text-2xl sm:text-2xl  text-red-300 text-bold">
					 	Washing and dryer 
					</p>
					<p className="pl-2 text-blue-300 font-bold text-4xl">Rentals</p>
				</div>
				<div className="mr-2 block flex justify-end  " > 				    
					<ul className="menu flex items-center justify-end" >						
 						<li><a href="/" className="link" > Waranty </a></li>
 						<li><a href="/warranties/search" className="link">Search</a></li>
						<li><a href="/warranties/warranty" className="link">Admin</a></li>
					</ul>
				</div>				
			</nav>					
		</div>			
	)
}

export default Header
