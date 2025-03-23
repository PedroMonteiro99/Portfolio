export default interface Mensagem {
	id: string;
	texto: string;
	autor: string;
	data: Date;
	lado: "esquerdo" | "direito";
}
