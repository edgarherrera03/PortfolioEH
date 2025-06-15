import Button from "../../components/button/button.component";
import SwitchButton from "../../components/switch-button/switch-button-language";
import { IntroContainer, TitleContainer } from "./home.styles";
import { TypeAnimation } from "react-type-animation";
import { animate } from "animejs";
import { useEffect, useRef } from "react";
import { useLanguage } from "../../context/language/language.context";

const Home = () => {
	const { language } = useLanguage();
	const squareRef = useRef(null);
	const containerRef = useRef(null);
	const handleDownload = async () => {
		const fileUrl =
			language === "fr"
				? "https://i.ibb.co/Kp7gM8Cb/Edgar-Herrera-CV-FR.jpg"
				: "https://i.ibb.co/N2SQWQFj/Edgar-Herrera-CV.jpg";
		const response = await fetch(fileUrl);
		const blob = await response.blob();
		const url = URL.createObjectURL(blob);

		const a = document.createElement("a");
		a.href = url;
		a.download = "CV_Edgar_Herrera.jpg";
		a.style.display = "none";
		document.body.appendChild(a);
		a.click();
		window.URL.revokeObjectURL(url);
	};

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
				height: "100vh",
				overflow: "hidden",
				backgroundColor: "#0f0f0f",
			}}>
			<div
				ref={squareRef}
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					width: "120px",
					height: "120px",
					background: "radial-gradient(circle, #34eb7d 0%, #00000000 80%)",
					borderRadius: "50%",
					transform: "translate(-50%, -50%)",
					zIndex: 0,
					filter: "blur(30px)",
					opacity: 0.6,
				}}
			/>
			<IntroContainer>
				<TitleContainer>
					<h1>Hi, I'm Edgar.</h1>
					<h2 style={{ display: "flex", alignItems: "center" }}>
						I am a&nbsp;
						<TypeAnimation
							sequence={[
								"Computer engineering student",
								1000,
								"",
								500,
								"Innovation management student",
								1000,
							]}
							speed={50}
							repeat={Infinity}
							style={{ color: "#34eb7d", display: "inline-block" }} // customize color here
						/>
					</h2>
				</TitleContainer>
				<Button buttonType="base" onClick={handleDownload}>
					Download Resume
				</Button>
				<SwitchButton />
			</IntroContainer>
		</div>
	);
};

export default Home;
