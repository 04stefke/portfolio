import Gradientdiv from "../components/MouseEffect/Gradientdiv";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowLeft,
	faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import data from "./ProjectsData.json";
const Projects = () => {
	return (
		<Gradientdiv className="w-screen h-screen ">
			<div className=" max-w-screen-lg min-h-screen mx-auto flex flex-col items-start justify-center px-14 lg:px-0 gap-5">
				<Link to="/">
					<div className="flex items-center justify-center gap-2 hover:text-fontColor">
						<FontAwesomeIcon icon={faArrowLeft} />
						<p>Stefan Jovanovic</p>
					</div>
				</Link>
				<h1 className="text-4xl font-bold text-fontColor">All Projects</h1>
				<table className="w-full">
					<thead className="sticky top-0 z-10 border-b">
						<tr>
							<th className="text-start">Year</th>
							<th className="text-start">Project</th>
							<th className="text-start hidden sm:table-cell">Built With</th>
							<th className="text-start hidden md:table-cell">Link</th>
						</tr>
					</thead>
					<tbody>
						{data.projects.map((project) => (
							<tr className="border-b" key={project.title}>
								<td className="py-4 pr-4 align-top text-xs">{project.year}</td>
								<td className="py-4 pr-4 align-top text-fontColor">
									<a href={project.url} target="_blank">
										{project.title}
									</a>
								</td>
								<td className="py-4 pr-4 align-top hidden sm:table-cell">
									<div className="flex  items-center gap-1 ">
										{project.technologies.map((tech, index) => (
											<p key={index} className="bubbles">
												{tech}
											</p>
										))}
									</div>
								</td>
								<td className="hidden md:table-cell py-4 pr-4">
									<a
										href={project.url}
										target="_blank"
										className="hover:text-fontColor"
									>
										<FontAwesomeIcon
											icon={faArrowUpRightFromSquare}
										></FontAwesomeIcon>
									</a>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</Gradientdiv>
	);
};

export default Projects;
