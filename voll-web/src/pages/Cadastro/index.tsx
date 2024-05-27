import { Step, StepLabel, Stepper } from '@mui/material'
import { useState } from 'react';
import styled from 'styled-components'
import CampoDigitacao from '../../components/CampoDigitacao';
import Botao from '../../components/Botao';
import IClinica from '../../types/IClinica';
import usePost from '../../usePost';
import { useNavigate } from 'react-router-dom';

interface PropsCustomizadas {
	cor: string;
}

const Titulo = styled.h1`
	color: var(--cinza);
	font-size: 24px;
`

const StepCustomizado = styled.div<PropsCustomizadas>`
	background-color: ${({ cor }) => cor};
	width: 16px;
	height: 16px;
	border-radius: 50%;
`

const FormularioEstilizado = styled.form`
	display: flex;
	flex-direction: column;
	width: 70%;
	align-items: center;
`

const BotaoEstilizado = styled(Botao)`
	width: 50%;
`

const Container = styled.div`
	display: grid;
	width: 100%;
  	grid-template-columns: 30% 65%;
  	justify-content: space-between;
`

export default function Cadastro() {
	const [etapaAtiva, setEtapaAtiva] = useState(0);
	const [nome, setNome] = useState('');
	const [cnpj, setCnpj] = useState('');
	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');
	const [confirmaSenha, setConfirmaSenha] = useState('');
	const [telefone, setTelefone] = useState('');
	const [cep, setCep] = useState('');
	/* Endereço */
	const [rua, setRua] = useState('');
	const [numero, setNumero] = useState('');
	const [complemento, setComplemento] = useState('');
	const [estado, setEstado] = useState('');
	const { cadastrarDados, erro, sucesso } = usePost();
	const navigate = useNavigate();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const clinica: IClinica = {
			nome: nome,
			email: email,
			senha: senha,
			endereco: {
				cep: cep,
				rua: rua,
				numero: numero,
				complemento: complemento,
				estado: estado,
			}
		}

		if (etapaAtiva !== 0) {
			try {
				cadastrarDados({ url: 'clinica', dados: clinica })
				navigate('/login')
			} catch (error) {
				erro && alert('Erro ao cadastrar os dados')
			}
		}

		setEtapaAtiva(etapaAtiva + 1);
	}

	return (
		<>
			<Stepper activeStep={etapaAtiva}>
				<Step>
					<StepLabel
						StepIconComponent={(props) => (
							<StepCustomizado cor={props.active ? 'lightblue' : 'lightgray'} />
						)}
					/>
				</Step>
				<Step>
					<StepLabel
						StepIconComponent={(props) => (
							<StepCustomizado cor={props.active ? 'lightblue' : 'lightgray'} />
						)}
					/>
				</Step>
			</Stepper>

			{
				etapaAtiva === 0 ?
					<FormularioEstilizado onSubmit={handleSubmit}>
						<Titulo>Primeiro, alguns dados básicos:</Titulo>
						<CampoDigitacao
							onChange={setNome}
							placeholder='Digite o nome da clínica'
							required
							tipo='text'
							valor={nome}
							label='Nome'
						/>

						<CampoDigitacao
							onChange={setCnpj}
							placeholder='Digite o CNPJ'
							required
							tipo='text'
							valor={cnpj}
							label='CNPJ'
						/>

						<CampoDigitacao
							onChange={setEmail}
							placeholder='Insira o endereço de e-mail para login'
							required
							tipo='text'
							valor={email}
							label='Email'
						/>

						<CampoDigitacao
							onChange={setSenha}
							placeholder='Digite sua senha'
							required
							tipo='password'
							valor={senha}
							label='Crie uma senha'
						/>

						<CampoDigitacao
							onChange={setConfirmaSenha}
							placeholder='Repita a senha anterior'
							required
							tipo='password'
							valor={confirmaSenha}
							label='Repita a senha'
						/>
						<BotaoEstilizado type='submit'>Avançar</BotaoEstilizado>
					</FormularioEstilizado>

					:
					<FormularioEstilizado onSubmit={handleSubmit}>
						<Titulo>Agora, os dados técnicos:</Titulo>
						<CampoDigitacao
							onChange={setTelefone}
							placeholder='(DDD) XXXXX-XXXX'
							required
							tipo='text'
							valor={telefone}
							label='Telefone'
						/>

						<CampoDigitacao
							onChange={setCep}
							placeholder='Insira o CEP'
							required
							tipo='text'
							valor={cep}
							label='CEP'
						/>

						<CampoDigitacao
							onChange={setRua}
							placeholder='Rua'
							required
							tipo='text'
							valor={rua}
							label='Endereço'
						/>

						<Container>
							<CampoDigitacao
								onChange={setNumero}
								placeholder='Número'
								required
								tipo='text'
								valor={numero}
							/>

							<CampoDigitacao
								onChange={setComplemento}
								placeholder='Complemento'
								required
								tipo='text'
								valor={complemento}
							/>

							<CampoDigitacao
								onChange={setEstado}
								placeholder='Estado'
								required
								tipo='text'
								valor={estado}
							/>
						</Container>
						<BotaoEstilizado type='submit'>Cadastrar</BotaoEstilizado>
					</FormularioEstilizado>
			}
		</>
	)
}
