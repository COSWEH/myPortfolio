import React from "react";
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gray-800 text-white py-4">
			<div className="container mx-auto text-center">
				{/* Social Links */}
				<div className="flex justify-center gap-6 mb-4">
					<a
						href="https://www.facebook.com/ramos.p4o"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white hover:text-blue-500 transition duration-300">
						<FaFacebookF size={24} />
					</a>
					<a
						href="https://www.instagram.com/ooap.999"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white hover:text-pink-500 transition duration-300">
						<FaInstagram size={24} />
					</a>
					<a
						href="mailto:pmrdev0428@gmail.com"
						className="text-white hover:text-red-500 transition duration-300">
						<FaEnvelope size={24} />
					</a>
				</div>

				{/* Copyright */}
				<p className="text-sm">
					&copy; {currentYear} Ooap. All rights reserved.
				</p>
			</div>
		</footer>
	);
}

export default Footer;
