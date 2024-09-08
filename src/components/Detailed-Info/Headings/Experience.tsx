import React from "react";

const Experience = () => {
	return (
		<div className=" flex flex-col gap-10">
			<h1 className="text-3xl font-bold">Experience</h1>
			<div className="flex flex-col gap-2">
				<p>07/2023 - 08/2024</p>
				<h2 className="text-xl font-bold">
					Weboratory ~ Jr Front-End Developer
				</h2>
				<p>
					Manipulating DOM for simple features involving Vanilla JS and CSS,
					such as modifying labels and visual elements. Developing React
					components from scratch to more complex features, such as replacing
					dropdown menus to grid layouts. Using Optimizely for deploying and
					managing the A/B tests. Analysing test results based on various
					metrics including the number of visitors, bounce rate, and total
					conversion rates to determine the most effective options.
				</p>
				<div className="flex  items-center gap-5">
					<p className="border rounded-full py-1 px-2">JavaScript</p>
					<p className="border rounded-full py-1 px-2">React</p>
					<p className="border rounded-full py-1 px-2">Html</p>
					<p className="border rounded-full py-1 px-2">CSS</p>
				</div>
			</div>
			<div className="flex flex-col gap-2">
				<p>03/2019 - 06/2023</p>
				<h2 className="text-xl font-bold">
					Monties Cafe and B&B ~ Administrator
				</h2>
				<p>
					Held a multifaceted role at Monties Cafe/Guest House, encompassing a
					wide range of responsibilities. Duties included culinary tasks,
					technical support, managing bookings, and troubleshooting electronic
					devices, covering both software and hardware aspects.
				</p>
				<div className="flex  items-center gap-5">
					<p className="border rounded-full py-1 px-2">Hospitality</p>
					<p className="border rounded-full py-1 px-2">Housekeeping</p>
					<p className="border rounded-full py-1 px-2">Bookings</p>
					<p className="border rounded-full py-1 px-2">Troubleshooting</p>
          <p className="border rounded-full py-1 px-2"></p>

				</div>
			</div>
		</div>
	);
};

export default Experience;
