import React from 'react';

const board = () => {
	return(
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
		<div className="min-h-screen @bg-green-900 flex flex-col items-star text-gray-900 antialiased">
	      <div
	      	 style={{
	      	 	cipPath: "polygon(0 0, 00% 0, 100% 80%, 0% 100% )",
	      	 	height: "34rem",
	      	 }}
	      	 className="absolute bg-green-800 inset-x-0 top-0"
	       ></div>
	       <div className="mx-auti z-10 mt-48 text-center">
	          <h1 className="text-white text-5xl font-semibold">
	          Welcome to <span className="text-yellow-500">the club</span></h1>
	          <p className="text-grrep-200 mt2">
	          	Become a new member in 3 easy step
	          </p>
	       </div>
	    </div> 
	    </main>
	)	
}

export default board;