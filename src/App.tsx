import "./App.css";
import Details from "./components/Detailed-Info/Details";
import Intro from "./components/Intro/Intro";

function App() {
	return (
		<div className="mx-auto max-w-screen-xl min-h-screen px-6 py-12 flex flex-col lg:flex-row lg:items-center">

			<div className="w-full overflow-hidden lg:w-1/2 h-full lg:h-auto">
				<Intro />
			</div>
			<div className="w-full overflow-auto lg:w-1/2 h-full">
				<Details />
			</div>
		</div>
	);
}

export default App;
