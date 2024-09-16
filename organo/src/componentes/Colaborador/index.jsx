import { useRecoilValue } from 'recoil';
import { colaboradorPorNome } from '../../states/seletores';
import './Colaborador.css';

export default function Colaborador({ nome }) {
    const colaborador = useRecoilValue(colaboradorPorNome(nome));

    return (
        <div className='colaborador'>
            <div
                className='cabecalho'
                style={{ backgroundColor: colaborador.corDeFundo }}
            >
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            <div className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
            </div>
        </div>
    );
}

