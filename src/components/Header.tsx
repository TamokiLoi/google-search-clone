import { Avatar } from "@@components";
import { ViewGridIcon } from "@heroicons/react/solid";

function Header() {
	return (
		<header className="flex justify-between w-full p-5 text-sm text-gray-700">
			{/* Left */}
			<div className="flex items-center space-x-4">
				<p className="link">About</p>
				<p className="link">Store</p>
			</div>

			{/* Right */}
			<div className="flex items-center space-x-4">
				<p className="link">Gmail</p>
				<p className="link">Image</p>

				{/* Icon */}
				<ViewGridIcon className="w-10 h-10 p-2 rounded-full cursor-pointer hover:bg-gray-100" />

				{/* Avatar */}
				<Avatar
					className="ml-auto"
					url={
						"https://lh3.googleusercontent.com/ogw/ADGmqu_r3u8M9cRDETtLXnswQoK3n2KtowAqZafoctiLpg=s64-c-mo"
					}
				/>
			</div>
		</header>
	);
}

export default Header;
