import "./App.css";
import Details from "./components/Detailed-Info/Details";
import Intro from "./components/Intro/Intro";

function App() {
	return (
		<div className=" max-w-screen-xl min-h-screen m-auto flex flex-col lg:flex-row lg:items-center">

			<div className="w-full lg:w-1/2">
				<Intro />
			</div>
			<div className="w-full overflow-auto lg:w-1/2 h-screen ">
				<Details />
			</div>
		</div>
	);
}

export default App;
