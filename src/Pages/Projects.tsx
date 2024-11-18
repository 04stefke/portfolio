import Gradientdiv from "../components/MouseEffect/Gradientdiv";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowLeft,
	faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

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
						<tr className="border-b">
							<td className="py-4 pr-4 align-top text-xs">2024</td>
							<td className="py-4 pr-4 align-top text-fontColor">
								<a
									href="https://stefkes-youtube2mp3.netlify.app"
									target="_blank"
								>
									Youtube to mp3
								</a>
							</td>
							<td className="py-4 pr-4 align-top hidden sm:table-cell">
								<div className="flex  items-center gap-1 ">
									<p className="bubbles">JavaScript</p>
									<p className="bubbles">Html</p>
									<p className="bubbles">CSS</p>
									<p className="bubbles">GitHub</p>
									<p className="bubbles">Netlify</p>
								</div>
							</td>
							<td className="hidden md:table-cell py-4 pr-4">
								<a
									href="https://stefans-javascript-quiz.netlify.app"
									target="_blank"
									className="hover:text-fontColor"
								>
									<FontAwesomeIcon
										icon={faArrowUpRightFromSquare}
									></FontAwesomeIcon>
								</a>
							</td>
						</tr>
						<tr className="border-b">
							<td className="py-4 pr-4 align-top text-xs">2024</td>
							<td className="py-4 pr-4 align-top text-fontColor">
								<a
									href="https://stefans-messanger-app.netlify.app"
									target="_blank"
								>
									Messenger Clone
								</a>
							</td>
							<td className="py-4 pr-4 align-top hidden sm:table-cell">
								<div className="flex  items-center gap-1 ">
									<p className="bubbles">JavaScript</p>
									<p className="bubbles">React</p>
									<p className="bubbles">Html</p>
									<p className="bubbles">CSS</p>
									<p className="bubbles">SASS</p>
									<p className="bubbles">GitHub</p>
									<p className="bubbles">Netlify</p>
								</div>
							</td>
							<td className="hidden md:table-cell py-4 pr-4">
								<a
									href="https://stefans-javascript-quiz.netlify.app"
									target="_blank"
									className="hover:text-fontColor"
								>
									<FontAwesomeIcon
										icon={faArrowUpRightFromSquare}
									></FontAwesomeIcon>
								</a>
							</td>
						</tr>
						<tr className="border-b">
							<td className="py-4 pr-4 align-top text-xs">2024</td>
							<td className="py-4 pr-4 align-top text-fontColor">
								<a
									href="https://stefans-javascript-quiz.netlify.app"
									target="_blank"
								>
									10 Question Quiz
								</a>
							</td>
							<td className="py-4 pr-4 align-top hidden sm:table-cell">
								<div className="flex  items-center gap-1 ">
									<p className="bubbles">JavaScript</p>
									<p className="bubbles">Html</p>
									<p className="bubbles">CSS</p>
									<p className="bubbles">GitHub</p>
									<p className="bubbles">Netlify</p>
								</div>
							</td>
							<td className="hidden md:table-cell py-4 pr-4">
								<a
									href="https://stefans-javascript-quiz.netlify.app"
									target="_blank"
									className="hover:text-fontColor"
								>
									<FontAwesomeIcon
										icon={faArrowUpRightFromSquare}
									></FontAwesomeIcon>
								</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</Gradientdiv>
	);
};

export default Projects;
