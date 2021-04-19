function HeaderOption({ Icon, title, selected = false }) {
	return (
		<div
			className={`flex items-center pb-3 space-x-1 border-b-4 border-transparent cursor-pointer hover:text-blue-500 hover:border-blue-500 ${
				selected && "text-blue-500 border-blue-500"
			}`}
		>
			<Icon className="h-4" />
			<p className="hidden sm:inline-flex">{title}</p>
		</div>
	);
}

export default HeaderOption;
