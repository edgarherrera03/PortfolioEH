import Button from "../../components/button/button.component";
import SwitchButton from "../../components/switch-button/switch-button-language";
import { IntroContainer, TitleContainer, AnimateCircle } from "./home.styles";
import { TypeAnimation } from "react-type-animation";
import { animate } from "animejs";
import { useEffect, useRef } from "react";
import { useLanguage } from "../../context/language/language.context";

const Home = () => {
	const { language } = useLanguage();
	const squareRef = useRef(null);
	const containerRef = useRef(null);
	const handleDownload = () => {
		const fileId =
			language === "fr"
				? "13I9Vj7qu_ye2SGMq5mwdguUX6BbkXFvi"
				: "1g-wY0FJgW01_Km8ZaiC2ndfbE9tdTVQy";

		const fileUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

		const a = document.createElement("a");
		a.href = fileUrl;
		a.target = "_blank";
		a.style.display = "none";
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	};
	const staticText = language === "en" ? "I am " : "Je suis un ";
	const sequences =
		language === "en"
			? [
					"a Computer engineering student",
					1000,
					"",
					500,
					"an Innovation management student",
					1000,
			  ]
			: [
					"Étudiant en Ingénierie informatique",
					1000,
					"",
					500,
					"Étudiant en Management de l'innovation",
					1000,
			  ];
	useEffect(() => {
		const square = squareRef.current;
		const container = containerRef.current;
		if (!square || !container) return;

		const bounds = container.getBoundingClientRect();
		const onMouseMove = (e) => {
			const { width, height, left, top } = bounds;
			const hw = width / 2;
			const hh = height / 2;

			const x = Math.max(-hw, Math.min(e.clientX - left - hw, hw));
			const y = Math.max(-hh, Math.min(e.clientY - top - hh, hh));

			animate(square, {
				keyframes: [{ transform: `translate(${x}px, ${y}px)` }],
				duration: 500,
				easing: "ease-out",
			});
		};
		window.addEventListener("mousemove", onMouseMove);
		return () => window.removeEventListener("mousemove", onMouseMove);
	});
	return (
		<div
			id="home"
			ref={containerRef}
			style={{
				position: "relative",
				width: "100%",
				overflow: "hidden",
				backgroundColor: "#0f0f0f",
			}}>
			<AnimateCircle ref={squareRef} />
			<IntroContainer>
				<TitleContainer>
					<h1>
						{language === "en" ? "Hi, I'm Edgar." : "Bonjour, je suis Edgar."}
					</h1>
					<span className="ChangingTitle">
						{staticText}
						<span className="TypeWrapper">
							<TypeAnimation
								key={language}
								sequence={sequences}
								speed={50}
								repeat={Infinity}
								style={{ color: "#34eb7d", display: "inline" }}
							/>
						</span>
					</span>
				</TitleContainer>
				<Button buttonType="base" onClick={handleDownload}>
					{language === "en" ? "Download Resume" : "Télécharger mon CV"}
				</Button>
				<SwitchButton />
			</IntroContainer>
		</div>
	);
};

export default Home;
