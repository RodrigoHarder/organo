import { useRecoilValue } from "recoil"
import { listaDeTimes } from "../states/atom"
import Time from "../componentes/Time";

export const useExibirTimesNaTela = () => {

    const times = useRecoilValue(listaDeTimes);
    const timesNaTela = times.map((time) =>
        <Time
            key={time.nome}
            nome={time.nome}
        />)

    return timesNaTela
}