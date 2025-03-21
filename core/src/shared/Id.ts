export default class Id {
	static gerar(): string {
		return crypto.randomUUID();
	}
}
