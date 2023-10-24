

const  Header = () => {
	return (		
		<div className="fixed flex  justify-end bg-gray-500">
			<nav className="flex justify-end ">
				<div className="logo p-2 w/2"> 					
					<p className="text-blue-400 text-red-700"> Washer and dryer <a className="text-blue-900 fond-bold text-2sm">Rent</a></p>
				</div>
				<div className="block " > 				    
					<ul className="menu flex items-right" >						
 						<li><a href="/" className="link">Waranty/li>
						<li><a href="/warranties/search" className="link">Search</a></li>
						<li><a href="/warranties/warranty" className="link">Admin</a></li>
					</ul>
				</div>				
			</nav>					
		</div>			
	)
}

export default Header