import "./App.css";
import Details from "./components/Detailed-Info/Details";
import Intro from "./components/Intro/Intro";

function App() {
	return (
		<div className="max-w-screen-xl min-h-screen p-5 flex gap-20 flex-col justify-between lg:flex-row lg:items-center lg:justify-center">
			<Intro />
			<Details/>
		</div>
	);
}

export default App;
