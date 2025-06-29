import { createContext, useContext, useState } from "react";

const MobileContext = createContext();

export const MobileProvider = ({ children }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [menuHeight, setMenuHeight] = useState(80);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<MobileContext.Provider
			value={{
				isMenuOpen,
				setIsMenuOpen,
				toggleMenu,
				menuHeight,
				setMenuHeight,
			}}>
			{children}
		</MobileContext.Provider>
	);
};

export const useMenu = () => useContext(MobileContext);
