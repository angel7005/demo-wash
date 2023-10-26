import { withIronSession} from 'next-iron-session';


export default function withSession(handler) {
	console.log('password session: '+ process.env.SECRET_COOKIE_PASSWORD);
	console.log('node_env: '+ process.env.NODE_ENV);

	return withIronSession(handler, {
		password: '7708e2e64c024fe8a28a44e3a52a7b39',
		cookieName: "codigo_morsa_auth_session",
		cookieOptions: {
			secure: process.env.NODE_ENV === 'production',
			password: process.env.SECRET_COOKIE_PASSWORD,
		},
	}); 
}