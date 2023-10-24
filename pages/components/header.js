

const  Header = () => {
	return (		
		<div className="flex  justify-end bg-gray-500">
			<nav className="flex justify-end ">
				<div className="logo p-2 w/2"> 
					
				</div>
				<div className="block" > 				    
					<ul className="menu flex items-right" >						
 						<li><a href="/" className="link">Home</a></li>
						<li><a href="/warranties/search" className="link">Search</a></li>
						<li><a href="/warranties/warranty" className="link">Admin</a></li>
					</ul>
				</div>				
			</nav>					
		</div>			
	)
}

export default Header