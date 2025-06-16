import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Education from "./routes/education/education.component";
import Skills from "./routes/skills/skills.component";
import Contact from "./routes/contact/contact.component";
import About from "./routes/about/about.component";
import Portfolio from "./routes/portfolio/portfolio.component";
import Experiences from "./routes/experiences/experiences.component";
import Footer from "./routes/footer/footer.component";
import NotchBackground from "./routes/notch/notch.component";
const App = () => {
	return (
		<>
			<NotchBackground />
			<Navigation />
			<Home />
			<About />
			<Education />
			<Experiences />
			<Skills />
			<Portfolio />
			<Contact />
			<Footer />
		</>
	);
};

export default App;
