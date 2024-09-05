import About from "./Headings/About";
import Experience from "./Headings/Experience";
import Project from "./Headings/Project";

const Details = () => {
	return (
		<div className="flex-1 flex flex-col justify-center gap-20">
				<About />
				<Experience />
				<Project />
		</div>
	);
};

export default Details;
