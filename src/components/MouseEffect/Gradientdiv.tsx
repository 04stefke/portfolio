import React, { ReactNode, useEffect, useState } from "react";

const GradientPosition = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const updateMousePosition = (ev) => {
			setMousePosition({ x: ev.clientX, y: ev.clientY });
		};
		window.addEventListener("mousemove", updateMousePosition);
		return () => {
			window.removeEventListener("mousemove", updateMousePosition);
		};
	}, []);

	return mousePosition;
};

interface GradientdivProps {
	children: ReactNode;
	className: string;
}

const Gradientdiv: React.FC<GradientdivProps> = ({ children, className }) => {
	const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

	useEffect(() => {
		const handleResize = () => {
			setIsLargeScreen(window.innerWidth >= 1024);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const mousePosition = GradientPosition();

	return (
		<div
			style={{
				backgroundImage: isLargeScreen
					? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #0c1663, #050c44 50%)`
					: "none",
			}}
			className={className}
		>
			{children}
		</div>
	);
};

export default Gradientdiv;
