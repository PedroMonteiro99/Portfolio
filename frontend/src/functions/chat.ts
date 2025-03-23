"use server";
import Mensagem from "@/model/Mensagem";

export default async function conversar(
	chatId: string,
	mensagem: Mensagem
): Promise<string | null> {
	const webhookUrl = process.env.CHAT_WEBHOOK;

	if (!webhookUrl) {
		return null;
	}

	const pedido = await fetch(webhookUrl, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			chatId,
			mensagem: mensagem.texto,
		}),
	});

	const resposta = await pedido.json();

	return resposta.resposta;
}
