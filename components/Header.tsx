import Image from "next/image";
import logo from "../public/images/logo.png";
import { LiaOpencart } from "react-icons/lia";
import { BiUser } from "react-icons/bi";

const Header = () => {
	return (
		<div className="fixed top-0 left-0 w-full border border-b-1">
			<div className="flex px-[150px]  2xl:px-[200px] py-4  justify-between items-center w-full z-50 bg-white">
				<Image src={logo} alt="img" width={50} height={50} />
				<div className="flex gap-x-8">
					<p className="cursor-pointer font-semibold hover:text-green-800">
						MEN
					</p>
					<p className="cursor-pointer font-semibold hover:text-green-800">
						WOMEN
					</p>
					<p className="cursor-pointer font-semibold hover:text-green-800">
						KIDS
					</p>
					<p className="cursor-pointer font-semibold hover:text-green-800">
						COLLECTION
					</p>
				</div>
				<div className="flex items-center gap-x-4">
					<BiUser size={22} />
					<LiaOpencart size={25} />
				</div>
			</div>
		</div>
	);
};

export default Header;
