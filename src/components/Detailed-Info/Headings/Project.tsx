import redditImg from "../../../images/RedditApp.png";
import ecommerceImg from "../../../images/E-Commerce.png";
import todoImg from "../../../images/Advanced-Todo-App.png";
import spaceTourism from "../../../images/SpaceTourismApp.png";
import calculatorImg from "../../../images/calculator.png";
import Footer from "./Footer/Footer";
import { Link } from "react-router-dom";
const Project = () => {
	return (
		<section id="projects" className="flex flex-col gap-10 w-full">
			<a href="https://to-do-challenge-by-stefan.netlify.app/" target="_blank">
				<div className="flex flex-col items-center md:items-start md:flex-row gap-10 rounded hover:bg-hoverBg py-3 px-2">
					<img
						src={todoImg}
						alt="ToDo Project"
						className="w-24 max-h-24 rounded-xl"
					/>
					<div className="flex flex-col gap-2">
						<h2 className="text-xl font-bold text-fontColor">ToDo App</h2>
						<p>
							Advanced To-Do app, users are able to create, update, delete, mark
							as completed and filter their todos by [active, completed, all]
							and also delete all completed todos. Todos are securely saved in a
							database. The app is responsive to all device sizes, it has
							different hover states. Also toggle with light and dark mode
							theme!
						</p>
						<div className="flex flex-wrap items-center gap-2">
							<p className="bubbles">JavaScript</p>
							<p className="bubbles">React</p>
							<p className="bubbles">HTML5</p>
							<p className="bubbles">Tailwind</p>
							<p className="bubbles">GitHub</p>
							<p className="bubbles">Netlify</p>
						</div>
					</div>
				</div>
			</a>
			<a href="https://space-tourism-by-stefke.netlify.app/" target="_blank">
				<div className="flex flex-col items-center md:items-start md:flex-row gap-10 rounded hover:bg-hoverBg py-3 px-2">
					<img
						src={spaceTourism}
						alt="Space Tourism App"
						className="w-24 max-h-24 rounded-xl"
					/>
					<div className="flex flex-col gap-2">
						<h2 className="text-xl font-bold text-fontColor">
							Space Tourism App
						</h2>
						<p>
							Multi-Page Tourism App, users are able to view each page and
							toggle between tabs to see new information. View optimal layout
							for each website's pages depending on the screen size. See hover
							states for all interactive elements on the page. Mobile screen
							sizes have dropdown menu.
						</p>
						<div className="flex flex-wrap items-center gap-2">
							<p className="bubbles">JavaScript</p>
							<p className="bubbles">HTML5</p>
							<p className="bubbles">Tailwind</p>
							<p className="bubbles">GitHub</p>
							<p className="bubbles">Netlify</p>
						</div>
					</div>
				</div>
			</a>
			<a href="https://stefans-reddit-app.netlify.app/" target="_blank">
				<div className="flex flex-col items-center md:items-start md:flex-row gap-10 rounded hover:bg-hoverBg py-3 px-2">
					<img
						src={calculatorImg}
						alt="Calculator Project"
						className="w-24 max-h-24 rounded-xl"
					/>
					<div className="flex flex-col gap-2">
						<h2 className="text-xl font-bold text-fontColor">
							Calculator by Stefan
						</h2>
						<p>
							Advanced calculator app, with responsive layout. Hover states for
							interactive elements. 3 option theme switch saved to local storage.
						</p>
						<div className="flex flex-wrap items-center gap-2">
							<p className="bubbles">JavaScript</p>
							<p className="bubbles">HTML5</p>
							<p className="bubbles">Tailwind</p>
							<p className="bubbles">GitHub</p>
							<p className="bubbles">Netlify</p>
						</div>
					</div>
				</div>
			</a>
			<a href="https://stefans-reddit-app.netlify.app/" target="_blank">
				<div className="flex flex-col items-center md:items-start md:flex-row gap-10 rounded hover:bg-hoverBg py-3 px-2">
					<img
						src={redditImg}
						alt="Reddit Project"
						className="w-24 max-h-24 rounded-xl"
					/>
					<div className="flex flex-col gap-2">
						<h2 className="text-xl font-bold text-fontColor">
							Reddit by Stefan
						</h2>
						<p>
							Basic Reddit clone, that allows you to see posts, comments. Choose
							posts based on the selected subreddit, search whole reddit.
						</p>
						<div className="flex flex-wrap items-center gap-2">
							<p className="bubbles">JavaScript</p>
							<p className="bubbles">React</p>
							<p className="bubbles">HTML5</p>
							<p className="bubbles">CSS3</p>
							<p className="bubbles">MaterialUi</p>
							<p className="bubbles">Redux and Redux Toolkit</p>
							<p className="bubbles">GitHub</p>
							<p className="bubbles">Netlify</p>
						</div>
					</div>
				</div>
			</a>
			<a href="https://stefans-ecommerce-project.netlify.app/" target="_blank">
				<div className="flex flex-col items-center md:items-start md:flex-row gap-10 rounded hover:bg-hoverBg py-3 px-2">
					<img
						src={ecommerceImg}
						alt="E-Commerce Project"
						className="w-24 max-h-24 rounded-xl"
					/>
					<div className="flex flex-col gap-2">
						<h2 className="text-xl font-bold text-fontColor">
							E-Commerce from Frontend-Mentor
						</h2>
						<p>
							Simple E-Commerce site from FrontEnd Mentor. The user is able to
							add, remove or edit the product in the basket. Lighthouse for the
							products images, responsive for all devices. Price is updated when
							as there are changes in the cart.
						</p>
						<div className="flex flex-wrap items-center gap-2">
							<p className="bubbles">TypeScript</p>
							<p className="bubbles">React</p>
							<p className="bubbles">HTML5</p>
							<p className="bubbles">CSS3</p>
							<p className="bubbles">GitHub</p>
							<p className="bubbles">Netlify</p>
						</div>
					</div>
				</div>
			</a>
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
