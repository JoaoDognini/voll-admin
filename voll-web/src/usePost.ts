import { useState } from "react";

interface CadastroProps<T> {
	url: string
	dados: T
}

export default function usePost() {
	const [erro, setErro] = useState('');
	const [sucesso, setSucesso] = useState(false);

	async function cadastrarDados<T>({ url, dados }: CadastroProps<T>) {
		try {
			await fetch(`http://localhost:8080/${url}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(dados)
			})

			setSucesso(true)
		} catch (error) {
			setErro('Não foi possível enviar os dados')
		}
	}

	return { cadastrarDados, sucesso, erro }
}
