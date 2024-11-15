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
		<div className="flex flex-col lg:h-screen lg:justify-between lg:py-10 lg:pl-5">
			<div className="flex flex-col lg:justify-between items-start lg:py-4 lg:px-6 h-3/6">
				<div className="">
					<h1 className="text-5xl font-bold text-fontColor">
						Stefan Jovanovic
					</h1>
					<h3 className="text-2xl font-bold text-lighterFontColor">
						Jr Frontend Developer
					</h3>
				</div>
				<div className="hidden lg:flex flex-col gap-3">
					<p className="uppercase font-bold">ABOUT</p>
					<p className="uppercase font-bold">Experiences</p>
					<p className="uppercase font-bold">Projects</p>
				</div>
			</div>
			<div className="flex gap-5 items-center justify-start text-2xl only:justify-end">
				<a
					href="https://github.com/04stefke"
					className="hover:text-fontColor"
					target="_blank"
				>
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<a
					href="https://www.linkedin.com/in/stefan-jovanovic-73081929a/"
					className="hover:text-fontColor"
					target="_blank"
				>
					<FontAwesomeIcon icon={faLinkedinIn} />
				</a>
				<a
					href="https://www.instagram.com/stefke.9.9/"
					className="hover:text-fontColor"
					target="_blank"
				>
					<FontAwesomeIcon icon={faInstagram} />
				</a>
				<a
					href="https://www.facebook.com/profile.php?id=100009273588938"
					className="hover:text-fontColor"
					target="_blank"
				>
					<FontAwesomeIcon icon={faFacebookF} />
				</a>
				<a
					href="https://x.com/StefanJ54903340"
					className="hover:text-fontColor"
					target="_blank"
				>
					<FontAwesomeIcon icon={faXTwitter} />
				</a>
			</div>
		</div>
	);
};

export default Intro;
