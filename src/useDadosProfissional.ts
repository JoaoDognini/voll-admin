import IProfissional from "./components/types/IProfissional";
import useFetch from "./useFetch";

const useDadosProfissional = () => {
	return useFetch<IProfissional[]>({ url: 'profissionais' });
}

export default useDadosProfissional;