import { Projeto } from "@core";
import { Controller, Get, Param } from "@nestjs/common";
import { ProjetoProvider } from "./projeto.provider";

@Controller("projetos")
export class ProjetoController {
	constructor(private readonly repo: ProjetoProvider) {}

	@Get()
	async obterTodas(): Promise<Projeto[]> {
		return this.repo.obterTodas();
	}

	@Get(":id")
	async obterPorId(@Param("id") id: string): Promise<Projeto | null> {
		return this.repo.obterPorId(Number(id));
	}
}
