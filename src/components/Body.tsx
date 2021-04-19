import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";

function Body() {
	const router = useRouter();
	const searchInputRef = useRef(null);

	const onSearch = (e) => {
		e.preventDefault();
		const term = searchInputRef.current.value;
		if (!term) return;
		router.push(`/search?term=${term}`);
	};

	return (
		<form className="flex flex-col items-center flex-grow w-5/5 mt-44">
			<Image
				height={100}
				width={300}
				src={
					"https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
				}
			/>

			<div className="form__inputSearch">
				<SearchIcon className="h-5 mr-3 text-gray-500" />
				<input
					ref={searchInputRef}
					type="text"
					className="flex-grow focus:outline-none"
				/>
				<MicrophoneIcon className="h-5" />
			</div>

			<div className="flex flex-col justify-center w-1/2 mt-8 space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4">
				<button onClick={onSearch} className="form__btn">
					Google Search
				</button>
				<button onClick={onSearch} className="form__btn">
					I'm Feeling Lucky
				</button>
			</div>
		</form>
	);
}

export default Body;
