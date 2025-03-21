import { Module } from "@nestjs/common";
import { DbModule } from "src/db/db.module";
import { ProjetoController } from "./projeto.controller";
import { ProjetoProvider } from "./projeto.provider";

@Module({
	providers: [ProjetoProvider],
	controllers: [ProjetoController],
	imports: [DbModule],
})
export class ProjetoModule {}
