import { Projeto, Tipo } from "@core";
import { Injectable } from "@nestjs/common";
import { PrismaProvider } from "src/db/prisma.provider";

@Injectable()
export class ProjetoProvider {
	constructor(private readonly prisma: PrismaProvider) {}

	async obterTodas(): Promise<Projeto[]> {
		const projetos = await this.prisma.projeto.findMany({
			include: {
				tecnologias: true,
			},
		});

		return projetos.map((projeto) => ({
			...projeto,
			tipo: (projeto.tipo as Tipo) ?? "",
		}));
	}

	async obterPorId(id: number): Promise<Projeto | null> {
		const projeto = await this.prisma.projeto.findUnique({
			where: {
				id,
			},
			include: {
				tecnologias: true,
			},
		});

		if (projeto) {
			return {
				...projeto,
				tipo: (projeto.tipo as Tipo) ?? "",
			};
		}

		return null;
	}
}
