import Image from "next/image";
import d2 from "../public/images/2.avif";
import d3 from "../public/images/3.avif";
import lemon from "../public/images/lemon.avif";
import white from "../public/images/white.avif";
import black from "../public/images/black.avif";

const ProductImages = () => {
	return (
		<div className="flex gap-4 flex-wrap">
			<video
				src="https://assets.adidas.com/videos/ar_1,w_720,c_fill,q_auto,f_auto/dd8c1f6ad37a420ebcdcf229b826dca8_d98c/X_CRAZYFAST.1_FG_White_HQ4516_video.mp4"
				autoPlay
				muted
				loop
				width={300}
				height={300}
			/>
			<Image
				src={d2}
				alt="img"
				width={300}
				height={300}
				// ref={productImage}
				className=""
			/>
			<Image
				src={d3}
				alt="img"
				width={300}
				height={300}
				// ref={productImage}
				className=""
			/>
			<Image
				src={black}
				alt="img"
				width={300}
				height={300}
				// ref={productImage}
				className=""
			/>
			<Image
				src={white}
				alt="img"
				width={300}
				height={300}
				// ref={productImage}
				className=""
			/>
			<Image
				src={lemon}
				alt="img"
				width={300}
				height={300}
				// ref={productImage}
				className=""
			/>
		</div>
	);
};

export default ProductImages;
