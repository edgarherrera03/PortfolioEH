import { TimeLineContainer, Line, LineContainer } from "./time-line.styles";
const TimeLine = () => {
	return (
		<TimeLineContainer>
			<LineContainer>
				<i className="fa-solid fa-circle"></i>
				<Line />
			</LineContainer>
			<LineContainer>
				<i className="fa-solid fa-circle"></i>
				<Line />
			</LineContainer>
			<LineContainer>
				<i className="fa-solid fa-circle"></i>
				<Line />
			</LineContainer>
			<LineContainer>
				<i className="fa-solid fa-circle"></i>
				<Line />
			</LineContainer>
		</TimeLineContainer>
	);
};

export default TimeLine;
