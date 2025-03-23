import Image from "next/image";

export default function MiniCV() {
	return (
		<div className="flex-1 flex gap-6 flex-col-reverse md:flex-row xl:flex-row lg:flex-col-reverse items-center md:items-start lg:items-center xl:items-start px-6 pt-6 bg-black border border-zinc-800 rounded-2xl">
			<div className="relative min-w-72 h-64 xl:self-end">
				<Image src="/minha-foto.png" alt="Foto de perfil" fill />
			</div>
			<div className="flex flex-col gap-5 self-center py-6 items-center md:items-start xl:items-start lg:items-center">
				<div className="flex flex-col items-center md:items-start xl:items-start lg:items-center">
					<span
						className="
                        bg-gradient-to-r from-red-500 via-white to-white
                        text-transparent bg-clip-text text-2xl font-bold
                    "
					>
						Pedro Monteiro
					</span>
					<span>Desenvolvedor Fullstack</span>
				</div>
				<p className="text-sm text-center md:text-left lg:text-center xl:text-left">
					Hello. I&apos;m Pedro Monteiro, a resourceful and dedicated software
					professional with a background in Informatics Engineering from IADE. My
					commitment to continuous learning is reflected in my diverse portfolio of
					certifications, including Scrum, Azure Fundamentals, Azure AI Engineer
					Associate, Lean Foundations, and full-stack development. I excel at harnessing
					modern technologies like TypeScript, Python, JavaScript, .NET, and Angular to
					create robust and efficient solutions. Known for my strong analytical skills,
					exceptional organizational abilities, and adaptive mindset, I thrive in dynamic
					environments where collaboration and innovation are paramount. I am passionate
					about leveraging my technical expertise and agile methodologies to drive
					operational excellence and contribute to transformative digital initiatives.
				</p>
			</div>
		</div>
	);
}
