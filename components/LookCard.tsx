import Image, { StaticImageData } from "next/image";
import React from "react";

interface LookCardProps {
	img: StaticImageData;
	title: string;
	price: string;
}

const LookCard = ({ img, title, price }: LookCardProps) => {
	return (
		<div>
			<Image src={img} height={300} width={300} alt="card" />
			<p>{title}</p>
			<p className="text-neutral-400">{price}</p>
		</div>
	);
};

export default LookCard;
