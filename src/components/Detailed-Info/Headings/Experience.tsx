
const Experience = () => {
	return (
		<section id="experiences" className=" flex flex-col gap-10 w-full">
			<a
				className="lg:hover:bg-hoverBg lg:cursor-pointer px-1 py-2 rounded-lg flex flex-col justify-between sm:flex-row sm:items-center w-full"
				href="https://find-and-update.company-information.service.gov.uk/company/12344834"
				target="_blank"
			>
				<p>2023-2024</p>
				<div className="flex flex-col gap-2 w-3/4">
					<h2 className="text-xl font-bold text-fontColor">
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
						<p className="bubbles">
							JavaScript
						</p>
						<p className="bubbles">
							React
						</p>
						<p className="bubbles">
							Html
						</p>
						<p className="bubbles">
							CSS
						</p>
					</div>
				</div>
			</a>
			<a
				className="lg:hover:bg-hoverBg px-1 lg:cursor-pointer py-2 rounded-lg flex flex-col justify-between sm:flex-row sm:items-center w-full"
				href="https://www.montiesbnb.co.uk/"
				target="_blank"
			>
				<p>2019 - 2023</p>
				<div className="flex flex-col gap-2 w-3/4">
					<h2 className="text-xl font-bold text-fontColor">
						Monties Cafe and B&B ~ Administrator
					</h2>
					<p>
						Held a multifaceted role at Monties Cafe/Guest House, encompassing a
						wide range of responsibilities. Duties included culinary tasks,
						technical support, managing bookings, and troubleshooting electronic
						devices, covering both software and hardware aspects.
					</p>
					<div className="flex  items-center gap-5 flex-wrap">
						<p className="bubbles">
							Hospitality
						</p>
						<p className="bubbles">
							Housekeeping
						</p>
						<p className="bubbles">
							Bookings
						</p>
						<p className="bubbles">
							Troubleshooting
						</p>
					</div>
				</div>
			</a>
			<h2 className="text-lg font-bold hover:text-fontColor cursor-pointer"><a href="https://shorturl.at/MeBZ5" target="_blank">View full CV</a></h2>
		</section>
	);
};

export default Experience;
