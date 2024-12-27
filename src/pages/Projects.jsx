import React from "react";
import img_bayanlink from "../assets/img_bayanlink.png";
import img_gameooap from "../assets/img_gameooap.png";
import img_portfolio from "../assets/img_portfolio.png";

function Projects() {
	const projects = [
		{
			title:
				"BayanLink: A Cross-Platform Civic Engagement Hub With Advanced Web Technologies",
			subtitle: "Capstone Project | Civic Engagement Platform",
			description:
				"Developed a cross-platform civic engagement hub using HTML, CSS, Bootstrap, JavaScript, PHP, and MySQL; implemented responsive design and efficient data management to enhance user accessibility and service delivery.",
			link: "https://github.com/COSWEH/BLCapstone",
			image: img_bayanlink,
			website: "",
		},
		{
			title: "GameOoap",
			subtitle: "Independent Development | Gaming Discovery Platform",
			description:
				"Created an immersive gaming discovery platform using ReactJS, RAWG API, ShadCN UI, and Tailwind CSS; optimized user experience through seamless navigation and modern UI frameworks.",
			link: "https://github.com/COSWEH/Gamehub---ReactJS",
			image: img_gameooap,
			website: "https://gameooap-react-js.vercel.app",
		},
		{
			title: "My Portfolio",
			subtitle: "Personal Portfolio | Full-Stack Developer",
			description:
				"Designed and developed a professional portfolio using ReactJS, Tailwind CSS, and EmailJS; integrated interactive design and streamlined contact functionality to enhance engagement and presentation quality.",
			link: "https://github.com/COSWEH/myPortfolio",
			image: img_portfolio,
			website: "https://ramos-paolo-portfolio.vercel.app",
		},
	];

	return (
		<>
			<div className=" bg-gray-100 dark:bg-gray-800 mx-auto px-6 py-24 min-h-screen flex flex-col items-center justify-center text-gray-800 dark:text-white">
				<h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-6">
					Projects
				</h1>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, i) => (
						<div
							key={i}
							className=" rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 flex flex-col">
							<img
								src={project.image}
								alt={project.title}
								className="w-full h-100 object-cover"
							/>
							<div className="p-6 flex flex-col flex-grow">
								<h3 className="text-2xl font-semibold">{project.title}</h3>
								<p className="text-sm text-gray-600 dark:text-gray-400">
									{project.subtitle}
								</p>
								<p className="mt-3">{project.description}</p>

								<div className="mt-auto justify-between flex gap-8">
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="mt-4 inline-block bg-gray-900 rounded-md text-gray-100 px-2 py-2 text-sm">
										View Project on GitHub
									</a>

									{project.website && project.website.trim() !== "" ? (
										<a
											href={project.website}
											target="_blank"
											className="mt-4 inline-block bg-gray-900 rounded-md text-gray-100 px-2 py-2 text-sm">
											View Website
										</a>
									) : (
										<div className="mt-4 px-2 py-2 text-sm text-gray-500">
											No website available
										</div>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default Projects;
