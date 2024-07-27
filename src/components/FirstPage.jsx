import React, { useState } from "react";
import { slides } from "../mockData/imagesData";

const FirstPage = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const handleDotClick = (index) => {
		setCurrentSlide(index);
	};
	return (
		<div className="relative w-full h-full flex flex-col items-center justify-center p-4">
			{/* Carousel slides */}
			<div className="relative overflow-hidden w-full h-3/4 max-w-md">
				<div
					className="flex transition-transform duration-500 ease-in-out"
					style={{ transform: `translateX(-${currentSlide * 100}%)` }}
				>
					{slides.map((src, index) => (
						<div
							key={index}
							className="flex-shrink-0 w-full h-full"
						>
							<img
								src={src}
								alt={`Slide ${index + 1}`}
								className="w-full h-full object-cover"
							/>
						</div>
					))}
				</div>
			</div>

			{/* Navigation dots */}
			<div className="flex space-x-2 mt-4">
				{slides.map((_, index) => (
					<button
						key={index}
						onClick={() => handleDotClick(index)}
						className={`w-3 h-3 rounded-full ${
							index === currentSlide
								? "bg-blue-500"
								: "bg-gray-400"
						}`}
					></button>
				))}
			</div>

			{/* Static button */}
			<div className="mt-4">
				<button className="px-4 py-2 bg-blue-500 text-white rounded-md">
					Static Button
				</button>
			</div>
		</div>
	);
};

export default FirstPage;
