import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
	const form = useRef();
	const [showAlert, setShowAlert] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		// console.log("clicked");
		// setShowAlert(true);
		// setTimeout(() => setShowAlert(false), 3000);

		emailjs
			.sendForm("service_ftl7fom", "template_phzrexh", form.current, {
				publicKey: "AhgDhrbkF8iG4xNIN",
			})
			.then(
				() => {
					console.log("SUCCESS!");
					setShowAlert(true);
					setTimeout(() => setShowAlert(false), 5000);

					form.current.reset();

					setIsSubmitting(false);
				},
				(error) => {
					console.log("FAILED...", error.text);
					setShowAlert(false);
					setIsSubmitting(false);
				}
			);
	};

	return (
		<div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white min-h-screen flex flex-col items-center justify-center py-24 px-6">
			<h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-6">
				Contact
			</h1>
			<form
				ref={form}
				onSubmit={sendEmail}
				className="bg-gray-100 dark:bg-gray-900 rounded-xl shadow-xl p-6 space-y-6 lg:w-1/2 w-full">
				<div>
					<label htmlFor="email" className="block mb-2 font-medium ">
						Your name
					</label>
					<input
						type="text"
						name="from_name"
						className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
						placeholder="Name"
						required
					/>
				</div>
				<div>
					<label htmlFor="email" className="block mb-2 font-medium ">
						Your email
					</label>
					<input
						type="email"
						name="from_email"
						className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
						placeholder="youremail@gmail.com"
						required
					/>
				</div>
				<div className="sm:col-span-2">
					<label htmlFor="message" className="block mb-2 font-medium ">
						Your message
					</label>
					<textarea
						name="message"
						rows="6"
						className="block p-2.5 w-full  text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
						placeholder="Leave a message..."></textarea>
				</div>
				<div>
					<button
						type="submit"
						disabled={isSubmitting}
						className="w-full bg-purple-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 focus:ring-2 focus:ring-purple-500 focus:outline-none">
						{isSubmitting ? "Sending..." : "Send Message"}
					</button>
				</div>
			</form>

			{showAlert && (
				<div className="fixed top-20 right-4 bg-green-600 text-white py-2 px-6 rounded-lg shadow-lg z-50">
					<p>👌 Message sent successfully!</p>
				</div>
			)}
		</div>
	);
}

export default Contact;
