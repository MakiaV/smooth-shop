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
		<div className="relative">
			<Header />

			<Product />
			<div className="py-[400px] px-[150px]  2xl:px-[200px]">
				<ProductDetails />
			</div>
		</div>
	);
}
