import Image from "next/image";
import desc from "../public/images/description.avif";

const Description = () => {
	return (
		<div className="py-8">
			<h1>Description</h1>
			<div className="flex gap-x-6 mt-4">
				<div>
					<p className="text-3xl font-bold mb-8">
						LACE-UP BOOTS THAT OPTIMIZE TRACTION DURING RAPID
						ACCELERATION.
					</p>
					<p className="text-justify">
						Forget everything you knew about fast. X Crazyfast has
						been engineered using lightweight components
						specifically designed for acceleration and dribbling at
						speed. So when you step onto the field, into the cage or
						wherever you play, in X Crazyfast the only speed limit
						is the one set by you.
					</p>
				</div>
				<Image src={desc} width={400} height={400} alt="desc" />
			</div>
		</div>
	);
};

export default Description;
