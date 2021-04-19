import { PaginationButtons } from "@@components";

function SearchResults({ results }) {
	return (
		<div className="w-full pl-3 pr-3 mx-auto sm:pl-[5%] md:pl-[13%] lg:pl-44">
			<p className="mt-3 mb-5 text-gray-600 text-md">
				About {results.searchInformation?.formattedTotalResults} results (
				{results.searchInformation.searchTime} seconds)
			</p>

			{results.items?.map((result) => (
				<div key={result.link} className="max-w-xl mb-8">
					<div className="group">
						<a href={result.link} className="text-sm">
							{result.formattedUrl}
						</a>
						<a href={result.link}>
							<h2 className="text-xl font-medium text-blue-800 truncate group-hover:underline">
								{result.title}
							</h2>
						</a>
					</div>

					<p className="line-clamp-2">{result.snippet}</p>
				</div>
			))}

			<PaginationButtons />
		</div>
	);
}

export default SearchResults;
