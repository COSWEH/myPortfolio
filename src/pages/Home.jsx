import React from "react";
import myPic from "../assets/myPic.jpg";
import { NavLink } from "react-router-dom";

function Home() {
	return (
		<div className="bg-gray-100 dark:bg-gray-800 min-h-screen flex items-center justify-center py-24">
			<div className="text-center ">
				{/* Main Title */}
				<h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-4 ">
					<span className="text-3xl">Hallo,</span> I'm Paolo Marvel Ramos
				</h1>

				{/* Subtitle */}
				<h3 className="text-1xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-6">
					Major in Web System Technology
				</h3>

				{/* Image */}
				<div className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-6">
					<img
						src={myPic}
						alt="MyPic"
						className="w-full h-full object-cover rounded-full border-4 border-gray-300 dark:border-gray-700"
					/>
				</div>

				<div className="mb-6">
					<button className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
						<NavLink to="/about">Learn More</NavLink>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Home;
