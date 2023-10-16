import React, {	
	createContext,	
} from 'react';

export const WarrantyContext = React.createContext({});

export default function hola () {
	return (
		<p>Hola mundo, desde context</p>
		)
}
//export  default {WarrantyContext};