import { Module } from "@nestjs/common";
import { DbModule } from "src/db/db.module";
import { TecnologiaController } from "./tecnologia.controller";
import { TecnologiaProvider } from "./tecnologia.provider";

@Module({
	controllers: [TecnologiaController],
	providers: [TecnologiaProvider],
	imports: [DbModule],
})
export class TecnologiaModule {}
