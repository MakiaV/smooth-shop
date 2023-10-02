import Image from "next/image";
import lemon from "../public/images/lemon.avif";
import white from "../public/images/white.avif";
import black from "../public/images/black.avif";
import { LiaOpencart } from "react-icons/lia";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Product = () => {
	const productImage = useRef(null);
	const productDetails = useRef(null);
	const addToCart = useRef(null);
	const myBox = useRef(null);

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to(productImage.current, {
			scrollTrigger: {
				trigger: productImage.current,
				start: "top 60px",

				scrub: true,
			},
			scale: 0.5,
			transformOrigin: "0 0",
			duration: 1,
		});
		gsap.to(productDetails.current, {
			scrollTrigger: {
				trigger: productDetails.current,
				start: "top 60px",

				scrub: true,
			},
			y: 50,
			ease: "power1.in",
			opacity: 0,

			duration: 0.2,
		});
		gsap.to(addToCart.current, {
			scrollTrigger: {
				trigger: addToCart.current,
				start: "top 60px",

				scrub: true,
			},
			y: -150,
			ease: "power1.in",

			duration: 0.2,
		});
		gsap.to(myBox.current, {
			scrollTrigger: {
				trigger: myBox.current,
				start: "top 60px",
				scrub: true,
			},
			height: "150px",
			paddingBottom: "50px",
			ease: "power1.in",

			duration: 0.2,
		});
	}, []);
	return (
		<div
			className="mt-[68px] 2xl:px-[300px] z-50 fixed w-full px-[150px] bg-white mb-[30px]"
			ref={myBox}
		>
			<div className="flex gap-x-4  h-auto">
				<Image
					src={lemon}
					alt="img"
					width={300}
					height={300}
					ref={productImage}
					className=""
				/>
				<div
					className="flex flex-col justify-between flex-grow"
					ref={addToCart}
				>
					<div ref={productDetails}>
						<p>Football</p>
						<p className="text-3xl font-bold">X CRAZYFAST.1 FG</p>
						<p className="font-semibold">€ 260</p>
					</div>
					<div className="flex  items-end justify-between ">
						<button className="flex border-2 h-[50px] items-center w-[300px] justify-center gap-x-12">
							<p>ADD TO CART</p>
							<LiaOpencart size={25} />
						</button>
						<div className="">
							<p>3 colors available</p>
							<div className="flex gap-x-4">
								<Image
									src={black}
									alt="img"
									width={80}
									height={80}
								/>
								<Image
									src={white}
									alt="img"
									width={80}
									height={80}
								/>
								<Image
									src={lemon}
									alt="img"
									width={80}
									height={80}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
