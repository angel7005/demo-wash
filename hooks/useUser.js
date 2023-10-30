import { useEffect, useState
 } from 'react';
import Router from 'next/router';
import useSWR from 'swr';

export default function useUser({
		redirectTo="",
		redirectIfFound=false,} = {}) {

	//const [isLoggedIn, setIsLoggedIn] = useState(false);
    //const router = useRouter();
	const { data: user, mutate: mutateUser} = useSWR('/api/user');
	
	useEffect(() => {
		//console.log('data: ' + data);
		console.log('userUser.user: ' + JSON.stringify(user));
		console.log('userUser.redirectIfFound: ' + redirectIfFound);
		console.log('userUser.redirectTo: ' + redirectTo);
		console.log('userUser.isLoggedIn: ' + user?.isLoggedIn)
		//setIsLoggedIn(user!==null);
		//console.log('userUser.isLoggedIn: ' + user?.isLoggedIn)

		if (!redirectTo || !user) return;

		if(
			(redirectTo && !redirectIfFound && !user?.isLoggedIn) ||
			(redirectIfFound ) //&& user?.isLoggedIn)
		){
			Router.push(redirectTo);
		}
	}, [user, redirectIfFound, redirectTo]);

	return { user, mutateUser }
}