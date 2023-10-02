import Image from "next/image";

import Description from "./Description";
import Sizes from "./Sizes";
import CompletLook from "./CompletLook";
import ProductImages from "./ProductImages";

const ProductDetails = () => {
	return (
		<div className="">
			<Description />
			<ProductImages />
			<Sizes />
			<CompletLook />
		</div>
	);
};

export default ProductDetails;
