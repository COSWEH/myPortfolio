import React from "react";
import myPic from "../assets/myPic.jpg";
import myCerti from "../assets/myCertiportCert2024.jpg";

function About() {
	return (
		<div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white min-h-screen flex flex-col items-center justify-center py-24">
			<div className="max-w-4xl mx-auto px-6">
				<h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-6">
					About Me
				</h1>
				{/* Grid Layout */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
					{/* First Column: About Me and Picture */}
					<div className="flex flex-col items-center justify-center">
						<div className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-6">
							<img
								src={myPic}
								alt="MyPic"
								className="w-full h-full object-cover rounded-full border-4 border-gray-300 dark:border-gray-700"
							/>
						</div>
					</div>

					{/* Second Column: Additional Information */}
					<div className="flex flex-col justify-center">
						<p className="text-lg md:text-xl mb-4">
							Hello! I'm Paolo Marvel Ramos from the Philippines, a passionate
							web developer focused on creating functional and beautiful web
							applications.
						</p>
					</div>
				</div>

				<h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-6">
					Skills
				</h1>
				<p className="text-lg">
					Over the course of my studies, I have gained basic proficiency in the
					following technologies:
				</p>
				<div className="flex flex-wrap gap-4 mt-4 cursor-pointer">
					{/* PHP */}
					<p className="flex items-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
						<i className="devicon-php-plain text-3xl mr-2"></i>
						PHP
					</p>

					{/* ReactJS */}
					<p className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
						<i className="devicon-react-original text-3xl mr-2"></i>
						ReactJS
					</p>

					{/* NodeJS */}
					<p className="flex items-center bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">
						<i className="devicon-nodejs-plain text-3xl mr-2"></i>
						NodeJS
					</p>

					{/* ExpressJS */}
					<p className="flex items-center bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">
						<i className="devicon-express-original text-3xl mr-2"></i>
						ExpressJS
					</p>

					{/* Tailwind CSS */}
					<p className="flex items-center bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600">
						<i className="devicon-tailwindcss-plain text-3xl mr-2"></i>
						Tailwind CSS
					</p>

					{/* Bootstrap */}
					<p className="flex items-center bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700">
						<i className="devicon-bootstrap-plain text-3xl mr-2"></i>
						Bootstrap
					</p>

					{/* HTML */}
					<p className="flex items-center bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600">
						<i className="devicon-html5-plain text-3xl mr-2"></i>
						HTML
					</p>

					{/* CSS */}
					<p className="flex items-center bg-blue-400 text-white py-2 px-4 rounded-lg hover:bg-blue-500">
						<i className="devicon-css3-plain text-3xl mr-2"></i>
						CSS
					</p>

					{/* JavaScript */}
					<p className="flex items-center bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600">
						<i className="devicon-javascript-plain text-3xl mr-2"></i>
						JavaScript
					</p>
				</div>

				<div className="mt-14">
					<h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-6">
						Certificate
					</h1>
					<img
						src={myCerti}
						alt="Certificate"
						className="mx-auto max-w-full h-auto border border-gray-300 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
					/>
				</div>
			</div>
		</div>
	);
}

export default About;
