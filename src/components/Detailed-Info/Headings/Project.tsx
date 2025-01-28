import Footer from "./Footer/Footer";
import data from "../../../data/Data.json";
import { Link } from "react-router-dom";

const Project = () => {
	return (
		<section id="projects" className="flex flex-col gap-10 w-full">
			{data.projects.map((project) => (
				<a href={project.url} target="_blank" key={project.title}>
					<div className="flex flex-col items-center md:items-start md:flex-row gap-10 rounded hover:bg-hoverBg py-3 px-2">
						<img
							src={project.image}
							alt={project.title}
							className="w-24 max-h-24 rounded-xl"
						/>
						<div className="flex flex-col gap-2">
							<h2 className="text-xl font-bold text-fontColor">
								{project.title}
							</h2>
							<p>{project.description}</p>
							<div className="flex flex-wrap items-center gap-2">
								{project.technologies.map((tech, index) => (
									<p className="bubbles" key={index}>
										{tech}
									</p>
								))}
							</div>
						</div>
					</div>
				</a>
			))}
			<Link to="/projects">
				<button className="text-lg font-bold hover:text-fontColor">
					View all Projects
				</button>
			</Link>
			<Footer />
		</section>
	);
};

export default Project;
