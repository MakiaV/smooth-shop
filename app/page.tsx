"use client";

import Image from "next/image";

import { LiaOpencart } from "react-icons/lia";
import { BiUser } from "react-icons/bi";
import Header from "@/components/Header";
import Product from "@/components/Product";
import ProductDetails from "@/components/ProductDetails";

import { useEffect } from "react";

export default function Home() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll"))
				.default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	return (
		<div className="relative ">
			<Header />

			<Product />
			<div className="py-[400px] px-[150px]">
				<div className="py-8">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Sapiente inventore sed omnis quis, esse veniam sit dolore
					deleniti magnam! Deserunt, vero? Aut laborum modi doloribus
					accusamus rerum inventore et illo! Lorem ipsum dolor sit
					amet, consectetur adipisicing elit. Sapiente inventore sed
					omnis quis, esse veniam sit dolore deleniti magnam!
					Deserunt, vero? Aut laborum modi doloribus accusamus rerum
					inventore et illo! Lorem ipsum dolor sit amet, consectetur
					adipisicing elit. Sapiente inventore sed omnis quis, esse
					veniam sit dolore deleniti magnam! Deserunt, vero? Aut
					laborum modi doloribus accusamus rerum inventore et illo!
				</div>
				<ProductDetails />
			</div>
		</div>
	);
}
