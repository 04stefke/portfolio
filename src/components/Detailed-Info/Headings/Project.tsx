import React from "react";
import redditImg from "../../../images/RedditApp.png";
import Footer from "./Footer/Footer";
const Project = () => {
	return (
		<div className="flex flex-col gap-10 w-full">
			<a href="https://stefans-reddit-app.netlify.app/" target="_blank">
				<div className="flex flex-row gap-10 rounded hover:bg-hoverBg py-3 px-2">
					<img src={redditImg} alt="" className="w-24 rounded-xl" />
					<div className="flex flex-col gap-2">
						<h2 className="text-xl font-bold text-fontColor">Reddit by Stefan</h2>
						<p>
							Basic Reddit clone, that allows you to see posts, comments. Choose
							posts based on the selected subreddit, search whole reddit.
						</p>
						<div className="flex  items-center gap-5">
							<p className="border rounded-full py-1 px-2 text-fontColor text-xs">
								JavaScript
							</p>
							<p className="border rounded-full py-1 px-2 text-fontColor text-xs">
								React
							</p>
							<p className="border rounded-full py-1 px-2 text-fontColor text-xs">
								HTML5
							</p>
							<p className="border rounded-full py-1 px-2 text-fontColor text-xs">
								CSS3
							</p>
							<p className="border rounded-full py-1 px-2 text-fontColor text-xs">
								MaterialUi
							</p>
							<p className="border rounded-full py-1 px-2 text-fontColor text-xs">
								Redux and Redux Toolkit
							</p>
							<p className="border rounded-full py-1 px-2 text-fontColor text-xs">
								GitHub
							</p>
							<p className="border rounded-full py-1 px-2 text-fontColor text-xs">
								Netlify
							</p>
						</div>
					</div>
				</div>
			</a>
			<a href="">
				<div className="flex flex-row gap-10 rounded hover:bg-hoverBg py-3 px-2">
					<img src={redditImg} alt="" className="w-24 rounded-xl" />
					<div className="flex flex-col gap-2">
						<h2 className="text-xl font-bold text-fontColor">Project Title</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
							dolores adipisci sed! Praesentium vero voluptatem deserunt
							pariatur. Accusamus tenetur distinctio vel perspiciatis magnam
							similique. Eos, voluptas? Inventore ducimus illum officia?
						</p>
					</div>
				</div>
			</a>
			<a href="">
				<div className="flex flex-row gap-10 rounded hover:bg-hoverBg py-3 px-2">
					<img src={redditImg} alt="" className="w-24 rounded-xl" />
					<div className="flex flex-col gap-2">
						<h2 className="text-xl font-bold text-fontColor">Project Title</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
							dolores adipisci sed! Praesentium vero voluptatem deserunt
							pariatur. Accusamus tenetur distinctio vel perspiciatis magnam
							similique. Eos, voluptas? Inventore ducimus illum officia?
						</p>
					</div>
				</div>
			</a>
			<Footer />
		</div>
	);
};

export default Project;
