import { useRecoilState } from 'recoil';
import { listaDeColaboradores } from '../states/atom';

export const useAdicionarColaborador = () => {
    const [colaboradores, setColaboradores] = useRecoilState(listaDeColaboradores);

    const adicionarColaborador = (colaborador) => {
        setColaboradores([...colaboradores, colaborador]);
    };

    return adicionarColaborador;
};