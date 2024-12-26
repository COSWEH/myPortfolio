import React from "react";
import { NavLink } from "react-router-dom";

function NotFound() {
	return (
		<section className="bg-gray-100 dark:bg-gray-800 min-h-screen flex items-center justify-center py-24">
			<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
				<div className="mx-auto max-w-screen-sm text-center">
					<h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-gray-800 dark:text-white">
						404
					</h1>
					<p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-gray-800 dark:text-white">
						Something's missing.
					</p>
					<p className="mb-4 text-lg font-lighttext-gray-800 dark:text-white">
						Sorry, we can't find that page. You'll find lots to explore on the
						home page.
					</p>

					<NavLink
						to="/"
						className="inline-flex text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">
						Back to Homepage
					</NavLink>
				</div>
			</div>
		</section>
	);
}

export default NotFound;
