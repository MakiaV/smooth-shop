import Image from "next/image";
import desc from "../public/images/description.avif";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Description = () => {
	const desc1 = useRef(null);
	const desc2 = useRef(null);
	const img = useRef(null);

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to(desc1.current, {
			scrollTrigger: {
				trigger: desc1.current,
				start: "top 550px",

				scrub: true,
			},
			color: "#C9F72D",
			duration: 1,
		});
		gsap.to(desc2.current, {
			scrollTrigger: {
				trigger: desc2.current,
				start: "top 550px",

				scrub: true,
			},
			ease: "power1.in",
			letterSpacing: "15px",
			duration: 1,
		});
		gsap.to(img.current, {
			scrollTrigger: {
				trigger: img.current,
				start: "top bottom",

				scrub: true,
			},
			ease: "power1.in",
			borderRadius: "50%",
			duration: 0.5,
		});
	}, []);

	return (
		<div className="py-[100px]">
			<h1>Description</h1>
			<div className="flex gap-x-6 mt-4">
				<div>
					<p className="text-3xl font-bold mb-8" ref={desc1}>
						LACE-UP BOOTS THAT OPTIMIZE TRACTION DURING RAPID
						ACCELERATION.
					</p>
					<p className="text-justify" ref={desc2}>
						Forget everything you knew about fast. X Crazyfast has
						been engineered using lightweight components
						specifically designed for acceleration and dribbling at
						speed. So when you step onto the field, into the cage or
						wherever you play, in X Crazyfast the only speed limit
						is the one set by you.
					</p>
				</div>
				<Image
					src={desc}
					width={400}
					height={400}
					alt="desc"
					ref={img}
				/>
			</div>
		</div>
	);
};

export default Description;
