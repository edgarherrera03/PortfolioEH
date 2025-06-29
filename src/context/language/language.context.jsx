import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState("en");

	const toggleLanguage = () => {
		setLanguage((prev) => (prev === "en" ? "fr" : "en"));
	};

	return (
		<LanguageContext.Provider value={{ language, toggleLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};

// Custom hook
export const useLanguage = () => useContext(LanguageContext);
