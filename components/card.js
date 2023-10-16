
function Card(){
	return(
		<div className="bg-slate-100 text-slate-900 rounded-md p-3  ">
		  <div className="sflex justify-between">
			<p className="font-medium">el texto del card</p>
			<img src="icons/edit.png" alt="avatar" />						
		  </div>
		  <div className="flex justify-between">		  
			<img src="images/avatar.png" alt="" />
			<img src="icons/square.png" alt="" />
		  </div>	
		</div>
	)
}

export default Card