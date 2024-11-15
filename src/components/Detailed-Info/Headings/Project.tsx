import React from "react";
import redditImg from "../../../images/RedditApp.png";
import ecommerceImg from "../../../images/E-Commerce.png";
import todoImg from "../../../images/ToDoApp.png";
import weatherImg from "../../../images/WeatherApp.png";
import Footer from "./Footer/Footer";
import { Link } from "react-router-dom";
const Project = () => {
	return (
		<div className="flex flex-col gap-10 w-full">
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
			<a href="https://stefans-to-do-app.netlify.app/" target="_blank">
				<div className="flex flex-col items-center md:items-start md:flex-row gap-10 rounded hover:bg-hoverBg py-3 px-2">
					<img
						src={todoImg}
						alt="ToDo Project"
						className="w-24 max-h-24 rounded-xl"
					/>
					<div className="flex flex-col gap-2">
						<h2 className="text-xl font-bold text-fontColor">ToDo App</h2>
						<p>
							A To Do app that allows users to add tasks remove them and change
							them.
						</p>
						<div className="flex flex-wrap items-center gap-2">
							<p className="bubbles">JavaScript</p>
							<p className="bubbles">React</p>
							<p className="bubbles">HTML5</p>
							<p className="bubbles">CSS3</p>
							<p className="bubbles">GitHub</p>
							<p className="bubbles">Netlify</p>
						</div>
					</div>
				</div>
			</a>
			<a href="https://stefans-weather-app.netlify.app/" target="_blank">
				<div className="flex flex-col items-center md:items-start md:flex-row gap-10 rounded hover:bg-hoverBg py-3 px-2">
					<img
						src={weatherImg}
						alt="Weather App"
						className="w-24 max-h-24 rounded-xl"
					/>
					<div className="flex flex-col gap-2">
						<h2 className="text-xl font-bold text-fontColor">Weather App</h2>
						<p>
							Cool looking weather app that allows users to check their weather
							for the wanted city. It displays the temperature, humidity and
							wind speed. Also the sky condition! Is it cloudy or sunny?
						</p>
						<div className="flex flex-wrap items-center gap-2">
							<p className="bubbles">JavaScript</p>
							<p className="bubbles">HTML5</p>
							<p className="bubbles">CSS3</p>
							<p className="bubbles">GitHub</p>
							<p className="bubbles">Netlify</p>
						</div>
					</div>
				</div>
			</a>
			<Link to="/projects">
				<button className="text-lg font-bold hover:text-fontColor">View all Projects</button>
			</Link>
			<Footer />
		</div>
	);
};

export default Project;
