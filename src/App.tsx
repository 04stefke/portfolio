import "./App.css";
import Details from "./components/Detailed-Info/Details";
import Intro from "./components/Intro/Intro";

function App() {
	return (
		<div className=" max-w-screen-xl min-h-screen mx-auto flex flex-col lg:flex-row lg:items-center px-14 lg:px-0 gap-20 lg:gap-0">

			<div className="w-full lg:w-1/2">
				<Intro />
			</div>
			<div className="w-full lg:overflow-auto lg:w-1/2 h-screen scrollbar-hidden ">
				<Details />
			</div>
		</div>
	);
}

export default App;
