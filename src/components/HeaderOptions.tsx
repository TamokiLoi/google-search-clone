import { HeaderOption } from "@@components";
import {
	SearchIcon,
	PhotographIcon,
	MapIcon,
	NewspaperIcon,
	PlayIcon,
	DotsVerticalIcon,
} from "@heroicons/react/outline";

function HeaderOptions() {
	return (
		<div className="flex w-full text-sm text-gray-700 border-b justify-evenly lg:text-base lg:justify-start lg:space-x-36 lg:pl-44">
			{/* Left */}
			<div className="flex space-x-6">
				<HeaderOption Icon={SearchIcon} title="All" selected />
				<HeaderOption Icon={PhotographIcon} title="Images" />
				<HeaderOption Icon={PlayIcon} title="Videos" />
				<HeaderOption Icon={NewspaperIcon} title="News" />
				<HeaderOption Icon={MapIcon} title="Maps" />
				<HeaderOption Icon={DotsVerticalIcon} title="More" />
			</div>

			{/* Right */}
			<div className="flex space-x-4">
				<p className="link">Settings</p>
				<p className="link">Tools</p>
			</div>
		</div>
	);
}

export default HeaderOptions;
