import { useAtualizarCampos } from '../../hooks/useAtualizarCampos';
import { useRecoilValue } from 'recoil';
import { camposObrigatorios } from '../../states/atom';
import './CampoTexto.css'
import { useIdentificacaoDosCampos } from '../../hooks/useIdentificacaoDosCampos';

export default function CampoTexto({ campo }) {

    const { valor, atualizarCampo } = useAtualizarCampos(campo);
    const obrigatorio = useRecoilValue(camposObrigatorios);
    const { label, placeholder } = useIdentificacaoDosCampos(campo);

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input
                value={valor}
                onChange={atualizarCampo}
                required={obrigatorio}
                placeholder={placeholder}
            />
        </div>
    )
}
