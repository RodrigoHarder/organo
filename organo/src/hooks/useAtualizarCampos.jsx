import { useRecoilState } from 'recoil';
import { camposDoFormulario } from "../states/atom";


export const useAtualizarCampos = (campo) =>{
    const [formulario, setFormulario] = useRecoilState(camposDoFormulario)
    
    const atualizarCampo = (e) => {
        setFormulario({ ...formulario, [campo]: e.target.value });
    }

    return{
        valor:formulario[campo],
        atualizarCampo
    }
}