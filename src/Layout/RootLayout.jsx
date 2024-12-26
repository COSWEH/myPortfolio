import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function RootLayout({ isDarkMode, setIsDarkMode }) {
	return (
		<>
			<Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}

export default RootLayout;
