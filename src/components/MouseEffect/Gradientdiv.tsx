import React, { ReactNode, useEffect, useState } from "react";

const GradientPosition = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const windowWidth = window.innerHeight;

	useEffect(() => {
		const updateMousePosition = (ev: any) => {
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
	return (
		<div
			style={{
				backgroundImage: `radial-gradient( circle at ${
					GradientPosition().x
				}px ${GradientPosition().y}px, #0c1663  , #050c44 50% )`,
			}}
			className={className}
		>
			{children}
		</div>
	);
};

export default Gradientdiv;
