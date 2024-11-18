import "./App.css";
import Details from "./components/Detailed-Info/Details";
import Intro from "./components/Intro/Intro";
import Gradientdiv from "./components/MouseEffect/Gradientdiv";

function App() {
	return (
		<Gradientdiv className="w-screen h-screen">
			<div className="font-sans max-w-screen-lg min-h-screen mx-auto flex flex-col md:flex-row md:items-center px-14 md:px-0 gap-20 md:gap-0 tracking-wide">
				<header className="w-full md:w-1/2">
					<Intro />
				</header>
				<main className="w-full md:overflow-auto md:w-1/2 h-screen scrollbar-hidden ">
					<Details />
				</main>
			</div>
		</Gradientdiv>
	);
}

export default App;
