import Image from 'next/image';

export default function AboutPage() {
	return (
		<div className="text-white p-8 max-w-[1400px] mx-auto">
			<section className="text-center mb-16">
				<h1 className="text-4xl xxl:text-6xl font-bold mb-4">ABOUT</h1>
				<div className="w-[250px] mx-auto mb-8 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full opacity-80"></div>

				<div className="grid grid-cols-1 gap-32 mt-32">
					<div>
						<h2 className="text-2xl xxl:text-4xl font-semibold mb-2 text-center md:text-left">Proven Builders</h2>
						<div className="w-[250px] mx-0 mb-8 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-transparent rounded-full opacity-80"></div>
						<p className="text-sm xxl:text-xl text-center md:text-left max-w-xl">
							Founded in 2022, Hydrogen Labs is a team of proven builders combining crypto native experience with a focus on real world sustainable
							business models.
							<br />
							<br />
							We have a proven track record of developing and launching complex crypto financial applications across multiple blockchains. Our team
							specializes in sophisticated R&D and developing with proprietary programming languages. We retain full ownership in our developments and
							take products to market with the full range of marketing and business development strategies.
						</p>
					</div>
					<div className="flex flex-col items-center md:items-end">
						<h2 className="text-2xl xxl:text-4xl font-semibold mb-2 text-center md:text-right">Liquid Staking Technology</h2>
						<div className="w-[250px] ml-auto mb-8 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-blue-500 rounded-full opacity-80"></div>{' '}
						<p className="text-sm xxl:text-xl text-center md:text-right max-w-xl">
							Our core focus is Liquid Staking Token (LST) technology, allowing stakers to unlock the inherent value from their staking positions.
							<br />
							<br />
							Alongside LST development is the implementation of custom Miner Extracted Value (MEV) clients enabling sophisticated transaction
							optimization strategies that can improve liquidity, reduce inefficiencies, and provide additional yield for stakers. Another area of
							focus is Distributed Validator Technology (DVT), where we are partnering to build the first high-throughput DVT which will reduce
							slashing risks for stakers by an order of magnitude.
						</p>
					</div>
				</div>
			</section>
			<section className="text-center mb-64 mt-64">
				<h1 className="text-4xl xxl:text-6xl font-bold mb-4">FOUNDERS</h1>
				<div className="w-[250px] mx-auto mb-8 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full opacity-80"></div>
				{/* <p className="text-sm text-center">
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
					volutpat. Ut wisi enim ad
				</p> */}
				<div className="flex justify-center gap-32 mt-32 md:flex-row flex-col">
					<div className="flex flex-col items-center text-center">
						<Image src="https://media.hydrogenlabs.xyz/bank.avif" alt="Meir Bank" width={128} height={128} className="rounded-full mb-4" />
						<h2 className="text-xl xxl:text-2xl font-semibold">Meir Bank</h2>
						<p className="text-sm xxl:text-xl">
							Co-Founder & CTO
							<br />
							Previously AngelDAO
						</p>
					</div>
					<div className="flex flex-col items-center text-center">
						<Image src="https://media.hydrogenlabs.xyz/mass.avif" alt="David Mass" width={128} height={128} className="rounded-full mb-4" />
						<h2 className="text-xl xxl:text-2xl font-semibold">David Mass</h2>
						<p className="text-sm xxl:text-xl">
							Co-Founder & CEO
							<br />
							Previously Citibank, Deloitte
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
