import LookCard from "./LookCard";
import t1 from "../public/images/t1.avif";
import t2 from "../public/images/t2.avif";
import t3 from "../public/images/t3.avif";
import t4 from "../public/images/t4.avif";

const CompletLook = () => {
	return (
		<div className="my-10">
			<p className="text-2xl font-bold mb-4">COMPLETE THE LOOK</p>
			<div className="flex gap-4 flex-wrap">
				<LookCard img={t1} title="Tiro 23 League Jersy" price="30 €" />
				<LookCard
					img={t2}
					title="Tiro 23 League Training Jacket"
					price="50 €"
				/>
				<LookCard
					img={t3}
					title="Tiro 23 League Training Sport"
					price="30 €"
				/>
				<LookCard img={t4} title="Adi 23 Socks" price="15 €" />
			</div>
		</div>
	);
};

export default CompletLook;
