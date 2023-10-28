import bcrypt from "bcryptjs"

export default function authServiceFactory (){
	const validate = async(password, dbPassword) => {		
		return await bcrypt.compare(password, dbPassword);
	};

	return {validate};
}

/*module.exports = {
	authServiceFactory
}*/