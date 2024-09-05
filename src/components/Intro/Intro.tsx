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
		<div className=" lg:flex-1 h-full flex flex-col lg:justify-around lg:my-10">
			<div className="flex flex-col justify-around h-1/4 ">
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
