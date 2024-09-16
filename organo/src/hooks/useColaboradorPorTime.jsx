import { useRecoilValue } from "recoil"
import { colaboradoresPorTime } from "../states/seletores"
import Colaborador from "../componentes/Colaborador"

export const useColaboradorPorTime = (nome) => {

    const timesComColaboradores = useRecoilValue (colaboradoresPorTime)
    const time = timesComColaboradores.find(t => t.nome === nome)

    const colaboradores = time.colaboradores.map(colaborador => (
        <Colaborador
            key={colaborador.nome}
            nome={colaborador.nome}
        />
    ));

    return {time, colaboradores}
}