import React from "react";
import redditImg from "../../../images/RedditApp.png";
import Footer from "./Footer/Footer";
const Project = () => {
	return (
		<div className="flex flex-col gap-10 w-full">
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
