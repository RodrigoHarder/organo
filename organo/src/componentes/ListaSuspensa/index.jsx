import { useAtualizarCampos } from '../../hooks/useAtualizarCampos';
import { useRecoilValue } from 'recoil';
import './ListaSuspensa.css';
import { camposObrigatorios} from '../../states/atom';
import { useIdentificacaoDosCampos } from '../../hooks/useIdentificacaoDosCampos';
import { listaDeTimes } from '../../states/seletores';

export default function ListaSuspensa({ campo }) {
    const { valor, atualizarCampo } = useAtualizarCampos(campo);
    const obrigatorio = useRecoilValue(camposObrigatorios);
    const { label } = useIdentificacaoDosCampos(campo);
    const times = useRecoilValue(listaDeTimes);
    const itensDaLista = times.map((item) => (
        <option key={item.nome}>{item.nome}</option>
    ));

    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select
                onChange={atualizarCampo}
                required={obrigatorio}
                value={valor}
            >
                <option value=""></option>
                {itensDaLista}
            </select>
        </div>
    );
}