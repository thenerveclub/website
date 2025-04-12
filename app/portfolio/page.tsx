import Image from 'next/image';
import { FaGlobe } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const projects = [
	{
		title: 'MAGMA',
		status: 'TESTNET',
		description: 'Magma is a Liquid Staking Protocol on Monad building a Distributed Validator and low-latency MEV client.',
		image: 'https://media.hydrogenlabs.xyz/Magma_Long.avif',
		statusColor: 'rgba(132, 15, 250, 1)',
		twitter: 'https://x.com/magmastaking',
		website: 'https://www.magmastaking.xyz',
	},
	{
		title: 'ROVER',
		status: 'TESTNET',
		description: 'Rover is the flagship Bitcoin Liquid Staking Protocol built on Botanix Labs Spiderchain. Earn yield on your Bitcoin.',
		image: 'https://media.hydrogenlabs.xyz/Rover_Long.avif',
		statusColor: 'rgba(132, 15, 250, 1',
		twitter: 'https://x.com/RoverStaking',
		website: 'https://testnet.roverstaking.com',
	},
	{
		title: 'NOVA',
		status: 'LIVE',
		description: 'USDN is the native decentralized stablecoin of Eclipse.',
		image: 'https://media.hydrogenlabs.xyz/Nova_Long_V2.avif',
		statusColor: 'rgba(118, 159, 234, 1)',
		twitter: 'https://x.com/NovaOnEclipse',
		website: 'https://www.novaprotocol.finance',
	},
	{
		title: 'FLUID PROTOCOL',
		status: 'LIVE',
		description: 'The Native Decentralized Stablecoin of Fuel.',
		image: 'https://media.hydrogenlabs.xyz/Fluid_Long.avif',
		statusColor: 'rgba(118, 159, 234, 1)',
		twitter: 'https://x.com/fluid_protocol',
		website: 'https://fluidprotocol.xyz',
	},
];

export default function Projects() {
	return (
		<div className="bg-transparent text-white p-8 max-w-[1400px] mx-auto">
			<h1 className="text-4xl xxl:text-6xl font-bold mb-4 text-center">OUR PROJECTS</h1>
			<div className="w-[250px] mx-auto mb-8 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full opacity-80"></div>
			<div className="space-y-8 gap-32 mt-32 mb-64">
				{projects.map((project, index) => (
					<div
						key={index}
						className="relative rounded-lg shadow-lg bg-black flex flex-col lg:flex-row items-center h-auto lg:h-[300px] overflow-hidden w-auto mx-auto"
						style={{ background: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)' }}
					>
						<Image
							src={project.image}
							alt={project.title}
							fill
							className={`flex absolute object-cover ${index === 0 ? 'object-[10%_center] md:object-center' : ''}
    ${index === 1 ? 'object-[15%_center] md:object-center' : ''}
    ${index === 2 ? 'object-[95%_center] md:object-center' : ''}
    ${index === 3 ? 'object-[65%_center] md:object-center' : ''} md:object-fit lg:object-contain opacity-50 lg:opacity-100 ${
								index === 0 || index === 3 ? 'scale-x-[-1]' : ''
							}`}
						/>
						{/* Image at the top on mobile */}
						<div className="relative w-full h-auto min-h-[75px] md:hidden">
							{/* <Image src={project.image} alt={project.title} fill className="absolute object-fit md:object-contain" /> */}
							{/* Title overlay only on mobile */}
							<h2 className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold lg:hidden">{project.title}</h2>
						</div>

						{/* Content */}
						<div
							className={`relative z-10 w-full flex flex-col lg:p-24 p-6 text-center ${
								index % 2 === 1 ? 'lg:text-right lg:items-end' : 'lg:text-left lg:items-start'
							} items-center`}
						>
							{/* Title hidden on mobile (only in image now) */}
							<h2 className="text-xl xxl:text-2xl font-bold mb-2 hidden md:block">{project.title}</h2>

							<span style={{ backgroundColor: project.statusColor }} className="text-white px-2 py-1 rounded-full text-sm xxl:text-xl mb-2">
								{project.status}
							</span>
							<div className="flex space-x-4 mt-2 mb-2 justify-center lg:justify-start">
								<a
									href={project.twitter}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={'Visit ' + project.title + ' on X'}
									className="hover:text-gray-400"
								>
									<FaXTwitter size={24} />
								</a>
								<a
									href={project.website}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={'Visit ' + project.title + ' website'}
									className="hover:text-gray-400"
								>
									<FaGlobe size={24} />
								</a>
							</div>
							<p className="mt-4 max-w-xl text-sm xxl:text-xl xxl:max-w-2xl">{project.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
