import { Tecnologia } from "@core";

export interface TecnologiasTrabalhadasProps {
	lista: Tecnologia[];
}

export default function TecnologiasTrabalhadas(props: TecnologiasTrabalhadasProps) {
	const rainbowColors = [
		"text-red-500",
		"text-orange-500",
		"text-yellow-500",
		"text-green-500",
		"text-blue-500",
		"text-indigo-500",
		"text-purple-500",
	];

	return props.lista ? (
		<div className="flex justify-center items-center p-6 w-full lg:w-72 bg-black border border-zinc-800 rounded-2xl">
			<div className="flex justify-center gap-x-3 flex-wrap">
				{props.lista.map((tecnologia, index) => (
					<div key={tecnologia.id}>
						<span
							className={`${rainbowColors[index % rainbowColors.length]} font-bold`}
						>
							#
						</span>
						<span> {tecnologia.nome}</span>
					</div>
				))}
			</div>
		</div>
	) : null;
}
