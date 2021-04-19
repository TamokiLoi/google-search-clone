import { Avatar, HeaderOptions, SearchResults } from "@@components";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef, useEffect } from "react";
import { API_KEY, CONTEXT_KEY } from "../config/key";
import Response from "../config/Response";

function search({ results }) {
	const router = useRouter();
	const searchInputRef = useRef(null);

	useEffect(() => {
		searchInputRef.current.value = router.query.term;
	}, []);

	const onSearch = (e) => {
		e.preventDefault();
		const term = searchInputRef.current.value;
		if (!term) return;
		router.push(`/search?term=${term}`);
	};

	return (
		<>
			<Head>
				<title>{router.query.term} - Google Search</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className="sticky top-0 bg-white">
				<div className="flex items-center w-full p-6">
					<Image
						height={30}
						width={90}
						src={
							"https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
						}
						className="cursor-pointer"
						onClick={() => router.push("/")}
					/>
					<form className="flex items-center flex-grow max-w-3xl px-6 py-2 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg">
						<input
							ref={searchInputRef}
							type="text"
							className="flex-grow w-full focus:outline-none"
						/>
						<XIcon
							className="text-gray-500 transition duration-100 transform cursor-pointer h-7 hover:scale-125 sm:mr-3"
							onClick={() => (searchInputRef.current.value = "")}
						/>
						<MicrophoneIcon className="hidden h-6 pl-4 mr-3 text-blue-500 border-l-2 border-gray-300 sm:inline-flex" />
						<SearchIcon className="hidden h-6 text-blue-500 sm:inline-flex" />
						<button hidden type="submit" onClick={onSearch}>
							Search
						</button>
					</form>
					<Avatar
						className="ml-auto"
						url={
							"https://lh3.googleusercontent.com/ogw/ADGmqu_r3u8M9cRDETtLXnswQoK3n2KtowAqZafoctiLpg=s64-c-mo"
						}
					/>
				</div>
				{/* HeaderOptions */}
				<HeaderOptions />
			</header>

			{/* Search Results */}
			<SearchResults results={results} />
		</>
	);
}

export default search;

export const getServerSideProps = async (context) => {
	const useDummyData = false;
	const startIndex = context.query.start || "0";

	console.log(
		`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
	);

	const data = useDummyData
		? Response
		: await fetch(
				`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
		  ).then((res) => res.json());

	// After the SERVER has rendered...  Pass the results to the client...
	return {
		props: {
			results: data,
		},
	};
};
