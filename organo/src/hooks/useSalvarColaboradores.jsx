import { camposDoFormulario } from '../states/atom'
import { useAdicionarColaborador } from './useAdicionarColaborador'
import { useRecoilState } from  'recoil'

export const useSalvarColaboradores = () => {
    const adicionarColaborador = useAdicionarColaborador()
    const [formulario, setFormulario] = useRecoilState(camposDoFormulario)

    const aoSalvar = (evento) => {
        evento.preventDefault()
        adicionarColaborador(formulario)
        resetarCampos()
    }

    const resetarCampos = () => {
        setFormulario({
            nome:'',
            cargo:'',
            imagem:'',
            time:''
        })
    }

    return aoSalvar
}