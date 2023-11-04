import Header from './components/header/page';


export default function(){
	return(
		<div class="flex flex-col w-screen w-1/3">
			<div class="flex-grow w-full text-center">
			<Header/>
			</div>
				<div class="flex flex-row">
					<div class="text-center w-1/5">Left Sidebar</div>
					<div class="w-3/5 items-center">Content</div>
					<div class="text-center w-1/5">Right Sidebar</div>
				</div>
			<div class="flex-grow text-center w-screen">Footer</div>
		</div>
	)
}