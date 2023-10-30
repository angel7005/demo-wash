const knex = require('knex')({
	client: 'mysql2',
	connection: {
		host: process.env.MYSQL_HOST,
		port: 3306,
		user: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASSWORD,
		database: process.env.MYSQL_DATABASE,
	}
});


const databaseServiceFactory = () => {
	const TABLE = 'user';

	const getUser = async (username) => {
		const user = await knex(TABLE).select().where('username',username);
		if(user.length === 0){
			throw new Error("User not found");
		}
		return user[0];
	}

	return {getUser};
}

module.exports = {
	databaseServiceFactory
};