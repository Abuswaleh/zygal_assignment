import React, { useState } from "react";
import FirstPage from "./components/FirstPage";
import CenterPage from "./components/CenterPage";
import LastPage from "./components/LastPage";
import "./App.css";

const App = () => {
	const [currentPage, setCurrentPage] = useState(0);

	const pages = [
		{ component: <FirstPage key="First Page" />, name: "First Page" },
		{
			component: <CenterPage key="Center Page" />,
			name: "Center Page",
		},
		{
			component: <LastPage key="Last Page" />,
			name: "Last Page",
		},
	];

	const goToNextPage = () => {
		setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
	};

	const goToPrevPage = () => {
		setCurrentPage(
			(prevPage) => (prevPage - 1 + pages.length) % pages.length
		);
	};

	return (
		<div className="relative min-h-screen flex flex-col items-center justify-center">
			<div className="w-full h-screen max-w-lg mx-auto bg-gray-100 pt-2 pb-10 rounded-lg shadow-md overflow-auto">
				{pages[currentPage].component}
			</div>
			<div className="absolute bottom-8 w-full max-w-lg flex items-center justify-between px-4">
				<button
					onClick={goToPrevPage}
					className="px-4 py-1 bg-blue-500 text-white rounded"
				>
					Prev
				</button>
				<span className="text-gray-700">{pages[currentPage].name}</span>
				<button
					onClick={goToNextPage}
					className="px-4 py-1 bg-blue-500 text-white rounded"
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default App;
