import React from "react";
import { avatars, slides } from "../mockData/imagesData";

const LastPage = () => {
	return (
		<div className="relative w-full h-full flex flex-col items-center justify-center p-4">
			<div className="flex overflow-x-auto scrollbar-hidden mb-4">
				{avatars.map((avatar, index) => (
					<div key={index} className="inline-block mr-4">
						<img
							src={avatar}
							alt={`Avatar ${index}`}
							className="w-20 h-20 rounded-full object-cover"
						/>
					</div>
				))}
			</div>

			<div className="overflow-y-auto h-full scrollbar-hidden">
				{slides.map((image, index) => (
					<div key={index} className="mb-4">
						<img
							src={image}
							alt={`slide ${index}`}
							className="w-full h-auto object-cover"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default LastPage;
