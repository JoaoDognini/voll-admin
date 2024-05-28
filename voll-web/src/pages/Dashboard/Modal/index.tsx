import { Box, Checkbox, FormControlLabel, FormGroup, Modal, Switch } from "@mui/material";
import Titulo from "../../../components/Titulo";
import styled from "styled-components";
import CampoDigitacao from "../../../components/CampoDigitacao";
import Subtitulo from "../../../components/Subtitulo";
import Botao from "../../../components/Botao";
import { useState } from "react";
import usePost from "../../../usePost";
import IProfissional from "../../../types/IProfissional";
import autenticaStore from "../../../stores/autentica.store";

interface ModalCadastroProps {
	open: boolean;
	handleClose: () => void;
}

const BoxCustomizado = styled(Box)`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 30vw;
	max-height: 90vh;
	overflow-y: auto;
	background-color: #FFF;
	border: none;
	border-radius: 16px;
	padding: 1em 5em;
`

const ContainerEndereco = styled.div`
	display: grid;
  	grid-template-columns: 2fr 1fr;
	grid-gap: 0 1em;
`

const ContainerSwitch = styled.div`
	text-align: center;
`

const TextoSwitch = styled.p`
	font-weight: 400;
	color: var(--cinza);
`

const BotaoCustomizado = styled(Botao)`
    width: 50%;
    display: block;
    margin: 0 auto;
`

export default function ModalCadastro({ open, handleClose }: ModalCadastroProps) {
	const [possuiPlano, setPossuiPlano] = useState(false);
	const [planosSaude, setPlanosSaude] = useState<string[]>([])
	const [nome, setNome] = useState('');
	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');
	const [confirmaSenha, setConfirmaSenha] = useState('');
	const [especialidade, setEspecialidade] = useState('');
	const [crm, setCRM] = useState('');
	const [telefone, setTelefone] = useState('');
	const [imagem, setImagem] = useState('');
	const [cep, setCep] = useState('');
	const [rua, setRua] = useState('');
	const [numero, setNumero] = useState('');
	const [complemento, setComplemento] = useState('');
	const [estado, setEstado] = useState('');
	const { cadastrarDados, erro, sucesso } = usePost();
	const { usuario } = autenticaStore;

	const atendePorPlano = () => {
		possuiPlano
			? setPossuiPlano(false)
			: setPossuiPlano(true)
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const valorCheckbox = event.target.value;

		event.target.checked
			? setPlanosSaude([...planosSaude, valorCheckbox])
			: setPlanosSaude(planosSaude.filter(plano => plano !== valorCheckbox))
	}

	const cadastrarEspecialista = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const especialista: IProfissional = {
			nome,
			email,
			senha,
			telefone,
			crm,
			especialidade,
			planosSaude,
			possuiPlanoSaude: possuiPlano,
			estaAtivo: true,
			imagem,
			endereco: {
				cep,
				complemento,
				estado,
				numero,
				rua
			}
		}

		try {
			await cadastrarDados({ url: 'especialista', dados: especialista, token: usuario.token })
		} catch (error) {
			erro && alert('Erro ao cadastrar os dados')
		}
	}

	return (
		<>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="Modal de Cadastro do usuário"
				aria-describedby="Nesse modal terá os dados de cadastro do especialista"
			>
				<BoxCustomizado>
					<Titulo>Cadastre o especialista inserindo os dados abaixo:</Titulo>
					<form onSubmit={cadastrarEspecialista}>
						<CampoDigitacao
							onChange={setNome}
							placeholder="Digite seu nome completo"
							label="Nome"
							required
							valor={nome}
							tipo="text"
						/>
						<CampoDigitacao
							onChange={setEmail}
							placeholder="Insira seu endereço de email"
							label="Email"
							required
							valor={email}
							tipo="text"
						/>
						<CampoDigitacao
							onChange={setSenha}
							placeholder="Digite sua senha"
							label="Crie uma senha"
							required
							valor={senha}
							tipo="text"
						/>
						<CampoDigitacao
							onChange={setConfirmaSenha}
							placeholder="Repita sua senha anterior"
							label="Repita a senha"
							required
							valor={confirmaSenha}
							tipo="text"
						/>
						<CampoDigitacao
							onChange={setEspecialidade}
							placeholder="Qual a sua especialidade?"
							label="Especialidade"
							required
							valor={especialidade}
							tipo="text"
						/>
						<CampoDigitacao
							onChange={setCRM}
							placeholder="Insira seu número de registro"
							label="CRM"
							required
							valor={crm}
							tipo="text"
						/>
						<CampoDigitacao
							onChange={setTelefone}
							placeholder="(DDD) XXXXX-XXXX"
							label="Telefone"
							required
							valor={telefone}
							tipo="text"
						/>
						<CampoDigitacao
							onChange={setImagem}
							placeholder="https://img.com/fotos/retrato-de-um-jovem-medico"
							label="Insira a URL da Imagem"
							required
							valor={imagem}
							tipo="text"
						/>
						<CampoDigitacao
							onChange={setCep}
							placeholder="Insira o CEP"
							label="Endereço"
							required
							valor={cep}
							tipo="text"
						/>
						<ContainerEndereco>
							<CampoDigitacao
								onChange={setRua}
								placeholder="Rua"
								required
								valor={rua}
								tipo="text"
							/>
							<CampoDigitacao
								onChange={setNumero}
								placeholder="Número"
								required
								valor={numero}
								tipo="text"
							/>

							<CampoDigitacao
								onChange={setComplemento}
								placeholder="Complemento"
								required
								valor={complemento}
								tipo="text"
							/>

							<CampoDigitacao
								onChange={setEstado}
								placeholder="Estado"
								required
								valor={estado}
								tipo="text"
							/>
						</ContainerEndereco>

						<ContainerSwitch>
							<Subtitulo>Atende por plano?</Subtitulo>
							<Switch onChange={() => atendePorPlano()}
							></Switch>
							<TextoSwitch>Não/Sim</TextoSwitch>
						</ContainerSwitch>

						{possuiPlano
							? <>
								<Subtitulo>Selecione os planos:</Subtitulo>
								<FormGroup>
									<FormControlLabel control={<Checkbox onChange={handleChange} value='Sulamerica' />} label="Sulamerica" />
									<FormControlLabel control={<Checkbox onChange={handleChange} value='Unimed' />} label="Unimed" />
									<FormControlLabel control={<Checkbox onChange={handleChange} value='Bradesco' />} label="Bradesco" />
									<FormControlLabel control={<Checkbox onChange={handleChange} value='Amil' />} label="Amil" />
									<FormControlLabel control={<Checkbox onChange={handleChange} value='Biosaúde' />} label="Biosaúde" />
									<FormControlLabel control={<Checkbox onChange={handleChange} value='Biovida' />} label="Biovida" />
									<FormControlLabel control={<Checkbox onChange={handleChange} value='Outro' />} label="Outro" />
								</FormGroup>
							</>
							: ''
						}

						<BotaoCustomizado type="submit">Cadastrar</BotaoCustomizado>
					</form>
				</BoxCustomizado>
			</Modal>
		</>
	)
}
