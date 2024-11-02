import {
	faFacebookF,
	faGithub,
	faInstagram,
	faLinkedinIn,
	faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Intro = () => {
	return (
		<div className="flex flex-col h-screen justify-between lg:py-10 lg:pl-5">
			<div className="flex flex-col justify-between items-start py-4 px-6 h-2/6">
				<div className="">
					<h1 className="text-5xl font-bold">Stefan Jovanovic</h1>
					<h3 className="text-2xl font-bold">Jr Frontend Developer</h3>
				</div>
				<div className="hidden lg:block">
					<p className="uppercase">ABOUT</p>
					<p className="uppercase">Experiences</p>
					<p className="uppercase">Projects</p>
				</div>
			</div>
			<div className="flex gap-2 items-center justify-start text-2xl only:justify-end">
				<a href="https://github.com/04stefke">
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<a href="https://www.linkedin.com/in/stefan-jovanovic-73081929a/">
					<FontAwesomeIcon icon={faLinkedinIn} />
				</a>
				<a href="">
					<FontAwesomeIcon icon={faInstagram} />
				</a>
				<a href="">
					<FontAwesomeIcon icon={faFacebookF} />
				</a>
				<a href="">
					<FontAwesomeIcon icon={faXTwitter} />
				</a>
			</div>
		</div>
	);
};

export default Intro;
